import styles from './footer.module.css'

function Footer({completed, total}) {
  return (
    <div className={styles.footer}>
        <span className={styles.item}>Completed: {completed}</span>
        <span className={styles.item}>Total todos: {total}</span>
    </div>
  )
}

export default Footer