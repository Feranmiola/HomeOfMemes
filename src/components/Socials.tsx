// import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";
const Socials = () => {
    // const small = useMediaQuery("(max-width:600px)");
    const full = useMediaQuery("(min-width:900px)");
  return (
    <div>

        {full && (
            <div>
                <div className='bg-homeBG h-[600px]'>
                <div className='flex-row items-center justify-center'>
                    <h2 className='socialTitle text-white'>Follow our social media!</h2>
                    <p className='text-white text-center mt-10 socialText '>Stay Connected for the latest updates and developments within the community.</p>
                </div>
                <div className='flex items-center justify-center mt-8'>
                    <div className='ml-2 bg-roadmapContentbg pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                    <div className='flex'>
                        <img
                        src='./assets/telegramIcon.svg'
                        className='ml-2'
                        />
                        <h3 className='text-white textTelegram mt-4 ml-2 mr-2'>Telegram</h3>
                    </div>
                    </div>
                    <div className='ml-6 bg-roadmapContentbg pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                    <div className='flex'>
                        <img
                        src='./assets/xIcon.svg'
                        className='ml-2'
                        />
                        <h3 className='text-white textTelegram mt-4 ml-2 mr-2'>X (Twitter)</h3>
                    </div>
                    </div>
                </div>

                <p className='text-white text-center mt-16 copyrightText'>All Rights Reserved © Home of Memes 2024</p>

                </div>
            </div>
        )}
        
    </div>
  )
}

export default Socials