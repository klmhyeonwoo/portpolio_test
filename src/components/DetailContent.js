import styles from './DetailContent.module.css';

const DetailCotent = ({children}) => {
    return (
    <div className={styles.DetailCotent}>
       {children}
    </div>
    )
}

export default DetailCotent;