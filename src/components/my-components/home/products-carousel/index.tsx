import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Product from '@/img/product-1.png'
import Image from 'next/image'
import { JSX } from 'react'
export default function ProductsCarousel(): JSX.Element {
    return (
        <section id="products-carousel" className="w-full h-full pt-16 md:pt-[117px]">
            <div className="px-4 md:container">
                <div className="xl:px-12">
                    <Carousel className="w-full max-w-full">
                        <CarouselContent>
                            {Array.from({ length: 1 }).map((_, index) => {
                                const productNo = index + 1
                                return (
                                    <CarouselItem key={productNo}>
                                        <div className="grid grid-cols-2 gap-[18px] md:gap-[50px] xl:gap-[118px]">
                                            <div className="col-span-2 sm:col-span-1">
                                                <Image
                                                    src={Product}
                                                    alt={`product-${productNo}`}
                                                    className="w-full object-cover aspect-square"
                                                />
                                            </div>
                                            <div className="col-span-2 sm:col-span-1 mb-[60px] sm:mb-[30px] lg:mb-[70px]">
                                                <div className="flex flex-col justify-between h-full">
                                                    <div className="sm:mt-2">
                                                        <h5 className="text-sm font-semibold text-white tracking-[0.14px] md:text-lg lg:text-[26px]">
                                                            {productNo < 10 ? `0${productNo}` : productNo} of many
                                                        </h5>
                                                    </div>
                                                    <div className="sm:mt-2">
                                                        <h3 className="text-4xl font-light text-white sm:mb-1 md:text-[48px] md:leading-[58px] lg:text-[64px] lg:leading-[75px] md:mb-[20px] md:max-w-[60%] lg:max-w-[60%]">
                                                            Exclusive Bag pack
                                                        </h3>
                                                        <p className="text-base font-normal tracking-[0.44px] text-white xl:max-w-[70%]">
                                                            Our collection features a wide range of high-quality
                                                            products, from Smart Devices to durable mountain backpacks
                                                            and versatile options listed to Resell.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <div className="absolute bottom-0 right-0 sm:top-0 flex gap-2 w-[90px]">
                            <CarouselPrevious
                                variant={'ghost'}
                                size={'sm'}
                                className="!px-[15px] !py-[12px] !w-[40px] !h-[40px] !static translate-y-0 border-[1.6px] hover:bg-transparent border-[#FFFFFF4D]"
                            />
                            <CarouselNext
                                variant={'ghost'}
                                size={'sm'}
                                className="!px-[15px] !py-[12px] !w-[40px] !h-[40px] !static translate-y-0 hover:bg-transparent border-[1.6px] border-[#FFFFFF4D]"
                            />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
