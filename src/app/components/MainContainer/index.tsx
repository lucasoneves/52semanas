import styles from './container.module.scss';

export default function MainContainer({ children } : React.PropsWithChildren) {
  return (
    <div className={styles['container']}>{ children }</div>
  )
}
