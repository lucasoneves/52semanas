import MainContainer from "../MainContainer";
import styles from "./main-header.module.scss";
export default function MainHeader() {
  return (
    <div className={styles["main-header"]}>
      <MainContainer>
        <nav>
          <h1>Desafio das 52 semanas</h1>
          <button>Criar desafio</button>
        </nav>
      </MainContainer>
    </div>
  );
}
