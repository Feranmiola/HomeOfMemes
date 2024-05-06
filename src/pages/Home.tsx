import DarkZone from '@/components/DarkZone';
import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import Roadmap from '@/components/Roadmap';
import Socials from '@/components/Socials';
import Tokenomics from '@/components/Tokenomics';
// import { Button } from '@/components/ui/button'
// import Grow from '@mui/material/Grow';
import useMediaQuery from "@mui/material/useMediaQuery";

const Home = () => {

  const small = useMediaQuery("(max-width:600px)");
  const full = useMediaQuery("(min-width:900px)");
  return (
    <div className=''>
        <div className=' bg-homeBG bgImage h-[`900px]'>
          <div className='flex justify-between pt-4'>
            {full &&(

              <>
                  <img
                  src='./assets/Logo.svg'
                  alt='logo'
                  className='flex ml-24'
                  />
                  <div className=' mt-7 ml-6'>
                    <nav className='flex flex-row bg-white rounded-3xl w-[518px] h-[48px]'>
                      <div className=' items-center justify-center flex mx-2'>
                        <a href='#Home' className=' bg-homeBG rounded-3xl text-white px-8 py-1  font-jockey text-xl'>Home</a>
                        <a href='#About' className='rounded-3xl text-black mx-9 font-jockey text-xl'>About</a>
                        <a href='#Tokenomics' className='rounded-3xl text-black mx-9 font-jockey text-xl'>Tokenomics</a>
                        <a href='#Roadmap'className='rounded-3xl text-black mx-9 font-jockey text-xl'>Roadmap</a>
                      </div>
                    </nav>
                  </div>
                  <div className=' pr-24 mt-8'>
                    <h2 className=' communityText text-white '>Community</h2>
                  </div>
              </>

            )}
            {small &&(
              <>
                  <img
                  src='./assets/Logo.svg'
                  alt='logo'
                  className='flex ml-24'
                  />
                  <div className=' mt-7 ml-6'>
                    <nav className='flex flex-row bg-white rounded-3xl w-[518px] h-[48px]'>
                      <div className=' items-center justify-center flex mx-2'>
                        <a className=' bg-homeBG rounded-3xl text-white px-8 py-1  font-jockey text-xl'>Home</a>
                        <a className='rounded-3xl text-black mx-9 font-jockey text-xl'>About</a>
                        <a className='rounded-3xl text-black mx-9 font-jockey text-xl'>Tokenomics</a>
                        <a className='rounded-3xl text-black mx-9 font-jockey text-xl'>Roadmap</a>
                      </div>
                    </nav>
                  </div>
                  <div className=' pr-24 mt-8'>
                    <h2 className=' communityText text-white '>Community</h2>
                  </div>
              </>

              )}
          </div>
        
        <div id='Home'>
            <HomeSection/>
        </div>
        
        <div id='About' className='darkZone'>
          <DarkZone/>
        </div>  
        
        <div id='Tokenomics'>
          <Tokenomics/>
        </div>
        
        <div id='Roadmap'>
          <Roadmap/>
        </div>
        
        <div>
          <Socials/>
        </div>
        
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home