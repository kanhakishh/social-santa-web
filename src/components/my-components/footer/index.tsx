'use client'
import { MainStateContext } from '@/components/context'
import { Button } from '@/components/ui/button'
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import facebook from '@/img/facebook.png'
import instagram from '@/img/instagram.png'
import linkedin from '@/img/linkedin.png'
import logo from '@/img/logo.jpeg'
import { cn } from '@/lib/utils'
import { NavigationMenu, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { JSX, useContext } from 'react'

export default function Footer(): JSX.Element {
    const { setAboutOpen, setNewsLetterOpen } = useContext(MainStateContext)
    return (
        <footer className="bg-[#111827]">
            <div className="px-4 md:container">
                <div className="flex flex-col md:grid md:grid-cols-2 md:place-items-start md:gap-4 md:pt-[66px] md:mb-4">
                    <div className="my-[83px] md:my-0 max-w-xs sm:max-w-md md:max-w-sm xl:max-w-lg flex flex-col gap-4 text-white">
                        <Image src={logo} alt="logo" className="w-[133px] h-auto" />
                        <p>
                            Address: <span className="font-semibold">123 Main Street Belgaum, karnataka</span>
                        </p>
                        <p>
                            Email: <span className="font-semibold">YI6vE@example.com</span>
                        </p>
                        <p>
                            Phone: <span className="font-semibold">+91 1234567890</span>
                        </p>

                        <div></div>
                    </div>
                    <div className="mb-[63px] md:mb-[83px] md:my-0 flex md:justify-end w-full">
                        <div className="flex flex-col gap-4 justify-end max-w-xs sm:max-w-md md:max-w-sm xl:max-w-lg">
                            <div>
                                <h3 className="text-[36px] leading-[49.9px] xs:text-[48px] xs:leading-[60.3px] sm:text-[54px] sm:leading-[67.3px] md:text-[38px] lg:text-[48px] xl:text-[64px] font-light md:leading-[60.3px] lg:leading-[70.3px] xl:leading-[87.3px] text-white">
                                    Subscribe for Newsletters
                                </h3>
                            </div>
                            <Button
                                className="min-w-[220px] max-w-[220px] md:max-w-auto"
                                variant="default"
                                onClick={(): void => {
                                    setNewsLetterOpen(true)
                                }}>
                                Subscribe
                                <MoveRight className="ml-[15px]" />
                            </Button>
                        </div>
                    </div>
                </div>
                <Separator className="hidden md:block bg-[#C3C2C1]" />
                <div className="flex justify-between items-start flex-col md:flex-row md:my-8">
                    <NavigationMenu className="w-full mb-[33px] md:mb-0">
                        <NavigationMenuList className="w-full flex justify-start items-start flex-col md:flex-row">
                            <NavigationMenuItem onClick={(): void => setAboutOpen(true)} className="mb-4 md:mb-0 py-0">
                                <NavigationMenuLink
                                    className={cn(
                                        '!py-0 !px-0 !h-auto !text-[14px] text-white !leading-[19.1px]',
                                        navigationMenuTriggerStyle()
                                    )}>
                                    ABOUT US
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="mb-4 md:mb-0 py-0 md:ml-12">
                                <NavigationMenuLink
                                    className={cn(
                                        '!py-0 !px-0 !h-auto !text-[14px] text-white !leading-[19.1px]',
                                        navigationMenuTriggerStyle()
                                    )}>
                                    PRODUCTS
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="mb-4 md:mb-0 py-0 md:ml-12">
                                <NavigationMenuLink
                                    className={cn(
                                        '!py-0 !px-0 !h-auto !text-[14px] text-white !leading-[19.1px]',
                                        navigationMenuTriggerStyle()
                                    )}>
                                    CONTACT US
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu className="w-full mb-4 md:mb-0">
                        <NavigationMenuList className="w-full flex justify-start items-start gap-[26px] md:justify-end">
                            <NavigationMenuItem className="py-0">
                                <Link
                                    href="https://www.facebook.com/share/1AvCumuz1r/?mibextid=qi2Omg"
                                    className="h-full"
                                    legacyBehavior
                                    passHref
                                    target="_blank">
                                    <NavigationMenuLink
                                        target="_blank"
                                        className={cn('!py-0 !px-0 !h-auto', navigationMenuTriggerStyle())}>
                                        <Image src={facebook} alt="facebook" className="w-[20px]" />
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="py-0">
                                <Link
                                    href="https://www.instagram.com/exclusiveresell2024?igsh=aXYzcTdqOHg0emZz"
                                    className="h-full"
                                    legacyBehavior
                                    passHref
                                    target="_blank">
                                    <NavigationMenuLink
                                        target="_blank"
                                        className={cn('!py-0 !px-0 !h-auto', navigationMenuTriggerStyle())}>
                                        <Image src={instagram} alt="instagram" className="w-[20px]" />
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="py-0">
                                <Link
                                    href="https://www.linkedin.com/company/exclusive-rsell/"
                                    className="h-full"
                                    legacyBehavior
                                    passHref
                                    target="_blank">
                                    <NavigationMenuLink
                                        target="_blank"
                                        className={cn('!py-0 !px-0 !h-auto', navigationMenuTriggerStyle())}>
                                        <Image src={linkedin} alt="linkedin" className="w-[20px]" />
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <Separator className="bg-[#C3C2C1]" />
                <div className="flex justify-between items-start flex-col-reverse md:flex-row mt-6 md:my-8">
                    <div className="w-full mb-3 md:mb-0 flex items-center justify-center md:justify-start">
                        <h4 className="text-[12px] xs:text-sm text-white text-opacity-75 leading-[22.1px] xs:leading-[24.1px] font-normal">
                            Copyright {new Date().getFullYear()} © Social Santa. All right reserved
                        </h4>
                    </div>
                    <Separator className="bg-[#C3C2C1] block md:hidden mt-2 mb-3" />
                    <NavigationMenu className="w-full flex justify-start items-start md:justify-end">
                        <NavigationMenuList className="w-full flex justify-start items-start flex-row-reverse md:flex-row gap-12 md:justify-end">
                            <NavigationMenuItem className="mb-4 md:mb-0 py-0">
                                <Link href="/terms-and-conditions" className="h-full" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={cn(
                                            '!py-0 !px-0 !h-auto !text-[14px] text-white !leading-[19.1px]',
                                            navigationMenuTriggerStyle()
                                        )}>
                                        Terms and Conditions
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="mb-4 md:mb-0 py-0 ">
                                <Link href="/privacy-policy" className="h-full" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={cn(
                                            '!py-0 !px-0 !h-auto !text-[14px] text-white !leading-[19.1px]',
                                            navigationMenuTriggerStyle()
                                        )}>
                                        Privacy Policy
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </footer>
    )
}
