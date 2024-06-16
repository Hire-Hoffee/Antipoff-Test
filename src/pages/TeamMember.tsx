import styles from "@/styles/TeamMember.module.css";
import exit from "@/assets/exit.svg";

type Props = {};

function TeamMember({}: Props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src="https://i.pravatar.cc/124" alt="avatar" />
          <div>
            <h1>Antipoff</h1>
            <span>Партнер</span>
          </div>
        </div>
        <button className={styles.exit_btn}>
          <span>Выход</span>
          <img src={exit} alt="icon" />
        </button>
        <button className={styles.back_btn}>
          <span>Назад</span>
        </button>
      </header>
      <main className={styles.main}>main</main>
    </>
  );
}

export default TeamMember;
