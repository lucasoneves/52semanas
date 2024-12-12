"use client";
import { useEffect, useState } from "react";
import ChallengeCard from "../ChallengeCard";
import styles from './challenge-list.module.scss';

export default function ChallengeCardList() {
  const [challenge, setChallenge] = useState([
    { title: "Férias 2025", amount: 250, percentage: 10, targetValue: 2500, id: '30d38826-5adb-415e-bbeb-d56ebb2b7671' },
    { title: "Camisa Palmeiras 2025", amount: 0, percentage: 0, targetValue: 600, id: '3f9afcee-b315-4ca3-ac7c-8d1daa7ac6c5' },
  ]);

  useEffect(() => {
    setChallenge((prevState) => {
      return [...prevState]
    })
  }, [])
  return (
    <div className={styles['challenges-list']}>
      {challenge.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          amount={challenge.amount}
          percentage={challenge.percentage}
          targetValue={challenge.targetValue}
          title={challenge.title}
        ></ChallengeCard>
      ))}
    </div>
  );
}
