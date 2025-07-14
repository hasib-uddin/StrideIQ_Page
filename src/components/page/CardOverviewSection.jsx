// import Image from 'next/image'
// import { useState, useEffect } from 'react';

// export default function CardOverviewSection() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Adjust this value based on when you want the animation to trigger
//       const scrollThreshold = 200;
//       if (window.scrollY > scrollThreshold) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (
//     <section className="bg-[#f5f5f5] py-16 px-4">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
//         {/* Left Card */}
//         <div className={`
//             relative
//             transition-all duration-1000 ease-in-out
//             ${scrolled
//               ? 'opacity-100 translate-x-0 h-auto' // When scrolled: visible, no horizontal translation
//               : 'opacity-0 -translate-x-full h-0 overflow-hidden' // When not scrolled: hidden, moved left by 100% of its width
//             }
//           `}>
//           <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-sm">
//             <h3 className="text-[18px] font-medium text-green-900 mb-4">Marketing Virtual card</h3>
//             <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
//               <span>₹21,999</span>
//               <span>₹1,00,000</span>
//             </div>
//             <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
//               <div className="h-full bg-orange-500" style={{ width: '22%' }}></div>
//             </div>
//           </div>
//         </div>

//         {/* Center Main Card */}
//         <div className="w-full max-w-md">
//           <Image
//             src="/img/visa-card.png" // Update with actual path
//             alt="Corporate Card"
//             width={500}
//             height={300}
//             className="rounded-2xl shadow-lg"
//           />
//         </div>

//         {/* Right Card */}
//         <div className={`
//             relative
//             transition-all duration-1000 ease-in-out
//             ${scrolled
//             ? 'opacity-100 translate-y-0 h-auto duration-1000'
//             : 'opacity-0 translate-y-full h-0 overflow-hidden duration-1000'
//           }
//           `}>
//         <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-sm">
//           <h3 className="text-[18px] font-medium text-green-900 mb-4">Conference Virtual card</h3>
//           <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
//             <span>₹45,000</span>
//             <span>₹50,000</span>
//           </div>
//           <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
//             <div className="h-full bg-orange-500" style={{ width: '90%' }}></div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function CardOverviewSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      const scrollThreshold = 200;
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
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left Card - Works as expected (left to right slide-in) */}
        <div className={`
            relative
            transition-all duration-1000 scroll-smooth ease-in-out
            ${scrolled
              ? 'opacity-100 translate-x-0 h-auto' // When scrolled: visible, no horizontal translation
              : 'opacity-0 -translate-x-full h-0 overflow-hidden' // When not scrolled: hidden, moved left by 100% of its width
            }
          `}>
          <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-sm">
            <h3 className="text-[18px] font-medium text-green-900 mb-4">Marketing Virtual card</h3>
            <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
              <span>₹21,999</span>
              <span>₹1,00,000</span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500" style={{ width: '22%' }}></div>
            </div>
          </div>
        </div>

        {/* Center Main Card (no animation on this one) */}
        <div className="w-full max-w-md">
          <Image
            src="/img/visa-card.png" // Update with actual path
            alt="Corporate Card"
            width={500}
            height={300}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Card - MODIFIED for right to left slide-in */}
        <div className={`
            relative
            transition-all duration-1000 scroll-smooth ease-in-out
            ${scrolled
              ? 'opacity-100 translate-x-0 h-auto' // When scrolled: visible, no horizontal translation
              : 'opacity-0 translate-x-full h-0 overflow-hidden' // When not scrolled: hidden, moved right by 100% of its width
            }
          `}>
          <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-sm">
            <h3 className="text-[18px] font-medium text-green-900 mb-4">Conference Virtual card</h3>
            <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
              <span>₹45,000</span>
              <span>₹50,000</span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}