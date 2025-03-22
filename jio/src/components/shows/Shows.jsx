import { Show } from '../show/Show'
import styles from './shows.module.css'

export const Shows = (props) => {
    return (
        <>
            <section className={styles.shows}>
                <h1>{props.title}</h1>
                <div className={styles.showsParent}>
                    <Show />
                    <Show/>
                    <Show/>
                    <Show/>
                    <Show/>
                </div>
            </section>
        </>
    )
}
