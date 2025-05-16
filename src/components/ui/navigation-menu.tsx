import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const NavigationMenu = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        ref={ref}
        className={cn('relative z-10 flex  flex-1 items-center justify-center', className)}
        {...props}>
        {children}
        <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}
        {...props}
    />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = ({
    className,
    disabled = false,
    onClick,
    children,
    ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> & {
    disabled?: boolean
}): React.JSX.Element => {
    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        if (disabled) {
            event.preventDefault() // Prevent the default action
            return // Do not execute onClick
        }
        if (onClick) {
            onClick(event)
        }
    }

    return (
        <NavigationMenuPrimitive.Item
            className={cn(
                'relative',
                disabled && 'cursor-not-allowed opacity-50', // Disabled styles
                className
            )}
            onClick={handleClick}
            {...props}>
            {/* {children} */}
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // Pass disabled prop to children if applicable
                    return React.cloneElement(child as React.ReactElement<{ disabled?: boolean }>, { disabled })
                }
                return child
            })}
        </NavigationMenuPrimitive.Item>
    )
}

const customClasses = `text-[14px] leading-[19.1px] md:text-[10px] md:leading-[15.1px] lg:text-[12px] lg:leading-[17.1px] xl:text-[14px] xl:leading-[19.1px] cursor-pointer`
const navigationMenuTriggerStyle = cva(
    cn(
        'group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-[#4B70F5] focus:text-[#4B70F5] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50',
        customClasses
    )
)

const NavigationMenuTrigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(navigationMenuTriggerStyle(), 'group', className)}
        {...props}>
        {children}{' '}
        <ChevronDown
            className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
            aria-hidden="true"
        />
    </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
            className
        )}
        {...props}
    />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Link>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> & { disabled?: boolean }
>(({ className, disabled, ...props }, ref) => (
    <NavigationMenuPrimitive.Link
        ref={ref}
        className={cn(
            'inline-flex items-center justify-center rounded-md transition-colors',
            disabled && '!cursor-not-allowed !pointer-events-none', // Disabled styling
            className
        )}
        tabIndex={disabled ? -1 : undefined} // Prevent focus on disabled
        aria-disabled={disabled}
        {...props}
    />
))
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName

const NavigationMenuViewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div className={cn('absolute left-0 top-full flex justify-center')}>
        <NavigationMenuPrimitive.Viewport
            className={cn(
                'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
                className
            )}
            ref={ref}
            {...props}
        />
    </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(
            'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
            className
        )}
        {...props}>
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport
}
