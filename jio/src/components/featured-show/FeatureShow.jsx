import styles from './feature-show.module.css'

export const FeatureShow = (props) => {
    return (
        <>
            <div className={styles.featureShow}>
                <img src={props.movie.imageUrl} alt="" />
                <div className={styles.movieTitle}>
                    {props.movie.name}
                </div>
            </div>
        </>
    )
}
