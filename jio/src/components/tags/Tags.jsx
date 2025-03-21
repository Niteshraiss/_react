import { useState } from 'react'
import styles from './tags.module.css'

const Tags = () => {
    let [tags, setTags] = useState([
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Horror",
        "Science Fiction",
        "Romance",
        "Thriller",
        "Animation",
        "Documentary",
        "Musical"
    ])
    return (
        <>
            <div className={styles.tags}>
                {tags.map((tag) => {
                    return <p className={styles.tag}>{tag}</p>
                })}
            </div>
        </>
    )
}

export default Tags