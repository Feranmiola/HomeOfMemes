// import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";

const Tokenomics = () => {
    const small = useMediaQuery("(max-width:600px)");
    const full = useMediaQuery("(min-width:900px)");
  return (
    <div>
        {full &&(
            <div className=' pt-10 '>
                <div className="w-full h-[1450px] mt-6 items-center justify-center">
                    <div className=" items-center justify-center flex mt-28">
                        <div className="absolute mt-[30rem]">
                            <div className='tokenomicsBox bg-white p-4 rounded-md'>
                            <h2 className='tokenomicsHeader text-white'>Tokenomics</h2>
                            
                            <div className='grid grid-rows-6 mt-14  border border-black rounded-3xl'>
                                
                            <div className='grid grid-cols-3 border-b border-black mt-3  justify-center'>
                                <p className='tokenomicsCol1 mx-[43px] mb-2'>Community Fund</p>
                                <div className='border-r border-black h-[36px] mr-[194px]'></div>
                                <p className='tokenomicsCol2 ml-[-90px] '>10%</p>
                                </div>

                                <div className='grid grid-cols-3 pt-[14px] pb-[14px] border-b border-black items-center justify-center'>
                                <p className='tokenomicsCol1 mx-[43px]'>Liquidity Pools</p>
                                <div className='border-r border-black h-[36px] mr-[194px] '></div>
                                <p className='tokenomicsCol2 ml-[-90px]'>40%</p>
                                </div>

                                <div className='grid grid-cols-3 border-b border-black items-center justify-center'>
                                <p className='tokenomicsCol1 mx-[43px]'>Presale</p>
                                <div className='border-r border-black h-[36px] mr-[194px] '></div>
                                <p className='tokenomicsCol2 ml-[-90px]'>50%</p>
                                </div>

                                <div className='grid grid-cols-3 border-b border-black items-center justify-center'>
                                <p className='tokenomicsCol1 mx-[43px]'>Total Supply</p>
                                <div className='border-r border-black h-[36px] mr-[194px] '></div>
                                <p className='tokenomicsCol2 ml-[-90px]'>69000000420</p>
                                </div>

                                <div className='grid grid-cols-3 border-b border-black items-center justify-center'>
                                <p className='tokenomicsCol1 mx-[43px]'>Token Name</p>
                                <div className='border-r border-black h-[36px] mr-[194px] '></div>
                                <p className='tokenomicsCol2 ml-[-90px]'>Home of Memes</p>
                                </div>

                                <div className='grid grid-cols-3  border-black items-center justify-center'>
                                <p className='tokenomicsCol1 mx-[43px]'>Token Ticker</p>
                                <div className='border-r border-black h-[36px] mr-[194px] '></div>
                                <p className='tokenomicsCol2 ml-[-90px]'>HOME</p>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="bg-black h-[10%]"></div>
                    <div className=" bg-homeBG h-[90%]">
                        <div className=' pt-[35%] flex justify-center items-center'>
                            <div className='flex flex-col items-center justify-center '>
                            <div className='flex'>
                                <div className='bg-white pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                                    <img
                                    src='./assets/CMC.svg'
                                    />
                                </div>
                                <div className='ml-2 bg-white pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                                    <img
                                    src='./assets/CGK.svg'
                                    />
                                </div>
                                <div className='ml-2 bg-white pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                                    <img
                                    src='./assets/DXT.svg'
                                    />
                                </div>
                                <div className='ml-2 bg-white pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                                    <img
                                    src='./assets/TLG.svg'
                                    />
                                </div>
                            </div>
                            <div className='flex mt-3'>
                                <div className='bg-white pl-[16px]  pr-[17px] shadow-outline-bottom-socials rounded-full items-center justify-center'>
                                    <img
                                    src='./assets/X.svg'
                                    className='pt-[7px] pl-[4px]'
                                    />
                                </div>
                                <div className='ml-2 bg-white pl-[9px] pt-[4px] pb-[1px] pr-[17px] shadow-outline-bottom-socials rounded-full'>
                                    <img
                                    src='./assets/PRPS.svg'
                                    
                                    />
                                </div>
                                <div className='ml-2 bg-white  pl-[9px] pr-[17px] shadow-outline-bottom-socials rounded-full'>
                                    <img
                                    src='./assets/DXSC.svg'
                                    className='pt-[9px] pl-[4px]'
                                    />
                                </div>
                            </div>

                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className=' firstProjectBack items-center justify-center bg-FirstProjectBGColor shadow-outline-bottom-first w-[976px] h-[367px] mt-20 rounded-[39.53px]'>
                                <div className='flex flex-row items-center justify-between'>
                                <div className='flex flex-col'>
                                    <h2 className='firstProjectText text-white text-start w-[460px] ml-16'>First Project on PurpleSale</h2>
                                    <div className=' mt-8 ml-16 items-center justify-center flex flex-row bg-ratedBG w-[223.17px]  rounded-3xl'>
                                    <p className='text-white ratedTextt'>Rated:</p>
                                    <h2 className='text-white alphaText ml-2'>Alpha</h2>
                                    <img
                                    src='./assets/smallStar.svg'
                                    className='ml-1'
                                    />
                                    </div>
                                </div>
                                <div className=' mt-7'>
                                    <img
                                    src='./assets/FirstStar.svg'
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                    </div>
                    </div>

            </div>
        )}

        {small &&(
            <div className=' pt-16 mt-60  mb-[-90px]'>
                <div className="relative h-[1750px] mt-6 items-center justify-center flex">
                    <div className="absolute top-0 left-325px] ">
                        <div className='tokenomicsBoxsm bg-white p-4 rounded-md'>
                        <h2 className='tokenomicsHeadersm text-white'>Tokenomics</h2>
                        
                        <div className='grid grid-rows-6 mt-11 border border-black rounded-3xl'>
                            
                        <div className='grid grid-cols-3 border-b border-black mt-3 justify-center'>
                            <p className='tokenomicsCol1sm ml-[23px] w-[300px]'>Community Fund</p>
                            <div className='border-l ml-16 border-black h-[20px]'></div>
                            <p className='tokenomicsCol2sm ml-[-20px] '>10%</p>
                            </div>

                            <div className='grid grid-cols-3 border-b pt-3 pb-3 border-black items-center justify-center'>
                            <p className='tokenomicsCol1sm ml-[23px] w-[300px]'>Liquidity Pools</p>
                            <div className='border-l ml-16 border-black h-[20px]'></div>
                            <p className='tokenomicsCol2sm ml-[-20px] '>40%</p>
                            </div>

                            <div className='grid grid-cols-3 border-b border-black items-center justify-center'>
                            <p className='tokenomicsCol1sm ml-[23px] w-[300px]'>Presale</p>
                            <div className='border-l ml-16 border-black h-[20px]'></div>
                            <p className='tokenomicsCol2sm ml-[-20px] '>50%</p>
                            </div>

                            <div className='grid grid-cols-3 border-b border-black items-center justify-center'>
                            <p className='tokenomicsCol1sm ml-[23px] w-[300px]'>Total Supply</p>
                            <div className='border-l ml-16 border-black h-[20px]'></div>
                            <p className='tokenomicsCol2sm ml-[-20px] '>69000000420</p>
                            </div>

                            <div className='grid grid-cols-3 border-b border-black items-center justify-center'>
                            <p className='tokenomicsCol1sm ml-[23px] w-[300px]'>Token Name</p>
                            <div className='border-l ml-16 border-black h-[20px]'></div>
                            <p className='tokenomicsCol2sm ml-[-20px] '>Home of Memes</p>
                            </div>

                            <div className='grid grid-cols-3  border-black items-center justify-center'>
                            <p className='tokenomicsCol1sm ml-[23px] w-[300px]'>Token Ticker</p>
                            <div className='border-l ml-16 border-black h-[20px]'></div>
                            <p className='tokenomicsCol2sm ml-[-20px] '>HOME</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="bg-black h-[10%]"></div>
                    <div className=" bg-homeBG h-[90%]">
                        <div className=' pt-[35%] mt-80 flex justify-center items-center'>
                            <div className='flex flex-col items-center justify-center '>
                            <div className='flex'>
                                <div className='bg-white pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                                <img
                                src='./assets/CMC.svg'
                                />
                                </div>
                                <div className='ml-2 bg-white pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                                <img
                                src='./assets/CGK.svg'
                                />
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                <div className='bg-white pl-[16px]  pr-[17px] shadow-outline-bottom-socials rounded-full items-center justify-center'>
                                    <img
                                    src='./assets/X.svg'
                                    className='pt-[7px] pl-[4px]'
                                    />
                                </div>
                                <div className='ml-2 bg-white pl-[9px] pt-[4px] pb-[1px] pr-[17px] shadow-outline-bottom-socials rounded-full'>
                                    <img
                                    src='./assets/PRPS.svg'
                                    
                                    />
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                <div className='ml-2 bg-white pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                                    <img
                                    src='./assets/DXT.svg'
                                    />
                                    </div>
                                    <div className='ml-2 bg-white pl-[9px] pt-[8px] pb-[8px] pr-[16px] shadow-outline-bottom-socials rounded-full'>
                                    <img
                                    src='./assets/TLG.svg'
                                    />
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                <div className='ml-2 bg-white  pl-[9px] pr-[17px] shadow-outline-bottom-socials rounded-full'>
                                    <img
                                    src='./assets/DXSC.svg'
                                    className='pt-[9px] pl-[4px]'
                                    />
                                </div>
                            </div>

                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='  bg-FirstProjectBGColor firstProjectBacksm shadow-outline-bottom-first w-[359px] h-[608px] mt-20 rounded-[39.53px] '>
                                <div className='flex flex-row items-center justify-between'>
                                <div className='flex flex-col'>
                                    <h2 className='firstProjectTextsm text-white text-start w-[300px]  mt-9 ml-5'>First Project on PurpleSale</h2>
                                    <div className=' mt-8 ml-5 items-center justify-center flex flex-row bg-ratedBG w-[223.17px]  rounded-3xl'>
                                    <p className='text-white ratedTextt'>Rated:</p>
                                    <h2 className='text-white alphaText ml-2'>Alpha</h2>
                                    
                                    <img
                                    src='./assets/smallStar.svg'
                                    className='ml-1'
                                    />
                                    </div>
                                    <div className=' mt-28 ml-7 flex items-center justify-center'>
                                        <img
                                        src='./assets/star2.svg'
                                        />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    </div>

            </div>
        )}
    </div>
  )
}

export default Tokenomics