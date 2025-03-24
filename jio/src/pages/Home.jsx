import { act, useEffect, useState } from "react"
import { Carousel } from "../components/carousel/Carousel"
import Channels from "../components/channels/Channels"
import { Feature } from "../components/feature/Feature"
import Header from "../components/Header/Header"
import { Shows } from "../components/shows/Shows"
import Tags from "../components/tags/Tags"

export default function Home() {
    let [movies, setMovies] = useState([])
    let [featuredMovies, setFeaturedMovies] = useState([])
    let [dramaMovies, setDramaMovies] = useState([])
    let [hindiMovies, setHindiMovies] = useState([])
    let [topMovies, setTopMovies] = useState([])
    let [JapaneseMovies,setJapaneseMovies] = useState([])
    
    useEffect(async () => {
        try {
            let movieResponse = await fetch("http://localhost:3000/movies/")
            let moviesData = await movieResponse.json()
            setMovies(moviesData)//storing all the moviesdata to state variable movies

            //filter for featured movies
            let featMovies = moviesData.filter((movie) => {
                return movie.featured == true
            })
            setFeaturedMovies(featMovies.slice(0,4))

            //filter for action movies
            let dramMovies = moviesData.filter((movie) => {
                return movie.genre.includes("Drama")
            })
            setDramaMovies(dramMovies.slice(0,5))

            //filter for hindi movies
            let hindMovies = moviesData.filter((movie) => {
                return movie.language=="Hindi"
            })
            setHindiMovies(hindMovies.slice(0,5))

             //filter for top movies
             let topMovies = moviesData.filter((movie) => {
                return movie.imdb >=8.5
            })
            setTopMovies(topMovies.slice(0,5))

             let japMovies = moviesData.filter((movie) => {
                return movie.language=="Japanese"
            })
            setJapaneseMovies(japMovies.slice(0,5))
        }
        catch (err) {
            console.log(err)
        }


    }, [])//call only once

    return (
        <>
            <Header movies={movies}/>
            <Tags />
            <Carousel />
            <Channels />
            <Feature  movies={featuredMovies}/>
            <Shows title="Drama Movies" movies={dramaMovies}/>
            <Shows title="Hindi Movies" movies={hindiMovies}/>
            <Shows title="Highly Rated Movies" movies={topMovies} />
            <Shows title="Japanese Movies" movies={JapaneseMovies} />
        </>
    )
}