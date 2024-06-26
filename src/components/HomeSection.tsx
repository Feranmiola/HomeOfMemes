// import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";
// import { Button } from '@/components/ui/button'
// import {  message } from 'antd';


const HomeSection = () => {

  const small = useMediaQuery("(max-width:899px)");
  const full = useMediaQuery("(min-width:900px)");

    // const [messageApi, contextHolder] = message.useMessage();
    // const key = 'updatable';

    // const contractAddress = '1wSiaEyq680-L7eof2L0BM5XrwkMGFkk3uOwTiyIupvw';

    // const handleCopy= () => {
    //   navigator.clipboard.writeText(contractAddress);
    //   messageApi.open({
    //     key,
    //     type: 'loading',
    //     content: 'Copying...',
    //   });
    //   setTimeout(() => {
    //     messageApi.open({
    //       key,
    //       type: 'success',
    //       content: 'Copied!',
    //       duration: 2,
    //     });
    //   }, 1000)
    // }
  return (
    <div>
       {/* {contextHolder} */}
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
                {/* <div className=' flex flex-col  mt-5 w-[728px] h-[51.06px] bg-homeBG rounded-full shadow-outline-bottom'>
                  <div className='ml-6'>
                      <p className='contractAddressText mt-1'>Contract Address</p>
                      <div className='flex justify-between '>
                        <p className='ml-3 text-white font-jost contractAddress '>{contractAddress}</p>
                        <Button onClick={handleCopy} className='mx-6 bg-white shadow-outline-bottom hover:bg-slate-300 rounded-full w-[186.94px] text-copyAddressColor text-xl font-jockey mt-[-19px] '>Copy Address</Button>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            )}

    {small && (
              <div className="pt-16  mt-32 ">
                <div className='items-center justify-center mt-16'>
                  <div className="flex items-center justify-center">
                    <h1 className=' welcomeTextsm text-white text-center'>Welcome to the</h1>
                  </div>
                <div className='flex flex-row items-center justify-center'>
                  <div className='relative flex flex-col items-center justify-center mt-[-35px]'>
                    <div className="flex items-center justify-center">
                      <h1 className='homeBigTitlesm text-white text-center'>Home of</h1>
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                      src='./assets/Crown.svg'
                      className='absolute bottom-[68px] left-[150px] h-[59.5px] w-[70px] '
                      />
                      <h1 className=' ml-5 homeBigTitlesm text-white text-center mt-[-50px]'> Memes</h1>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <p className=' homeSubTitlesm text-center text-white mt-7'>The Home of all Memes on Base </p>
                  <p className='homeSubTextsm text-center text-white mt-10 w-[296px]'>We are creating a world of memes on the blockchain. Dive into our vibrant community and discover a new era of meme token innovation.</p>
                </div>
                </div>
                <div className='flex justify-center items-center mt-7 '>
                {/* <div className=' flex flex-col  mt-5 w-[346px] h-[51.06px] bg-homeBG rounded-full shadow-outline-bottom'>
                  <div className='items-center justify-center flex-col mt-[4px]'>
                      <p className='contractAddressTextsm text-slate-300 mt-1 ml-6'>CONTRACT ADDRESS</p>
                      <div className='flex items-center justify-center '>
                        <p className=' text-white font-jost contractAddresssm '>{contractAddress}</p>
                    </div>
                    <div className=' flex items-center justify-center mt-8'>
                      <Button onClick={handleCopy} className='bg-white shadow-outline-bottom hover:bg-slate-300 rounded-full w-[186.94px] text-copyAddressColor text-xl font-jockey mt-[-19px] '>Copy Address</Button>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
        )}
    </div>
  )
}

export default HomeSection