import { useContext, useState } from "react";
import { ThemeContext } from "../../components/Theme/context";
import CustomSelect, { CustomMenuItem } from "../component/customSelect";
import { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import ImageUpload from "./imageUpload";
const InformationPage = () => {
    const themeContext = useContext(ThemeContext);
    const industryList = [
        { value: 'Retail', name: 'Retail' },
        { value: 'Technology', name: 'Technology' },
        { value: 'Finance', name: 'Finance' },
        { value: 'Healthcare', name: 'Healthcare' },
        { value: 'Real Estate', name: 'Real Estate' },
    ]

    const roleList = [
        { value: 'CMO', name: 'CMO' },
        { value: 'Marketing Manager', name: 'Marketing Manager' },
        { value: 'Digital Marketing Specialist', name: 'Digital Marketing Specialist' },
        { value: 'Growth Hacker', name: 'Growth Hacker' },
        { value: 'CEO', name: 'CEO' },
    ]

    const teamList = [
        { value: '1-10', name: '1-10' },
        { value: '11-50', name: '11-50' },
        { value: '51-200', name: '51-200' },
        { value: '201-500', name: '201-500' },
        { value: '500+', name: '500+' },
    ]

    const [companyName, setCompanyName] = useState('');
    const [industry, setIndustry] = useState('Retail');
    const [role, setRole] = useState('CMO');
    const [teamsize, setTeamsize] = useState('1-10');



    return (
        <>
            <div className="flex flex-row">
                <div className="w-1/3 shrink-0 flex flex-row gap-[16px]">
                    <ImageUpload />
                </div>
                <div className="w-full flex flex-col gap-[16px]">
                    <div className='flex flex-col gap-[8px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            First Name
                        </div>
                        <div className="flex flex-row gap-[32px]">
                            <input className='input-text font-b4-500 font-grey1 w-full' type='text' placeholder='First Name' />
                            <button
                                className="px-[12px] rounded-[50px] Button w-[83px]"
                                style={{
                                    backgroundColor: themeContext?.theme.activeButtonBackground,
                                    color: themeContext?.theme.activeColor,
                                }}
                            >
                                <EditIcon style={{ fontSize: "13px" }} /> edit
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[8px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Last Name
                        </div>
                        <div className="flex flex-row gap-[32px]">
                            <input className='input-text font-b4-500 font-grey1 w-full' type='text' placeholder='Last Name' />
                            <button
                                className="px-[12px] rounded-[50px] Button w-[83px]"
                                style={{
                                    backgroundColor: themeContext?.theme.activeButtonBackground,
                                    color: themeContext?.theme.activeColor,
                                }}
                            >
                                <EditIcon style={{ fontSize: "13px" }} /> edit
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Password
                        </div>
                        <div className="flex flex-row gap-[32px]">
                            <input className='input-text font-b4-500 font-grey1 w-full' type='password' placeholder='password' />
                            <button
                                className="px-[12px] rounded-[50px] Button w-[83px]"
                                style={{
                                    backgroundColor: themeContext?.theme.activeButtonBackground,
                                    color: themeContext?.theme.activeColor,
                                }}
                            >
                                <EditIcon style={{ fontSize: "13px" }} /> edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[8px]'>
                <div className='font-h5-700 font-grey1 text-left'>
                    Company Name
                </div>
                <div className="flex flex-row gap-[32px]">
                    <input className='input-text font-b4-500 font-grey1 w-full' type='text' placeholder='Company Name' />
                    <button
                        className="px-[12px] rounded-[50px] Button w-[75px]"
                        style={{
                            backgroundColor: themeContext?.theme.activeButtonBackground,
                            color: themeContext?.theme.activeColor,
                        }}
                    >
                        <EditIcon style={{ fontSize: "13px" }} /> edit
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-[8px]'>
                <div className='font-h5-700 font-grey1 text-left'>
                    Industry
                </div>

                <CustomSelect
                    IconComponent={(props) => (
                        <KeyboardArrowDownIcon
                            {...props}
                            sx={{ color: '#D9DCFB !important', fontSize: '30px' }}  // Set custom color here
                        />
                    )}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: '#292929',
                                borderRadius: '8px',
                            },
                        },
                    }}

                    value={industry}
                    onChange={(e: SelectChangeEvent<any>) => setIndustry(e.target.value)}
                >
                    {
                        industryList.map(item => (
                            <CustomMenuItem value={item.value}>{item.name}</CustomMenuItem>
                        ))
                    }
                </CustomSelect>

            </div>

            <div className='flex flex-col gap-[8px] '>
                <div className='font-h5-700 font-grey1 text-left'>
                    Role
                </div>
                <CustomSelect className='font-b4-500'
                    IconComponent={(props) => (
                        <KeyboardArrowDownIcon
                            {...props}
                            sx={{ color: '#D9DCFB !important', fontSize: '30px' }}  // Set custom color here
                        />
                    )}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: '#292929',
                                borderRadius: '8px',
                                width: '100px !important',
                            },
                        },
                    }}
                    value={role}
                    onChange={(e: SelectChangeEvent<any>) => setRole(e.target.value)}
                >
                    {
                        roleList.map(item => (
                            <CustomMenuItem value={item.value}>{item.name}</CustomMenuItem>
                        ))
                    }
                </CustomSelect>
            </div>

            <div className='flex flex-col gap-[8px] '>
                <div className='font-h5-700 font-grey1 text-left'>
                    Team Size
                </div>
                <CustomSelect className='font-b4-500'
                    IconComponent={(props) => (
                        <KeyboardArrowDownIcon
                            {...props}
                            sx={{ color: '#D9DCFB !important', fontSize: '30px' }}  // Set custom color here
                        />
                    )}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: '#292929',
                                borderRadius: '8px',
                                width: '100px !important',
                            },
                        },
                    }}
                    value={teamsize}
                    onChange={(e: SelectChangeEvent<any>) => setTeamsize(e.target.value)}
                >
                    {
                        teamList.map(item => (
                            <CustomMenuItem value={item.value}>{item.name}</CustomMenuItem>
                        ))
                    }
                </CustomSelect>
            </div>

        </>
    )
}

export default InformationPage;