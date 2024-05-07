import { useState } from 'react';
import DarkZone from '@/components/DarkZone';
import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import Roadmap from '@/components/Roadmap';
import Socials from '@/components/Socials';
import Tokenomics from '@/components/Tokenomics';
// import { Button } from '@/components/ui/button'
// import Grow from '@mui/material/Grow';
import useMediaQuery from "@mui/material/useMediaQuery";
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import { useScroll } from 'react-use';


const Home = () => {

  const small = useMediaQuery("(max-width:600px)");
  const full = useMediaQuery("(min-width:900px)");

  const [activeLink, setActiveLink] = useState('Home');

  const linkStyle = (link:string) => {
    if (link === activeLink) {
      return 'bg-homeBG transition-all duration-500 ease-in-out rounded-3xl text-white px-8 py-1 font-jockey text-xl';
    } else {
      return 'rounded-3xl transition-all duration-500 ease-in-out text-black mx-8 font-jockey text-xl';
    }
  };
  

  return (
    <div className=''>
        <div className=' bg-homeBG bgImage h-[`900px]' id='Home'>
          <div className='flex justify-between pt-4'>
            {full &&(

              <>
                <div className='flex relative justify-between pt-4 navbar'>
                  <img
                      src='./assets/Logo.svg'
                      alt='logo'
                      className='flex ml-24'
                      />
                      <div className=' mt-7 ml-6'>
                        <nav className='flex flex-row bg-white rounded-3xl w-[518px] h-[48px]'>
                          <div className=' items-center justify-center flex mx-2'>
                            <a href='#Home' className={linkStyle('Home')} onClick={() => setActiveLink('Home')}>Home</a>
                            <a href='#About' className={linkStyle('About')} onClick={() => setActiveLink('About')}>About</a>
                            <a href='#Tokenomics' className={linkStyle('Tokenomics')} onClick={() => setActiveLink('Tokenomics')}>Tokenomics</a>
                            <a href='#Roadmap' className={linkStyle('Roadmap')} onClick={() => setActiveLink('Roadmap')}>Roadmap</a>
                          </div>
                        </nav>
                      </div>
                      <div className=' pr-24 mt-8'>
                        <h2 className=' communityText text-white '>Community</h2>
                      </div>

              </div>
              </>

            )}
            {small &&(
              <>
                  <img
                  src='./assets/Logo.svg'
                  alt='logo'
                  className='flex w-[64px] h-[64px] ml-[2rem] mt-[2rem]'
                  />
                  <div className=' flex mr-[2rem] mt-[2rem]'>
                    <img
                    src='./assets/Menu.svg'
                    />
                  </div>
                  {/* <div className=' mt-7 ml-6'>
                    <nav className='flex flex-row bg-white rounded-3xl w-[518px] h-[48px]'>
                      <div className=' items-center justify-center flex mx-2'>
                        <a className=' bg-homeBG rounded-3xl text-white px-8 py-1  font-jockey text-xl'>Home</a>
                        <a className='rounded-3xl text-black mx-9 font-jockey text-xl'>About</a>
                        <a className='rounded-3xl text-black mx-9 font-jockey text-xl'>Tokenomics</a>
                        <a className='rounded-3xl text-black mx-9 font-jockey text-xl'>Roadmap</a>
                      </div>
                    </nav>
                  </div> */}
              </>

              )}
          </div>
        
        <div>
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