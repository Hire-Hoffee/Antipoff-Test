import styles from "@/styles/TeamMember.module.css";
import exit from "@/assets/exit.svg";
import phone from "@/assets/phone.svg";
import email from "@/assets/email.svg";
import back from "@/assets/back.svg";

import { useGetUserByIdQuery } from "@/api/usersApi";
import { useParams, useNavigate } from "react-router-dom";

function TeamMember() {
  const { id } = useParams();
  const { data } = useGetUserByIdQuery(Number(id));

  const navigate = useNavigate();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={data?.data.avatar} alt="avatar" />
          <div>
            <h1>{data?.data.first_name + " " + data?.data.last_name || "UNDEFINED"}</h1>
            <span>Партнер</span>
          </div>
        </div>
        <button className={styles.exit_btn}>
          <span>Выход</span>
          <img src={exit} alt="icon" />
        </button>
        <button className={styles.back_btn} onClick={() => navigate(-1)}>
          <img src={back} alt="icon" />
          <span>Назад</span>
        </button>
      </header>
      <main className={styles.main}>
        <div className={styles.infoContainer}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis hic dolorum
            accusamus temporibus quisquam neque eaque nemo enim qui repellat iste odio recusandae
            eligendi reiciendis culpa, expedita saepe ducimus praesentium quasi cum autem cupiditate
            nihil laboriosam. Autem fugit quos, totam rem dicta nemo veniam in id explicabo repellat
            repudiandae consequuntur, quasi dolorum tempore voluptate eaque sunt iusto officiis,
            aspernatur adipisci eius! Placeat a quod minus deleniti dolorem id aut aperiam, cumque
            deserunt iste vel obcaecati provident soluta perferendis. Corporis accusantium dolores
            nisi deleniti, autem repellat! Fuga, debitis tempora amet doloremque quo doloribus
            voluptas delectus beatae quod blanditiis, inventore error necessitatibus?
          </p>
          <div className={styles.contactsContainer}>
            <div>
              <img src={phone} alt="phone" />
              <span>+7 (954) 333-44-55</span>
            </div>
            <div>
              <img src={email} alt="email" />
              <span>{data?.data.email || "UNDEFINED"}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TeamMember;
