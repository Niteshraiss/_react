import { Carousel } from "../components/carousel/Carousel"
import Channels from "../components/channels/Channels"
import { Feature } from "../components/feature/Feature"
import Header from "../components/Header/Header"
import Tags from "../components/tags/Tags"
export default function Home() {
    return (
        <>
        <Header/>
        <Tags/>
        <Carousel/>
        <Channels/>
        <Feature/>
        </>
    )
}