// import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";
const Socials = () => {
    const small = useMediaQuery("(max-width:899px)");
    const full = useMediaQuery("(min-width:900px)");
  return (
    <div>

        {full && (
            <div>
                <div className='bg-homeBG h-[600px]'>
                    <div className="flex flex-col items-center  justify-center pt-[7rem]">
                        <div className='flex-row items-center justify-center'>
                            <h2 className='socialTitle text-white'>Follow our social media!</h2>
                            <p className='text-white text-center mt-10 socialText '>Stay Connected for the latest updates and developments within the community.</p>
                        </div>
                        <div className='flex items-center justify-center mt-8'>
                            <a className=" cursor-pointer" href="https://t.me/homeonbase" target="blank">
                                <div className='ml-2 bg-roadmapContentbg pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                                    <div className='flex'>
                                        <img
                                        src='./assets/telegramIcon.svg'
                                        className='ml-2'
                                        />
                                        <h3 className='text-white textTelegram mt-4 ml-2 mr-2'>Telegram</h3>
                                    </div>
                                </div>
                            </a>
                            <a className="cursor-pointer" href="https://x.com/homeonbase" target="blank">
                                <div className='ml-6 bg-roadmapContentbg pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                                    <div className='flex'>
                                        <img
                                        src='./assets/xIcon.svg'
                                        className='ml-2'
                                        />
                                        <h3 className='text-white textTelegram mt-4 ml-2 mr-2'>X (Twitter)</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className='text-white text-center mt-16 copyrightText'>All Rights Reserved © Home of Memes 2024</p>
                    </div>
                </div>
            </div>
        )}

        {small && (
              <div>
              <div className='bg-homeBG h-[80rem]'>
                  <div className="flex flex-col items-center  justify-center pt-[40rem]">
                      <div className='flex-row items-center justify-center'>
                        <div className="flex items-center justify-center">
                            <h2 className='socialTitlesm text-white'>Follow our social media!</h2>
                        </div>
                          <p className='text-white text-center mt-10 socialTextsm w-[306px] '>Stay Connected for the latest updates and developments within the community.</p>
                      </div>
                      <div className='flex flex-col items-center justify-center mt-8'>
                        <a href="https://t.me/homeonbase" target="blank">
                            <div className='bg-roadmapContentbg flex items-center justify-center h-[4.5rem] w-[13rem] shadow-outline-bottom-socials rounded-full'>
                              <div className='flex'>
                                  <img
                                  src='./assets/telegramIcon.svg'
                                  className='ml-2'
                                  />
                                  <h3 className='text-white textTelegram mt-4 ml-2 mr-2'>Telegram</h3>
                              </div>
                          </div>
                        </a>
                        <a href="https://x.com/homeonbase" target="blank">
                            <div className=' mt-5 bg-roadmapContentbg flex items-center justify-center h-[4.5rem] w-[13rem] shadow-outline-bottom-socials rounded-full'>
                              <div className='flex'>
                                  <img
                                  src='./assets/xIcon.svg'
                                  className='ml-2'
                                  />
                                  <h3 className='text-white textTelegram mt-4 ml-2 mr-2'>X (Twitter)</h3>
                              </div>
                          </div>
                        </a>
                      </div>
                      <p className='text-white text-center mt-16 copyrightText'>All Rights Reserved © Home of Memes 2024</p>
                  </div>
              </div>
          </div>
        )}
        
    </div>
  )
}

export default Socials