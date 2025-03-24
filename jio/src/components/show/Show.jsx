import styles from './show.module.css'

export const Show = (props) => {
    return (
        <>
            <div className={styles.show}>
                <img src={props.movie.imageUrl} alt="poster" />
                <div className={styles.movieTitle}>
                    {props.movie.name}
                <p className={styles.movieCast}>
                    {props.movie.cast}
                </p>
                </div>
            </div>
        </>
    )
}
