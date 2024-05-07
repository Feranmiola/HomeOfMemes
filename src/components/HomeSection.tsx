// import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from '@/components/ui/button'


const HomeSection = () => {

    const small = useMediaQuery("(max-width:600px)");
    const full = useMediaQuery("(min-width:900px)");
  return (
    <div>
    {full && (
              <div>
                <div className='items-center justify-center mt-[13rem]'>
                <h1 className=' welcomeText text-white text-center'>Welcome to the</h1>
                <div className='flex flex-row items-center justify-center'>
                  <div className='relative flex flex-row mt-3'>
                  <h1 className='   homeBigTitle text-white text-center'>Home of</h1>
                    <img
                    src='./assets/Crown.svg'
                    className='absolute bottom-14 right-24 h-[119px] w-[140px] '
                    />
                    <h1 className=' ml-5 homeBigTitle text-white text-center'> Memes</h1>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <p className=' homeZub2 text-center text-white mt-7'>The Home of all Memes on Base </p>
                  <p className='homeSubText text-center text-white mt-10 w-[736px]'>We are creating a world of memes on the blockchain. Dive into our vibrant community and discover a new era of meme token innovation.</p>
                </div>
                </div>
                <div className='flex justify-center items-center mt-7 '>
                <div className=' flex flex-col  mt-5 w-[728px] h-[51.06px] bg-homeBG rounded-full shadow-outline-bottom'>
                  <div className='ml-6'>
                      <p className='contractAddressText mt-1'>Contract Address</p>
                      <div className='flex justify-between '>
                        <p className='ml-3 text-white font-jost contractAddress '>1wSiaEyq680-L7eof2L0BM5XrwkMGFkk3uOwTiyIupvw</p>
                        <Button className='mx-6 bg-white shadow-outline-bottom hover:bg-slate-300 rounded-full w-[186.94px] text-copyAddressColor text-xl font-jockey mt-[-19px] '>Copy Address</Button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            )}

    {small && (
              <div>
                <div className='items-center justify-center mt-20'>
                <h1 className=' welcomeTextsm text-white text-center'>Welcome to the</h1>
                <div className='flex flex-row items-center justify-center'>
                  <div className='relative flex flex-col mt-[-35px]'>
                    <h1 className='homeBigTitlesm text-white text-center'>Home of</h1>
                      <img
                      src='./assets/Crown.svg'
                      className='absolute bottom-[68px] left-[150px] h-[59.5px] w-[70px] '
                      />
                      <h1 className=' ml-5 homeBigTitlesm text-white text-center mt-[-50px]'> Memes</h1>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <p className=' homeSubTitlesm text-center text-white mt-7'>The Home of all Memes on Base </p>
                  <p className='homeSubTextsm text-center text-white mt-10 w-[296px]'>We are creating a world of memes on the blockchain. Dive into our vibrant community and discover a new era of meme token innovation.</p>
                </div>
                </div>
                <div className='flex justify-center items-center mt-7 '>
                <div className=' flex flex-col  mt-5 w-[346px] h-[51.06px] bg-homeBG rounded-full shadow-outline-bottom'>
                  <div className='ml-6 items-center justify-center flex-col mt-[4px]'>
                      <p className='contractAddressTextsm text-slate-300 mt-1 ml-3'>CONTRACT ADDRESS</p>
                      <div className='flex '>
                        <p className='ml-3 text-white font-jost contractAddresssm '>1wSiaEyq680-L7eof2L0BM5XrwkMGFkk3uOwTiyIupvw</p>
                    </div>
                    <div className=' flex items-center justify-center mt-8'>
                      <Button className='mx-6 bg-white shadow-outline-bottom hover:bg-slate-300 rounded-full w-[186.94px] text-copyAddressColor text-xl font-jockey mt-[-19px] '>Copy Address</Button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
        )}
    </div>
  )
}

export default HomeSection