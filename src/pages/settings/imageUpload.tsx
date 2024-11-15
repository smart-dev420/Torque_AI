import React, { useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { ThemeContext } from "../../components/Theme/context";
import { getDownloadURL, ref, uploadBytes, getMetadata } from 'firebase/storage';
import { storage } from '../../components/Firebase/firebase';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const ImageUpload: React.FC<{ docId: string }> = ({docId}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const themeContext = useContext(ThemeContext);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
      console.log('#####   File: ', file);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    setFileList(newFileList);

    // Handle file upload when it's done
    const file = newFileList[newFileList.length - 1]?.originFileObj;
    if(docId === "") {
      return;
    }

    if (file) {
      try {
        // Create a reference to the file path in Firebase Storage
        const fileRef = ref(storage, `uploads/${docId}`);
        
        // Check if the file exists by getting metadata
        try {
          const metadata = await getMetadata(fileRef);
          console.log("File already exists:", metadata);
          
          // If the file exists, we will overwrite it by uploading the new file
          const snapshot = await uploadBytes(fileRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          console.log('File uploaded/overwritten successfully:', downloadURL);
        } catch (error) {
          // If the file doesn't exist, `getMetadata` will throw an error
          console.log("File doesn't exist, uploading new file...");
          const snapshot = await uploadBytes(fileRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          console.log('New file uploaded successfully:', downloadURL);
        }
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none', color: themeContext?.theme.titleColor}} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className='content-center'>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
};

export default ImageUpload;
