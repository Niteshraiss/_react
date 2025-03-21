import { FeatureShow } from '../featured-show/FeatureShow'
import styles from './feature.module.css'

export const Feature = () => {
    return (
        <>

            <section className={styles.feature}>
                <h1 className={styles.sectionTitle}>Hot Right Now 🔥</h1>
                <div className={styles.shows}>
                    <FeatureShow/>
                    <FeatureShow/>
                    <FeatureShow/>
                </div>
            </section>
        </>
    )
}
