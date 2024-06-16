import styles from "@/styles/TeamList.module.css";
import arrow from "@/assets/arrow.svg";

import MemberCard from "@/components/MemberCard";

type Props = {};

function TeamList({}: Props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Наша команда</h1>
          <p>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
            плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
          </p>
        </div>
        <button className={styles.exit_btn}>Выход</button>
      </header>
      <main className={styles.main}>
        <div className={styles.cardsContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <MemberCard key={item} />
          ))}
        </div>
        <button className={styles.showMoreBtn}>
          <span>Показать еще</span>
          <img src={arrow} alt="icon" />
        </button>
      </main>
    </>
  );
}

export default TeamList;
