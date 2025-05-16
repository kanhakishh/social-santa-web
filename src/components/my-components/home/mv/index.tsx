'use client'

export default function MissionVision() {
    return (
        <section className="w-full px-6 py-16 bg-[#f2f2f2]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
                {/* Mission */}
                <div className="flex-1 border-l-4 pl-6" style={{ borderColor: '#412677' }}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Mission</h2>
                    <p className="text-gray-700 text-lg">
                        At Social Santa, our mission is to empower businesses with creative and results-driven social
                        media strategies. We help brands connect authentically with their audience, build community, and
                        grow sustainably.
                    </p>
                </div>

                {/* Vision */}
                <div className="flex-1 border-l-4 pl-6" style={{ borderColor: '#412677' }}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Vision</h2>
                    <p className="text-gray-700 text-lg">
                        We envision a digital world where every brand has a powerful voice and meaningful presence.
                        Through innovation and strategy, Social Santa strives to lead the way in social media
                        excellence.
                    </p>
                </div>
            </div>
        </section>
    )
}
