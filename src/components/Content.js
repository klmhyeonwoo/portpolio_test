import styles from './Content.module.css';

const Content = ({children}) => {
    return (
        <article className={styles.content}>
            {children}
        </article>
    )
}

export default Content;