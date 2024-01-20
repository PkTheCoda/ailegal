import React from 'react'
import { InlineWidget } from "react-calendly";

const CTA = () => {
  return (
    <section class="mt-12 pb-20 lg:mt-24">
        <div class="bg-blue-500 text-white -skew-y-1">
            <div class="container mx-auto skew-y-1">
                <div class="flex flex-col items-center py-10 text-center lg:py-20">
                    <div class="w-full px-4 lg:w-1/2 lg:px-0">
                        <div class="mb-8">
                            <h2 class="text-3xl lg:text-4xl font-bold mb-3">
                                Let's defend your tomorrow, today.
                            </h2>
                            <p class="text-lg lg:text-xl opacity-80">
                                Book a free consultation with us!
                            </p>
                        </div>

                        <div className="App h-max overflow-hidden pb-10">
                            <InlineWidget url="https://calendly.com/pranavkonjeti/30min" />
                        </div>

                        <div class="text-lg">
                            <p>
                                Does this embed not work? <br class="sm:hidden" />
                                <a href="#" class="border-b border-white pb-1">
                                    Check here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTA