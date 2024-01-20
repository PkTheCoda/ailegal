import React from 'react'

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col gap-6 items-center justify-center py-[8rem] bg-stone-50">
        <h1 className="w-5/6 text-6xl font-medium tracking-tight">What our <span className="text-blue-600">Users say:</span></h1>
        <div className="w-full flex flex-wrap justify-center gap-5 px-4">
            <figure class="w-full sm:w-[45%] lg:w-[30%] relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 mb-8">
                <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-200">
                    <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                </svg>
                <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-700">
                        You answered all of the questions that he felt would be important in this kind of case more than satisfactorily.  
                        Also thank you for being very straightforward … you have given us great confidence in the way you are handling the case.  
                        Arif was excellent on the day … and in phone contact throughout … we couldn’t have asked for better!
                    </p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                        <div class="font-display text-base text-slate-700">Anonymous</div>
                        <div class="mt-1 text-sm text-slate-500">Client</div>
                    </div>
                    <div class="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56" />
                    </div>
                </figcaption>
            </figure>
            <figure class=" w-full sm:w-[45%] lg:w-[30%] relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 mb-8">
                <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
                    <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                </svg>
                <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-700">
                        The service provided was outstanding. I found every aspect of the service provided to be highly professional, adivce was thorough and full informative. 
                        At every stage communication was time efficient. I would highly recommend this company for its all round excellent service.
                    </p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                        <div class="font-display text-base text-slate-700">Anita Partridge</div>
                        <div class="mt-1 text-sm text-slate-500">Client</div>
                    </div>
                    <div class="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56" />
                    </div>
                </figcaption>
            </figure>
            <figure class=" w-full sm:w-[45%] lg:w-[30%] relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 mb-8">
                <svg aria-hidden="true" width="105" height="78" class="absolute top-6 left-6 fill-slate-100">
                    <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                </svg>
                <blockquote class="relative">
                    <p class="text-lg tracking-tight text-slate-700">
                        I wanted to extend a sincere thank you for your assistance throughout my mum's visa application process. Your support and guidance were 
                        instrumental in making the process smooth and successful. I deeply appreciate the efforts and the positive outcome I have achieved. Thank you.
                    </p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                        <div class="font-display text-base text-slate-700">Anonymous</div>
                        <div class="mt-1 text-sm text-slate-500">Client</div>
                    </div>
                    <div class="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="h-14 w-14 object-cover" loading="lazy" width="56" height="56" />
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
  )
}

export default Testimonials