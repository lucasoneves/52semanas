"use client";
import Currency from "../Currency";
import ProgressBar from "../ProgressBar";
import styles from "./challenge-card.module.scss";

type ChallengeTypes = {
  title: string;
  targetValue: number;
  percentage: number;
  amount: number;
};

export default function ChallengeCard({
  title,
  targetValue,
  amount,
  percentage,
}: ChallengeTypes) {
  return (
    <div className={styles["challenge-card"]}>
      <header>
        <h2 className={styles["challenge-title"]}>{title}</h2>
        <button>Editar</button>
      </header>
      <span className={styles["challenge-amount"]}><Currency value={amount} /></span>
      <ProgressBar percentage={percentage} />
      <span>Meta: <Currency value={targetValue} /></span>
    </div>
  );
}
