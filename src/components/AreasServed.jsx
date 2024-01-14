import React from 'react'
import ukimage from '../Images/theuk.png'

export const AreasServed = () => {
  return (
    <div className='py-20 flex items-center justify-center'>
         <img src={ukimage.src} alt="An image of the UK" className='w-1/2 px-20' />
         <div className='w-1/2 flex flex-col gap-y-5'>
            <h1 className='text-6xl'>Areas Served</h1>
            <div className='leading-loose flex flex-col gap-y-4 w-3/4'>
                <p className='text-black'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae et, sapiente nostrum praesentium ipsum maiores corporis perferendis atque. Eum sapiente labore et dicta necessitatibus! Debitis ducimus fuga aliquid quas?
                </p>
                <div>
                    <ul class="space-y-3 font-medium">
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 leading-5 text-gray-600">
                                Build functional APIs with zero coding.
                            </p>
                        </li>
                        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                            <div class="flex-shrink-0">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 leading-5 text-gray-600">
                                Resources with permissions.
                            </p>
                        </li>
                        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                            <div class="flex-shrink-0">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 leading-5 text-gray-600">
                                Built in user authentication.
                            </p>
                        </li>
                        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                            <div class="flex-shrink-0">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 leading-5 text-gray-600">
                                Easy Integration with existing apps and tools.
                            </p>
                        </li>
                        <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
                            <div class="flex-shrink-0">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p class="ml-3 leading-5 text-gray-600">
                                Logs for your API calls.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex items-end mt-2'>
                <button className='py-1 px-4 bg-blue-500 text-white'>
                    View All Areas
                </button>
            </div>

         </div>
    </div>
  )
}

export default AreasServed
