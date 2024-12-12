import styles from './progress-bar.module.scss';

export default function ProgressBar({ percentage = 0 }: { percentage: number}) {
  return (
    <div className={styles['progress-bar']}>
      <span className={styles['inner-bar']} style={{ width: `${percentage}%`}}></span>
    </div>
  )
}
