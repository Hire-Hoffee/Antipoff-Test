import styles from "@/styles/TeamMember.module.css";
import exit from "@/assets/exit.svg";
import phone from "@/assets/phone.svg";
import email from "@/assets/email.svg";

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
      <main className={styles.main}>
        <div className={styles.infoContainer}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur omnis
            sunt dolorum doloremque, aliquid ad eum ex at perspiciatis sed numquam aut deserunt
            pariatur ut laudantium enim libero aperiam culpa. Minus nostrum in laboriosam delectus
            aut magnam, itaque, quidem ratione iusto, illo necessitatibus consectetur. Quo dicta
            quisquam id cum!
          </p>
          <div className={styles.contactsContainer}>
            <div>
              <img src={phone} alt="phone" />
              <span>+7 (954) 333-44-55</span>
            </div>
            <div>
              <img src={email} alt="email" />
              <span>sykfafkar@gmail.com</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TeamMember;
