'use client'
import { MenuIcon, X } from 'lucide-react'
import { JSX, useContext } from 'react'

import { MainStateContext } from '@/components/context'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '@/components/ui/drawer'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { useMediaQuery } from '@/hooks/use-media-query'
import logo from '@/img/logo.jpeg'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

// type Props = {
//     type: 'primary' | 'secondary'
// }

export default function Navbar(): JSX.Element {
    const isDesktop = useMediaQuery('(min-width: 768px)')
    // const pathname = usePathname()
    const { setAboutOpen, setProductListOpen, setCSupportOpen } = useContext(MainStateContext)

    return (
        <header className="bg-white text-black text-bold fixed py-4 w-full z-10">
            <div className="px-4 md:container">
                {isDesktop ? (
                    <NavigationMenu className="flex justify-between w-full">
                        <div className="">
                            <NavigationMenuList className="w-full flex justify-center items-center h-full">
                                <NavigationMenuItem className="flex justify-center items-center h-full">
                                    <Link href="/" className="h-full" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn('!h-full !py-0', navigationMenuTriggerStyle())}>
                                            <Image src={logo} alt="logo" className="w-[133px] h-auto" />
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </div>
                        <div className="">
                            <NavigationMenuList className="w-full flex justify-end items-center gap-12 ">
                                <NavigationMenuItem className="px-0" onClick={(): void => setAboutOpen(true)}>
                                    <NavigationMenuLink className={cn('!px-0', navigationMenuTriggerStyle())}>
                                        HOME
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className={cn('!px-0', navigationMenuTriggerStyle())}>
                                        PRODUCTS
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem className="px-0" onClick={(): void => setAboutOpen(true)}>
                                    <NavigationMenuLink className={cn('!px-0', navigationMenuTriggerStyle())}>
                                        ABOUT US
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem className="px-0" onClick={(): void => setAboutOpen(true)}>
                                    <NavigationMenuLink className={cn('!px-0', navigationMenuTriggerStyle())}>
                                        CONTACT US
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </div>
                    </NavigationMenu>
                ) : (
                    <NavigationMenu className="grid grid-cols-3 gap-2 justify-between items-center py-3">
                        <div className="flex items-center justify-start w-full">
                            <Drawer direction="top" fixed>
                                <DrawerTrigger asChild>
                                    <MenuIcon />
                                </DrawerTrigger>
                                <DrawerContent>
                                    <div className="mx-auto w-full max-w-md">
                                        <DrawerHeader className="py-[2px]">
                                            <DrawerTitle>
                                                <div className="flex justify-center items-center w-full h-full">
                                                    <Image src={logo} alt="logo" className="w-[98px] h-auto" />
                                                </div>
                                            </DrawerTitle>
                                            <DrawerDescription />
                                        </DrawerHeader>
                                        <div className="p-4 pb-0">
                                            <div className="flex items-center justify-center space-x-4">
                                                <NavigationMenu className="w-full menu-drawer-customise">
                                                    <NavigationMenuList className="w-full flex justify-end items-center flex-col">
                                                        <NavigationMenuItem onClick={(): void => setAboutOpen(true)}>
                                                            <NavigationMenuLink
                                                                className={navigationMenuTriggerStyle()}>
                                                                ABOUT US
                                                            </NavigationMenuLink>
                                                        </NavigationMenuItem>
                                                        <Separator />
                                                        <NavigationMenuItem>
                                                            <NavigationMenuLink
                                                                className={navigationMenuTriggerStyle()}>
                                                                GET APP LINK
                                                            </NavigationMenuLink>
                                                        </NavigationMenuItem>
                                                        <Separator />
                                                        <NavigationMenuItem
                                                            onClick={(): void => setProductListOpen(true)}>
                                                            <NavigationMenuLink
                                                                className={navigationMenuTriggerStyle()}>
                                                                PRODUCT CATEGORIES
                                                            </NavigationMenuLink>
                                                        </NavigationMenuItem>
                                                        <Separator />
                                                        <NavigationMenuItem onClick={(): void => setCSupportOpen(true)}>
                                                            <NavigationMenuLink
                                                                className={navigationMenuTriggerStyle()}>
                                                                CUSTOMER SUPPORT
                                                            </NavigationMenuLink>
                                                        </NavigationMenuItem>
                                                    </NavigationMenuList>
                                                </NavigationMenu>
                                            </div>
                                        </div>
                                        <DrawerFooter className="flex items-center justify-center w-full">
                                            <DrawerClose
                                                asChild
                                                className="bg-gradient-to-b from-[#87A1FF] to-[#4B70F5] max-w-max rounded-full p-2">
                                                <X size={34} color="#000" strokeWidth={2} />
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </div>
                        <NavigationMenuList className="w-full ">
                            <NavigationMenuItem className="flex justify-center items-center h-full">
                                <Link href="/" className="h-full" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn('h-full py-0', navigationMenuTriggerStyle())}>
                                        <div className="flex justify-center items-center w-full h-full">
                                            <Image src={logo} alt="logo" className="w-[98px] h-auto" />
                                        </div>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        <div className="w-full h-[30px] bg-black invisible" />
                    </NavigationMenu>
                )}
            </div>
        </header>
    )
}
