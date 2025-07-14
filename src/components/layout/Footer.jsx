

import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white py-12 ">
      <div className="mx-auto max-w-7xl max-[640px]:px-6 sm:px-6 md:px-6 lg:px-12 ">
        <div className="grid grid-cols-1 max-[460px]:grid-cols-1  max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Left Section: Logo + Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <Image src="/img/logo.png" alt="StrideIQ" width={32} height={32} /> */}
              <span className="text-xl font-bold text-orange-600">StrideIQ</span>
            </div>

            <div className="mb-6">
              <p className="font-medium mb-1 text-gray-900">StrideIQ Contact</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <PhoneIcon className="w-4 h-4" />
                <span>+91 7304090114</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <EnvelopeIcon className="w-4 h-4" />
                <span>support@strideiq.co</span>
              </div>
            </div>

            <div>
              <p className="font-medium mb-1 text-gray-900">Transcorp Contact</p>
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                <PhoneIcon className="w-4 h-4" />
                <span>+91 7597182222</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <EnvelopeIcon className="w-4 h-4" />
                <span>cards@transcorpint.com</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase">Product</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="#">Corporate card</Link></li>
              <li><Link href="#">Expense management</Link></li>
              <li><Link href="#">Accounting automation</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="#">StrideIQ AI</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase">Company</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="#">About StrideIQ</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Transcorp Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>
        <hr className='border-t mt-6' />
      </div>
      <div className="mx-auto max-w-7xl  px-4 py-12 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Join our wishlist to get early access to new features and updates.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
            Join Wishlist
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
      </div>

      <hr className="mx-auto max-w-5xl border-gray-200 max-[640px]:px-6 sm:px-6 md:px-6 lg:px-6" />

      {/* Bottom Section */}
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col lg:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600 text-center lg:text-left">
          © 2025 Mungbuf Technospend Private Limited. All rights reserved.
        </p>

        <div className="flex space-x-5 text-gray-400 text-xl">
          <a href="#"><FaTwitter className="hover:text-gray-600" /></a>
          <a href="#"><FaLinkedinIn className="hover:text-gray-600" /></a>
          <a href="#"><FaGithub className="hover:text-gray-600" /></a>
        </div>
      </div>

     <hr className="mx-auto max-w-5xl border-gray-200 max-[640px]:px-6 sm:px-6 md:px-6 lg:px-6" />

      {/* Legal Disclaimer */}
      <div className="max-w-5xl mx-auto px-4 py-6 text-[13px] text-gray-600 space-y-2">
        <p>*Unlimited cashback on eligible spends. Fuel, Indian Railways, insurance, rent, telecom, and cash withdrawals are excluded.</p>
        <p>
          For any issues related to card transactions, please contact Transcorp at{' '}
          <span className="text-orange-600">support@transcorpint.com</span>.
        </p>
        <p>
          In case no resolution to your complaint is provided within 30 days or if the resolution is unsatisfactory,
          you may escalate your concern on the{' '}
          <a href="#" className="text-orange-600 underline">RBI CMS Portal</a>.
        </p>
      </div>
    </footer>
  )
}
