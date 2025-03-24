import styles from './header.module.css'
import jclogo from '../../assets/jc_logo_v2.svg'
import jio from '../../assets/jio-logo.png'
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import voiceIcon from '../../assets/voice-search.svg'
import { useState, useEffect } from 'react'
import { Show } from '../show/Show'

const Header = (props) => {

    let navLinks = ["Home", "Sports", "Movies", "Tv Shows", "More"];
    let [searchName, setSearchName] = useState("");
    let [filteredMovies, setFilterMovies] = useState([])

    useEffect(() => {
        if (searchName !== "") {
            let filterMovies = props.movies.filter((movie) => {
                // return movie.name.toUpperCase().includes(searchName.toUpperCase())
                return movie.name.toUpperCase().indexOf(searchName.toUpperCase())==0
            })
            setFilterMovies(filterMovies)
        }else{
            setFilterMovies([])
        }
    }, [searchName])
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src={jclogo} alt="Logo" />
                        <div className={styles.premium}>
                            <img src={crown} alt="" />
                            <p>Go Premium</p>
                        </div>
                    </div>
                    <ul className={styles.navlinks}>
                        {
                            navLinks.map((link) => {
                                return <li className={styles.navlink}>{link}</li>
                            })
                        }

                    </ul>
                </nav>
                <div className={styles.search}>
                    <div className={styles.searchbox}>
                        <div className={styles.headerIcon}>
                            <img src={searchIcon} alt="Search" />
                        </div>
                        <input type="text" onChange={(event) => {
                            setSearchName(event.target.value)
                        }}
                            className={styles.searchInput} placeholder='Movies,Shows and More' />
                        <div className={styles.headerIcon}>
                            <img src={voiceIcon} alt="Voice" />
                        </div>
                    </div>
                    <img src={jio} className={styles.userIcon} alt="" />
                </div>
            </header>
            {
                filteredMovies.length!==0 ?(
                    <div className={styles.searchResults}>
                    {filteredMovies.map((movie) => {
                        return <Show movie={movie} />
                    })}
                </div>
                ) :null
            }

        </>
    )
}

export default Header