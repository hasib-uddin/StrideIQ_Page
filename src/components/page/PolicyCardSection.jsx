import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { FaBan } from 'react-icons/fa'

export default function PolicyCardSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 w-[60%] max-[640px]:w-[100%] sm:w-[80%] md:w-[60%] mb-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Image
                src="/img/profile.jpg" // Replace with actual image
                alt="User"
                width={50}
                height={50}
                className="rounded-xl object-cover"
              />
              <div>
                <h2 className="font-semibold text-lg text-gray-900">Alexa Travel Card</h2>
                <p className="text-gray-500 text-sm">Sales Intern</p>
              </div>
            </div>
            <ChevronRightIcon className='w-6 h-6 text-gray-900' />
          </div>

          <hr className="mb-4" />

          {/* Title */}
          <p className="font-medium text-gray-800 mb-3">Marketing Summit Gujarat</p>

          {/* Restricted Categories */}
          <div className="flex flex-wrap gap-2 mb-3">
            {['Bars', 'Gambling', 'Pubs'].map((item) => (
              <span
                key={item}
                className="flex items-center gap-1 text-sm px-3 py-1 rounded-md border-[1px] border-gray-300 bg-gray-100 text-gray-500"
              >
                <FaBan className="text-red-500 text-xs" /> {item}
              </span>
            ))}
            {['Travel', 'Food',].map((item) => (
              <span
                key={item}
                className="text-sm px-3 py-1 rounded-md border border-orange-500 text-orange-500"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Allowed Categories */}
          <div className="flex flex-wrap gap-2">
            {[ 'Fuel', 'Parking'].map((item) => (
              <span
                key={item}
                className="text-sm px-3 py-1 rounded-md border border-orange-500 text-orange-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="text-start w-[60%] max-[640px]:w-[100%] sm:w-[80%] md:w-[60%]">
          <h2 className="text-sm sm:text-xl font-semibold text-gray-900 mb-3">
            Get ahead of out–of–policy spend.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Add restrictions to automatically prevent specific categories and merchants.
            Not sure if it’s out of policy? Questionable vendors are always automatically flagged
            for approval.
          </p>
        </div>
      </div>
    </section>
  )
}
