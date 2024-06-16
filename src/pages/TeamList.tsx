import styles from "@/styles/TeamList.module.css";

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
      <main>
        {[1, 2, 3, 4, 5, 6, 7, 9].map((item) => (
          <MemberCard key={item} />
        ))}
      </main>
    </>
  );
}

export default TeamList;
