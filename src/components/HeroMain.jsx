import React from 'react';

const HeroMain = () => {
  const backgroundImageUrl = 'https://media.istockphoto.com/id/530160167/photo/birmingham-alabama-skyline.jpg?s=612x612&w=0&k=20&c=hQ5vuCGwepog5xy3mfahlnOATNHdhvj8efxsq_Dehok=';

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // This ensures the image covers the entire background without distortion
    backgroundPosition: 'center', // Center the background image
  };

  return (
    <>

        <div class="min-h-screen bg-gray-900 flex flex-col justify-center relative px-20">
            <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
                style={containerStyle}>
            </div>
            <div className='h-max py-5 w-[60%] text-white flex flex-col gap-y-4 z-10'>
                <div className='text-7xl font-semibold flex flex-col'>
                        <div className='font-medium text-3xl text-blue-400'>
                            Experience. Results. Communication.
                        </div>
                        <div>
                            Birmingham Criminal
                            <span className="block">Defense Lawyers</span>
                        </div>
                    </div>
                    <div className="text-xl w-2/3">
                        Pooling Expertise, Ideas, and Insights
                        Across England for Your Benefit
                    </div>
                    <div className='w-10/12 font-semibold h-max flex flex-col lg:flex-row gap-4'>
                        <button className='w-5/12 px-5 py-2 text-center border-2 border-white transitionform duration-700 hover:border-transparent hover:bg-blue-500'>
                            READ OUR REVIEWS
                        </button>
                        <button className='w-7/12 px-5 py-2 text-center border-2 border-transparent transitionform hover:bg-blue-800 duration-700 bg-blue-500'>
                            FREE ONLINE CONSULTATION
                        </button>
                    </div>
                </div>
        </div>
    </>
  );
};

export default HeroMain;
