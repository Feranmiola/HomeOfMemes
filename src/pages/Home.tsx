import React from 'react';
import { useState } from 'react';
import DarkZone from '@/components/DarkZone';
import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import Roadmap from '@/components/Roadmap';
import Socials from '@/components/Socials';
import Tokenomics from '@/components/Tokenomics';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from "@mui/material/useMediaQuery";
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import { useScroll } from 'react-use';



const Home = () => {

  const small = useMediaQuery("(max-width:899px)");
  const full = useMediaQuery("(min-width:900px)");

  const [activeLink, setActiveLink] = useState('Home');

  const linkStyle = (link:string) => {
    if (link === activeLink) {
      return 'bg-homeBG transition-all duration-500 ease-in-out rounded-3xl text-white px-8 py-1 font-jockey text-xl';
    } else {
      return 'rounded-3xl transition-all duration-500 ease-in-out text-black mx-8 font-jockey text-xl';
    }
  };

  const linkStylesm = (link:string) => {
    if (link === activeLink) {
      return 'bg-homeBG mt-2 link transition-all duration-500 ease-in-out rounded-3xl text-white px-[6rem] py-[0.7rem] font-jockey text-xl';
    } else {
      return 'rounded-3xl link mt-2 transition-all duration-500 ease-in-out text-black mx-8 font-jockey text-xl';
    }
  };


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                      className='flex ml-[6rem]'
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
                      <div className=' pr-[6rem] flex items-center mt-[0.7rem]'>
                        <a href='#Socials' className=' communityText text-white hover:text-blue-200 '>Community</a>
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
                    className='menuImage'
                      id="demo-positioned-button"
                      aria-controls={open ? 'demo-positioned-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    />
                      <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        <div className='flex flex-row justify-between'>
                          <img
                          src='./assets/Logo.svg'
                          alt='logo'
                          className='flex w-[64px] h-[64px] ml-[2rem] mt-[2rem]'
                          />
                          <img
                          src='./assets/close.svg'
                          alt='Close'
                          className='flex w-[40px] h-[40px] ml-[12rem] mr-[2rem] mt-[2.5rem] menuImage'
                          onClick={handleClose}
                          />
                        </div>
                        <div className='flex flex-col items-center mt-5 pt-4 pb-5'>
                          <MenuItem onClick={handleClose}><a href='#Home' className={linkStylesm('Home')} onClick={() => setActiveLink('Home')}>Home</a></MenuItem>
                          <MenuItem onClick={handleClose}><a href='#About' className={linkStylesm('About')} onClick={() => setActiveLink('About')}>About</a></MenuItem>
                          <MenuItem onClick={handleClose}><a href='#Tokenomics' className={linkStylesm('Tokenomics')} onClick={() => setActiveLink('Tokenomics')}>Tokenomics</a></MenuItem>
                          <MenuItem onClick={handleClose}><a href='#Roadmap' className={linkStylesm('Roadmap')} onClick={() => setActiveLink('Roadmap')}>Roadmap</a></MenuItem>
                        </div>
                        <div className='flex items-center justify-center'>
                          <div className=' border-black border-b w-[15rem] border-2 mt-4'></div>
                        </div>
                        <div>
                          <p className='menuCommunity text-center mt-5' >Community</p>
                        </div>
                        <div className='flex items-center justify-center mt-8'>
                        <div className='bg-roadmapContentbg flex items-center justify-center h-[2.912rem] w-[8.926rem] shadow-outline-bottom-socials rounded-full'>
                          <div className='flex'>
                                  <img
                                  src='./assets/telegramIcon.svg'
                                  className='mr-2 w-[33.88px] h-[33.88px]'
                                  />
                                  <div className='flex items-center justify-center'>
                                    <h3 className='text-white textTelegramsm '>Telegram</h3>
                                  </div>
                              </div>
                          </div>
                          <div className='bg-roadmapContentbg flex items-center justify-center h-[2.912rem] w-[8.926rem] shadow-outline-bottom-socials rounded-full ml-3'>
                              <div className='flex'>
                                  <img
                                  src='./assets/xIcon.svg'
                                  className='mr-2 w-[33.88px] h-[33.88px]'
                                  />
                                  <div className='flex items-center justify-center'>
                                    <h3 className='text-white textTelegramsm'>X (Twitter)</h3>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div className='mt-8'>
                          <p className='navbarHOAM text-black'>The Home of all Memes on Base</p>
                          <p className='navbarHOAMText mt-3 mb-6'>All Rights Reserved © Home of Memes 2024</p>
                        </div>
                      </Menu>
                  </div>
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
        
        <div id='Socials'>
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