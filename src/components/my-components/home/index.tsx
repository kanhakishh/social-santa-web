import { Fragment, JSX } from 'react'
// import CustomerFeedback from './customer-feedback'
import EnjoyableRide from './enjoyable-ride'
import ExperienceTime from './experience-time'
// import KPI from './kpi'
import Landing from './landing'
import PassionateAbout from './passionate-about'
import ProductsCarousel from './products-carousel'
import SpeedOfReselling from './speed-of-reselling'

export default function Home(): JSX.Element {
    return (
        <Fragment>
            <Landing />
            <PassionateAbout />
            <ProductsCarousel />
            {/* <KPI /> */}
            <SpeedOfReselling />
            <EnjoyableRide />
            <ExperienceTime />
            {/* <CustomerFeedback /> */}
        </Fragment>
    )
}
