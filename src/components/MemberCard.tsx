import styles from "@/styles/MemberCard.module.css";
import heart1 from "@/assets/heart1.svg";

import type { User } from "@/types";

function MemberCard({ avatar, first_name, last_name }: User) {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="avatar" />
      <h4>{first_name + " " + last_name || "UNDEFINED"}</h4>
      <button>
        <img src={heart1} alt="avatar" />
      </button>
    </div>
  );
}

export default MemberCard;
