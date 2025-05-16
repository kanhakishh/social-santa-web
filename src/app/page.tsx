import IntroDection from '@/components/my-components/home/intro'
import Landing from '@/components/my-components/home/landing'
import MissionVision from '@/components/my-components/home/mv'
import PartnersGrid from '@/components/my-components/home/partners'
import { JSX } from 'react'

export default function HomePage(): JSX.Element {
    return (
        <main className="bg-[#000000]">
            <Landing />
            <IntroDection />
            <MissionVision />
            <PartnersGrid />
        </main>
    )
}
