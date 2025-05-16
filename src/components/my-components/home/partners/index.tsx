'use client'

import ajinkya from '@/img/ajinkya.png'
import navieo from '@/img/navieo.png'
import niyaz from '@/img/niyaz.png'
import Image from 'next/image'

import type { StaticImageData } from 'next/image'

type Partner = {
    id: number
    name: string
    logo: StaticImageData
}

const partners: Partner[] = [
    { id: 1, name: 'Partner One', logo: niyaz },
    { id: 2, name: 'Partner Two', logo: ajinkya },
    // { id: 3, name: 'Partner Three', logo: logo },
    { id: 4, name: 'Partner Four', logo: navieo }
]

export default function PartnersGrid() {
    return (
        <section className="w-full py-[50px] bg-white">
            <div className="max-w-7xl mx-auto">
                {/*  */}
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Partners</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 items-center">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="flex items-center justify-center bg-gray-50 hover:shadow-md transition">
                            <Image src={partner.logo} alt={partner.name} className="w-[70%] h-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
