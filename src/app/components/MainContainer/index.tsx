import styles from './container.module.scss';

export default function MainContainer({ children, className } : { children : React.ReactNode, className? : string}) {
  return (
    <div className={`${styles['container']} ${className} `}>{ children }</div>
  )
}
