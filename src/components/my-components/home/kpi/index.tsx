import Checkmark from '@/img/checkmark.png'
import Image from 'next/image'
import { JSX } from 'react'
export default function KPI(): JSX.Element {
    return (
        <section id="kpi" className="w-full h-full pt-16 md:pt-[100px]">
            <div className="px-4 md:container">
                <div className="grid grid-cols-3 gap-[33px] md:gap-2 text-center">
                    <div className="col-span-3 md:col-span-1">
                        <div className="flex flex-col gap-4 md:gap-8 justify-start h-full items-center mb-[10px] md:mb-0">
                            <h6 className="text-base text-white font-normal leading-[28px] tracking-[0.44px]">
                                Verified Products
                            </h6>
                            <div className="relative h-full flex justify-center items-center">
                                <h3 className="text-[42px] text-white font-semibold leading-[55px] tracking-[-0.35px] md:text-[60px] md:leading-[70px] md:tracking-[-0.43px] lg:text-[64px] lg:leading-[75px] lg:tracking-[-0.53px]">
                                    10K+
                                </h3>
                                <Image
                                    src={Checkmark}
                                    alt="checkmark"
                                    className="absolute  w-[22px] h-[22px] flex justify-self-center self-center"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className="flex flex-col gap-4 md:gap-8  justify-start h-full items-center">
                            <h6 className="text-base text-white font-normal leading-[28px] tracking-[0.44px]">
                                Verified Sellers
                            </h6>
                            <div className="relative h-full flex justify-center items-center">
                                <h3 className="text-[42px] text-white font-semibold leading-[55px] tracking-[-0.35px] md:text-[60px] md:leading-[70px] md:tracking-[-0.43px] lg:text-[64px] lg:leading-[75px] lg:tracking-[-0.53px]">
                                    25K+
                                </h3>
                                <Image
                                    src={Checkmark}
                                    alt="checkmark"
                                    className="absolute w-[22px] h-[22px] flex !justify-self-center !self-center"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className="flex flex-col gap-4 md:gap-8  justify-start h-full items-center">
                            <h6 className="text-base text-white font-normal leading-[28px] tracking-[0.44px]">
                                Verified Buyers
                            </h6>
                            <div className="relative h-full flex justify-center items-center">
                                <h3 className="text-[42px] text-white font-semibold leading-[55px] tracking-[-0.35px] md:text-[60px] md:leading-[70px] md:tracking-[-0.43px] lg:text-[64px] lg:leading-[75px] lg:tracking-[-0.53px]">
                                    65K+
                                </h3>
                                <Image
                                    src={Checkmark}
                                    alt="checkmark"
                                    className="absolute  w-[22px] h-[22px] flex justify-self-center self-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
