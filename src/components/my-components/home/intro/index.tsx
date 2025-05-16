'use client'

import introImg from '@/img/intro.png'
import Image from 'next/image'

export default function IntroDection() {
    return (
        <section className="w-full px-6 py-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Left Text Section */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Power Up Your Brand with <span className="text-[#412677]">Social Santa</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        At Social Santa, we craft impactful social media strategies that grow your audience, drive
                        engagement, and boost your brand presence online. From content creation to campaign management —
                        we do it all with flair and results.
                    </p>
                    <button className="bg-[#412677] text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-purple-700 transition">
                        Let’s Talk
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="flex-1">
                    <Image
                        src={introImg} // replace with your image path
                        alt="Social Santa Team"
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}
