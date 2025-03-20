import styles from './header.module.css'
import jclogo from '../../assets/jc_logo_v2.svg'
import jio from '../../assets/jio-logo.png'
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import voiceIcon from '../../assets/voice-search.svg'
const Header = () => {
    let navLinks = ["Home", "Sports", "Movies", "Tv Shows", "More"]
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
                        <input type="text" name="" id="" className={styles.searchInput} placeholder='Movies,Shows and More' />
                        <div className={styles.headerIcon}>
                            <img src={voiceIcon} alt="Voice" />
                        </div>
                    </div>
                    <img src={jio} className={styles.userIcon} alt="" />
                </div>
            </header>
        </>
    )
}

export default Header