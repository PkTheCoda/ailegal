import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export const SuccessfulCases = () => {
  return (
    <div className="py-20 px-10">
        <div class="flex flex-col flex-wrap justify-center gap-8 p-4">
            <div className='flex justify-between items-end px-5'>
                <h1 className='text-6xl font-semibold'>
                    Notable Cases
                </h1>
                <button className='flex gap-2 items-center justify-center font-base hover:text-white text-blue-600 h-max py-2 px-5 rounded-full transitionform border-2 border-blue-600 hover:bg-blue-600'>
                    View All Cases
                    <ArrowLongRightIcon className='w-5 h-5'/>
                </button>
            </div>
            <div className='flex w-full flex-wrap justify-around gap-5 '>
                <div class="flex flex-col px-4 gap-2 justify-center text-center items-center border w-[30%] py-8 bg-stone-50">
                    <div className="text-red-500 font-bold text-md">Mortgage Fraud and Money Laundering</div>
                    <div className='text-3xl font-bold'>Acquitted of Charges; Cleared of Wrongdoing</div>
                    <div className='font-light px-5'>Defendant acquitted of Proceeds of Crime Act charge and all counts in a multi-million pound mortgage fraud case spanning seven years.</div>
                </div>
                <div class="flex flex-col px-4 gap-2 justify-center text-center items-center border w-[30%] py-8 bg-stone-50">
                    <div className="text-red-500 font-bold text-md">GBH (Grievous Bodily Harm)</div>
                    <div className='text-3xl font-bold'>Suspended Sentence; GBH Conviction</div>
                    <div className='font-light px-5'>Female defendant received a suspended prison sentence for throwing boiling water on her husband, causing serious bodily harm.</div>
                </div>
                <div class="flex flex-col px-4 gap-2 justify-center text-center items-center border w-[30%] py-8 bg-stone-50">
                    <div className="text-red-500 font-bold text-md">Manslaughter</div>
                    <div className='text-3xl font-bold'>Manslaughter: Suspended Prison Sentence</div>
                    <div className='font-light px-5'>Suspended sentence for leaving elderly, dementia-stricken mother after a fall, resulting in her demise. Key conviction evidence included expert medical analysis.</div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default SuccessfulCases
