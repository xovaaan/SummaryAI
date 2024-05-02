
import logo from "../assets/icons.png"


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-center items-center w-full mb-4 mt-8 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-12 object-contain' />

      </nav>

      <h1 className=' mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='title mt-5  '>Linkbase AI</span>
      </h1>
      <h2 className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
      AI-driven Article Link to Summary technology condenses linked articles into brief, <span className='desc'>informative overviews using natural language processing</span>
      </h2>
     
    </header>
  );
};

export default Hero;