// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
// export default function CardSection() {
//     return (
//         <section className="bg-white py-20 px-4">
//             <div className="w-[80%] max-[640px]:w-[100%] sm:w-[80%] md:w-[80%] mx-auto text-center">
//                 {/* Section Heading */}
//                 <h2 className="text-5xl sm:text-3xl font-semibold text-gray-900 mb-12">
//                     More visibility, more time back.
//                 </h2>

//                 {/* Card Container */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Left Card */}
//                     <div className="bg-[#f7f9fb] p-6 rounded-xl shadow-sm text-left">
//                         <h3 className="text-xl sm:text-lg font-semibold text-gray-900 mb-2">
//                             Simplify approvals and share accountability.
//                         </h3>
//                         <p className="text-gray-600 text-sm mb-4">
//                             Create personalized workflows that only notify the right people,
//                             based on spend amount or team role, and keep visibility high.
//                         </p>
//                         <div className="w-full">
//                             <Image
//                                 src="/img/card1.png" // Replace with actual image
//                                 alt="Approval workflow"
//                                 width={400}
//                                 height={250}
//                                 className="rounded-md mx-auto"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Card */}
//                     <div className="bg-[#f7f9fb] p-6 rounded-xl shadow-sm text-left">
//                         <h3 className="text-xl sm:text-lgfont-semibold text-gray-900 mb-2">
//                             Focus on your work, not follow ups.
//                         </h3>
//                         <p className="text-gray-600 text-sm mb-4">
//                             Let StrideIQ send reminders for missing items or request repayments for you. Spend less time chasing down receipts and more time closing your books.
//                         </p>
//                         <div className="flex justify-center">
//                             <div className="w-full relative">
//                                 <Swiper
//                                     modules={[Navigation]}
//                                     loop={true}
//                                     spaceBetween={30}
//                                     breakpoints={{
//                                         1920: {
//                                             slidesPerView: 1,
//                                             spaceBetween: 30,
//                                         },
//                                         1028: {
//                                             slidesPerView: 1,
//                                             spaceBetween: 30,
//                                         },
//                                         990: {
//                                             slidesPerView: 1,
//                                             spaceBetween: 0,
//                                         },
//                                     }}
//                                     navigation={{
//                                         nextEl: '.swiper-button-next',
//                                         prevEl: '.swiper-button-prev',
//                                     }}
//                                     className="multiple-slide-carousel"
//                                 >
//                                     {[1, 2, 3, 4].map((i) => (
//                                         <SwiperSlide key={i}>
//                                             <div className=" rounded-2xl h-96 flex justify-center items-center">
//                                                 <Image
//                                                     src="/img/card2.png" // Replace with actual image
//                                                     alt="Chat Interface"
//                                                     width={200}
//                                                     height={250}
//                                                     className="rounded-md"
//                                                 />
//                                             </div>
//                                         </SwiperSlide>
//                                     ))}
//                                 </Swiper>

//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


'use client'; // This directive is necessary for client-side hooks like useEffect

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Autoplay module along with Navigation
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay CSS if there's any specific styling
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react'; // Keep useState and useEffect if you need 'scrolled' state elsewhere, though not directly used for Swiper autoplay

export default function CardSection() {
    // The 'scrolled' state and useEffect for scroll detection are not directly
    // relevant to Swiper's autoplay functionality. If they are not used for other
    // animations within this component, you can remove them.
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 200; // Adjust as needed
            if (window.scrollY > scrollThreshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="bg-white py-20 px-4">
            <div className="w-[80%] max-[640px]:w-[100%] sm:w-[80%] md:w-[80%] mx-auto text-center">
                {/* Section Heading */}
                <h2 className="text-5xl sm:text-3xl font-semibold text-gray-900 mb-12">
                    More visibility, more time back.
                </h2>

                {/* Card Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Card */}
                    <div className="bg-[#f7f9fb] p-6 rounded-xl shadow-sm text-left">
                        <h3 className="text-xl sm:text-lg font-semibold text-gray-900 mb-2">
                            Simplify approvals and share accountability.
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Create personalized workflows that only notify the right people,
                            based on spend amount or team role, and keep visibility high.
                        </p>
                        <div className="w-full">
                            <Image
                                src="/img/card1.png" // Replace with actual image
                                alt="Approval workflow"
                                width={400}
                                height={250}
                                className="rounded-md mx-auto"
                            />
                        </div>
                    </div>

                    {/* Right Card - Swiper with Autoplay */}
                    <div className="bg-[#f7f9fb] p-6 rounded-xl shadow-sm text-left">
                        <h3 className="text-xl sm:text-lg font-semibold text-gray-900 mb-2">
                            Focus on your work, not follow ups.
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Let StrideIQ send reminders for missing items or request repayments for you. Spend less time chasing down receipts and more time closing your books.
                        </p>
                        <div className="flex justify-center">
                            <div className="w-full relative">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    loop={true}
                                    spaceBetween={30}
                                    autoplay={{
                                        delay: 2000, // 2000 milliseconds = 2 seconds
                                    }}
                                    breakpoints={{
                                        1920: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                        },
                                        1028: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                        },
                                        990: {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                    }}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                    className="multiple-slide-carousel"
                                >
                                    {[1, 2, 3, 4].map((i) => (
                                        <SwiperSlide key={i}>
                                            <div className="rounded-2xl h-96 flex justify-center items-center">
                                                <Image
                                                    src="/img/card2.png" // Replace with actual image
                                                    alt="Chat Interface"
                                                    width={200}
                                                    height={250}
                                                    className="rounded-md"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                   
                                   
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}