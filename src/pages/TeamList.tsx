import styles from "@/styles/TeamList.module.css";
import arrow from "@/assets/arrow.svg";
import exit from "@/assets/exit.svg";

import MemberCard from "@/components/MemberCard";
import { useGetUsersQuery } from "@/api/usersApi";

function TeamList() {
  const { data } = useGetUsersQuery(1);

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
        <button className={styles.exit_btn}>
          <span>Выход</span>
          <img src={exit} alt="icon" />
        </button>
      </header>
      <main className={styles.main}>
        <div className={styles.cardsContainer}>
          {data?.data.map((user) => (
            <MemberCard
              key={user.id}
              id={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              avatar={user.avatar}
            />
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
