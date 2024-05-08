
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const small = useMediaQuery("(max-width:899px)");
  const full = useMediaQuery("(min-width:900px)");
  return (
    <div>
      {full && (
        <div>
            <div className='flex flex-row items-center justify-center bg-homeBG pb-24'>
              <div className='relative flex flex-row mt-3'>
              <h1 className='   homeBigTitle text-white text-center'>Home of</h1>
                <img
                src='./assets/Crown.svg'
                className='absolute bottom-14 right-24 h-[119px] w-[140px] '
                />
                <h1 className=' ml-5 homeBigTitle text-white text-center'> Memes</h1>
              </div>
            </div>
        </div>
      )}

      {small && (
        <div className="bg-homeBG h-[20rem]">
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
        </div>
      )}
        
    </div>
  )
}

export default Footer