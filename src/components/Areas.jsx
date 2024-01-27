import React from 'react'
import { AdjustmentsVerticalIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const Areas = () => {

    const serviceItems = [
        { title: 'Academic Appeals', icon: <AdjustmentsVerticalIcon className='w-12 h-12' /> },
        { title: 'Criminal Defense', icon: <AdjustmentsVerticalIcon className='w-12 h-12' /> },
        { title: 'Education Law', icon: <AdjustmentsVerticalIcon className='w-12 h-12' /> },
        { title: 'Immigration Law', icon: <AdjustmentsVerticalIcon className='w-12 h-12' /> },
      ];

  return (
    <div className='flex flex-col gap-y-6 my-20 bg-stone-50 py-16 items-center justify-center'>
        <div className='w-full px-4 lg:px-0 lg:w-10/12 flex flex-col gap-y-4'>
            <div className='flex flex-col gap-y-2 w-full'>
                <div className='text-6xl font-medium '>What we do</div>
                <div className='w-1/12 border-2 border-blue-400'> </div>
                {/* <div
                    class="bg-[linear-gradient(90deg,rgba(149,131,198,0)_1.46%,rgba(149,131,198,0.6)_40.83%,rgba(149,131,198,0.3)_65.57%,rgba(149,131,198,0)_107.92%)] w-full h-px max-w-6xl mx-auto py-1"
                >
                </div> */}
            </div>
            <div className='w-full py-4 flex lg:flex-row flex-col gapx-x-20 gap-y-4'>
                <div className="w-full lg:w-1/2 flex flex-col gap-y-3">
                    <h2 className='four-text tracking-tight'>Academic & Criminal Defense</h2>
                    <div className='my-2 pl-4 text-base border-l-2 border-black-500/40 text-slate-500 leading-loose tracking-wide'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt quasi perspiciatis odit perferendis deleniti vel 
                        laborum voluptatem illum, numquam nam totam, inventore maxime, rerum quas ut fugit cumque exercitationem.cusandae aliquam voluptatem amet ipsam dolores tenetur ullam omnis distinctio odit!
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-y-3">
                    <h2 className='four-text tracking-tight'>Immigration & Education Law</h2>
                    <div className='my-2 pl-4 text-base border-l-2 border-black-500/40 text-slate-500 leading-loose tracking-wide'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt quasi perspiciatis odit perferendis deleniti vel 
                        laborum voluptatem illum, numquam nam totam, inventore maxime, rerum quas ut fugit cumque exercitationem.cusandae aliquam voluptatem amet ipsam dolores tenetur ullam omnis distinctio odit!
                    </div>
                </div>
            </div>
            <div className='w-full py-4 flex gap-3 flex-wrap items-center justify-center lg:justify-between'>
                {serviceItems.map((item, index) => (
                    <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-xl bg-sky-400 shadow-lg transitionform mb-4'>
                    <div
                        key={index}
                        className='px-2 text-center h-max py-10 flex items-center justify-center flex-col gap-y-2 text-white'
                    >
                        {item.icon}
                        <h2 className='font-light text-xl'>{item.title}</h2>
                    </div>
                    <div className='w-full group hover:bg-slate-200 transitionform duration-700 cursor-pointer bg-white py-2 flex items-center justify-center gap-x-2 rounded-b-xl text-center font-slate-700'>
                        <PlusCircleIcon className='w-6 h-6 text-black' />
                        <h4 className='transitionform duration-500'>Explore</h4>
                    </div>
                    </div>
                ))}
</div>

        </div>
    </div>
  )
}

export default Areas