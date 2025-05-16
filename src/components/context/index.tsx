'use client'
import { createContext, JSX, useState } from 'react'

export const MainStateContext = createContext<{
    aboutOpen: boolean
    setAboutOpen: (aboutOpen: boolean) => void
    getAppLinkOpen: boolean
    setGetAppLinkOpen: (getAppLinkOpen: boolean) => void
    productListOpen: boolean
    setProductListOpen: (productListOpen: boolean) => void
    cSupportOpen: boolean
    setCSupportOpen: (cSupportOpen: boolean) => void
    newsLetterOpen: boolean
    setNewsLetterOpen: (newsLetterOpen: boolean) => void
    feedbackOpen: boolean
    setFeedbackOpen: (feedbackOpen: boolean) => void
    successOpen: boolean
    setSuccessOpen: (successOpen: boolean) => void
}>({
    aboutOpen: false,
    setAboutOpen: (aboutOpen) => aboutOpen,
    getAppLinkOpen: false,
    setGetAppLinkOpen: (getAppLinkOpen) => getAppLinkOpen,
    productListOpen: false,
    setProductListOpen: (productListOpen) => productListOpen,
    cSupportOpen: false,
    setCSupportOpen: (cSupportOpen) => cSupportOpen,
    newsLetterOpen: false,
    setNewsLetterOpen: (newsLetterOpen) => newsLetterOpen,
    feedbackOpen: false,
    setFeedbackOpen: (feedbackOpen) => feedbackOpen,
    successOpen: false,
    setSuccessOpen: (successOpen) => successOpen
})

export default function MainContext({ children }: Readonly<{ children: JSX.Element }>): JSX.Element {
    const [aboutOpen, setAboutOpen] = useState<boolean>(false)
    const [getAppLinkOpen, setGetAppLinkOpen] = useState<boolean>(false)
    const [productListOpen, setProductListOpen] = useState<boolean>(false)
    const [cSupportOpen, setCSupportOpen] = useState<boolean>(false)
    const [newsLetterOpen, setNewsLetterOpen] = useState<boolean>(false)
    const [feedbackOpen, setFeedbackOpen] = useState<boolean>(false)
    const [successOpen, setSuccessOpen] = useState<boolean>(false)
    return (
        <MainStateContext.Provider
            value={{
                aboutOpen,
                setAboutOpen,
                getAppLinkOpen,
                setGetAppLinkOpen,
                productListOpen,
                setProductListOpen,
                cSupportOpen,
                setCSupportOpen,
                newsLetterOpen,
                setNewsLetterOpen,
                feedbackOpen,
                setFeedbackOpen,
                successOpen,
                setSuccessOpen
            }}>
            {children}
        </MainStateContext.Provider>
    )
}
