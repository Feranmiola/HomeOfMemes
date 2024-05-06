// import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";

const Roadmap = () => {
    const small = useMediaQuery("(max-width:600px)");
    const full = useMediaQuery("(min-width:900px)");
  return (
    <div>
        {full && (
            <div className=''>
                <div className=' bg-homeBG h-[750px] pt-10'>
                    <div className=' flex items-center justify-center'>
                        <h2 className='text-white roadmapText text-center'>Roadmap</h2>
                        <img
                        src='./assets/roadmapRing.svg'
                        className='absolute right-[550px]'
                        />
                    </div>
                    <div>
                        <div className=' relative flex items-center justify-center mt-44'>
                        <img
                        src='./assets/RoadmapLine.svg'
                        className=''
                        />
                        </div>

                        <div className='absolute flex left-[390px] top-[3370px] '> 
                            <div className='w-[305px] h-[264px] bg-roadmapContentbg rounded-3xl roadmapShadowBox'>
                                <h2 className='phaseTitle text-white ml-9 mt-10'>Phase 1</h2>
                                <ul className=' mt-7 ml-16 '>
                                <li className='text-white phaseList'>Presale marketing</li>
                                <li className='text-white phaseList'>Presale on PurpleSale</li>
                                <li className='text-white phaseList'>Launch</li>
                                </ul>
                            </div>
                            <div className='w-[305px] h-[264px] bg-white rounded-3xl roadmapShadowBox mx-10'>
                                <h2 className='phaseTitle text-white ml-9 mt-10'>Phase 2</h2>
                                <ul className=' mt-7 ml-16 '>
                                <li className='text-black phaseList'>Post launch marketing</li>
                                <li className='text-black phaseList'>Avedex, dextools, dexscrener trending </li>
                                <li className='text-black phaseList'>CMC, CG listings</li>
                                </ul>
                            
                            </div>

                            <div className='w-[305px] h-[264px] bg-roadmapContentbg rounded-3xl roadmapShadowBox'>
                                <h2 className='phaseTitle text-white ml-9 mt-10'>Phase 3</h2>
                                <ul className=' mt-7 ml-16 '>
                                <li className='text-white phaseList'>10,000 holders</li>
                                <li className='text-white phaseList'>Multichain bridging</li>
                                <li className='text-white phaseList'>Top tier partnerships</li>
                                </ul>
                            
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )}
        
        {small && (
            <div className=''>
                <div className=' bg-homeBG h-[1050px] pt-10'>
                    <div className=' flex items-center justify-center'>
                        <h2 className='text-white roadmapText text-center'>Roadmap</h2>
                        <img
                        src='./assets/roadmapRing.svg'
                        className='absolute right-[460px]'
                        />
                    </div>
                    <div>
                        <div className=' relative flex items-center justify-center mt-44'>
                            <img
                            src='./assets/RoadmapLinestraight.svg'
                            className=''
                            />
                        </div>

                        <div className='flex flex-col'> 
                        <div className='w-[305px] h-[264px] bg-roadmapContentbg rounded-3xl roadmapShadowBox'>
                            <h2 className='phaseTitle text-white ml-9 mt-10'>Phase 1</h2>
                            <ul className=' mt-7 ml-16 '>
                            <li className='text-white phaseList'>Presale marketing</li>
                            <li className='text-white phaseList'>Presale on PurpleSale</li>
                            <li className='text-white phaseList'>Launch</li>
                            </ul>
                        </div>
                        <div className='w-[305px] h-[264px] bg-white rounded-3xl roadmapShadowBox'>
                            <h2 className='phaseTitle text-white ml-9 mt-10'>Phase 2</h2>
                            <ul className=' mt-7 ml-16 '>
                            <li className='text-black phaseList'>Post launch marketing</li>
                            <li className='text-black phaseList'>Avedex, dextools, dexscrener trending </li>
                            <li className='text-black phaseList'>CMC, CG listings</li>
                            </ul>
                        
                        </div>

                        <div className='w-[305px] h-[264px] bg-roadmapContentbg rounded-3xl roadmapShadowBox'>
                            <h2 className='phaseTitle text-white ml-9 mt-10'>Phase 3</h2>
                            <ul className=' mt-7 ml-16 '>
                            <li className='text-white phaseList'>10,000 holders</li>
                            <li className='text-white phaseList'>Multichain bridging</li>
                            <li className='text-white phaseList'>Top tier partnerships</li>
                            </ul>
                        
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Roadmap