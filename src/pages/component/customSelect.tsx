import { MenuItem, Select, styled } from '@mui/material';

const CustomSelect = styled(Select)(({ theme }) => ({
    maxHeight: '33px',
    height: "100%",
    backgroundColor: "#292929",
    borderRadius: "20px",
    color:"#D9DCFB !important",
    textAlign: "start",
    fontSize:'12px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#292929',
      color: '#D9DCFB',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#292929',
      color: '#D9DCFB',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#292929',
      color: '#D9DCFB',
    },
    '.MuiOutlinedInput-input': {
        color: '#D9DCFB',  // Change the font color inside the input box
      },

  }));

 export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: '12px',
    maxHeight:'25px',
    color: "#D9DCFB",
    backgroundColor: '#292929 !important',
    '&:hover': {
      backgroundColor: '#292929',
      color: '#fff',
    },
    
  }));

  export default CustomSelect;