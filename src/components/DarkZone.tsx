// import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";


const DarkZone = () => {
    const small = useMediaQuery("(max-width:600px)");
    const full = useMediaQuery("(min-width:900px)");
  return (
    <div>
        {full &&(
            <div className=" items-center justify-center">

              <div className="flex items-center justify-center">
                <div className='flex items-center justify-center flex-row mt-48 pt-10 '>
                  <div className='absolute flex items-center justify-center ml-40'>
                    <div className=' w-[544px] h-[298px] bg-white shadow-outline-about mb-[10rem] mr-[36rem] rounded-2xl'> 
                        <h2 className=' absolute text-white aboutTitle mt-[-29px] ml-5'>About Home of Memes</h2>
                        <p className=' aboutText w-[471px] ml-8 mt-12'>Hallofmemes is more than just a meme token; it's a symbol of unity and collaboration in the digital world. Our journey began with a vision to bring together all the iconic memes under one roof, creating a virtual hall where they could live on forever.</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                    src='./assets/group1.svg'
                    className='ml-[30rem] mt-2'
                    />
                  </div>
                  </div>
              </div>
                <div className="flex">
                  <img
                  src='./assets/logo2.svg'
                  className=' mx-[28%] mt-[-6rem]'
                  />
              </div>
            </div>
        )}

      {small &&(
            <div>
              <div className='flex flex-col pt-10 mt-10 pb-6 '>
                <div className=' mt-20 items-center justify-center flex '>
                  <div className=' bg-white absolute shadow-outline-aboutsm mt-[300px] rounded-2xl'> 
                      <h2 className=' absolute text-white aboutTitlesm mt-[-20px] ml-5'>About Home of Memes</h2>
                      <div className=' items-center justify-center  flex mt-6'>
                        <p className=' aboutTextsm w-[268.64px] mt-3 '>Hallofmemes is more than just a meme token; it's a symbol of unity and collaboration in the digital world. Our journey began with a vision to bring together all the iconic memes under one roof, creating a virtual hall where they could live on forever.</p>
                      </div>
                  </div>
                </div>
                  <img
                  src='./assets/group2.svg'
                  className=' mt-[250px]'
                  />
                   <div className=' items-center justify-center flex'>
                      <img
                      src='./assets/logo2.svg'
                      className=' mt-16'
                      />
                  </div>
                </div>
               
            </div>
        )}
    </div>
  )
}

export default DarkZone