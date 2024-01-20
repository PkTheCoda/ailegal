import React from 'react'

const Aboutus = () => {
  return (
    <div className='flex gap-10 py-16 lg:flex-row flex-col'>
        <div className='w-full order-last lg:order-1 lg:w-1/2 py-10 flex flex-col items-center lg:items-end gap-y-5'>
            <div className='w-5/6 flex flex-col gap-y-4'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-base text-slate-700'>Making Change, one case at a time.</h3>
                        <h1 className='text-6xl font-medium text-slate-700'>
                            About Our Firm
                        </h1>
                    </div>
                    <div className='my-2 pl-4 text-base border-l-2 border-black-500/40 text-slate-500 leading-relaxed tracking-wide'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt quasi perspiciatis odit perferendis deleniti vel 
                        laborum voluptatem illum, numquam nam totam, inventore maxime, rerum quas ut fugit cumque exercitationem.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut alias, placeat consequatur harum, cumque magnam delectus 
                        minus eum laudantium recusandae aliquam voluptatem amet ipsam dolores tenetur ullam omnis distinctio odit!
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut alias, placeat consequatur harum, cumque magnam delectus 
                        minus eum laudantium recusandae aliquam voluptatem amet ipsam dolores tenetur ullam omnis distinctio odit!
                    </div>
            </div>
            <div className='pb-4 w-5/6'>
            <a href="#_" class="inline-flex items-center w-full px-5 py-2 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-500 border border-transparent border-solid transitionform cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
                Our Services
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            </div>
        </div>
            <div className="relative w-full order-2 lg:w-1/2 flex justify-center items-center">
                {/* Image */}
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/017/034/338/original/business-and-lawyers-discussing-contract-papers-with-brass-scale-on-desk-in-office-law-legal-services-advice-justice-and-law-concept-picture-with-film-grain-effect-free-video.jpg"
                    className="rounded-xl z-30 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-10/12"
                    alt="Legal discussion"
                />
            </div>
    </div>
  )
}

export default Aboutus