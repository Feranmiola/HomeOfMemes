// import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";

const Roadmap = () => {
    const small = useMediaQuery("(max-width:899px)");
    const full = useMediaQuery("(min-width:900px)");
  return (
    <div>
        {full && (
            <div className=''>
                <div className=' bg-homeBG h-[750px] pt-24'>
                    <div className=' flex items-center justify-center'>
                        <div className="flex items-center justify-center">
                            <h2 className='text-white roadmapText text-center'>Roadmap</h2>
                        </div>
                        <img
                        src='./assets/roadmapRing.svg'
                        className='absolute ml-[31rem] ringImage'
                        />
                    </div>
                    <div>
                        <div className=' relative flex items-center justify-center mt-[11rem]'>
                        <img
                        src='./assets/RoadmapLine.svg'
                        className=''
                        />
                        </div>

                        <div className="flex items-center justify-center">
                            <div className='absolute flex mt-[4rem]'> 
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
            </div>
        )}
        
        {small && (
            <div className=''>
                <div className=' bg-homeBG h-[750px] pt-24'>
                    <div className=' flex items-center justify-center mt-[20rem]'>
                        <div className="flex items-center justify-center">
                            <h2 className='text-white roadmapTextsm text-center'>Roadmap</h2>
                        </div>
                        <img
                        src='./assets/roadmapRingSm.svg'
                        className='absolute ml-[16rem] ringImage'
                        />
                    </div>
                    <div>
                        <div className='relative flex items-center justify-center '>
                        <img
                        src='./assets/RoadmapLinestraight.svg'
                        className=''
                        />
                        </div>

                        <div className="flex items-center justify-center">
                            <div className='absolute flex-col mt-[-50rem]'> 
                                <div className='w-[305px] h-[204px] bg-roadmapContentbg rounded-3xl roadmapShadowBox'>
                                    <h2 className='phaseTitlesm text-white ml-9 mt-4'>Phase 1</h2>
                                    <ul className=' mt-1 ml-16 '>
                                    <li className='text-white phaseListsm'>Presale marketing</li>
                                    <li className='text-white phaseListsm'>Presale on PurpleSale</li>
                                    <li className='text-white phaseListsm'>Launch</li>
                                    </ul>
                                </div>
                                <div className='w-[305px] h-[204px] bg-white rounded-3xl roadmapShadowBox mt-6'>
                                    <h2 className='phaseTitlesm text-white ml-9 mt-4'>Phase 2</h2>
                                    <ul className=' mt-1 ml-16 '>
                                    <li className='text-black phaseListsm'>Post launch marketing</li>
                                    <li className='text-black phaseListsm'>Avedex, dextools, dexscrener trending </li>
                                    <li className='text-black phaseListsm'>CMC, CG listings</li>
                                    </ul>
                                
                                </div>

                                <div className='w-[305px] h-[204px] bg-roadmapContentbg rounded-3xl roadmapShadowBox mt-6'>
                                    <h2 className='phaseTitlesm text-white ml-9 mt-4'>Phase 3</h2>
                                    <ul className=' mt-1 ml-16 '>
                                    <li className='text-white phaseListsm'>10,000 holders</li>
                                    <li className='text-white phaseListsm'>Multichain bridging</li>
                                    <li className='text-white phaseListsm'>Top tier partnerships</li>
                                    </ul>
                                
                                </div>
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