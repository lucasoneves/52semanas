import Link from "next/link";
import MainContainer from "../MainContainer";
import styles from "./main-header.module.scss";
export default function MainHeader() {
  return (
    <div className={styles["main-header"]}>
      <MainContainer className={`${styles['container']}`}>
        <nav>
          <Link className="text-lg font-bold" href={'/'}>Desafio das 52 semanas</Link>
          <ul className="flex gap-12">
            <Link href={'/challenges'}>Desafios</Link>
            <Link href={'/challenges/new'}>Criar desafio</Link>
          </ul>
        </nav>
      </MainContainer>
    </div>
  );
}
