
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
    // const small = useMediaQuery("(max-width:600px)");
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
        
    </div>
  )
}

export default Footer