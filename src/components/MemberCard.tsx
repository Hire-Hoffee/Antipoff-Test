import styles from "@/styles/MemberCard.module.css";
import heart1 from "@/assets/heart1.svg";
import { useNavigate } from "react-router-dom";

import type { User } from "@/types";

function MemberCard({ id, avatar, first_name, last_name }: User) {
  const navigate = useNavigate();

  return (
    <div className={styles.container} onClick={() => navigate(`/member/${id}`)}>
      <img src={avatar} alt="avatar" />
      <h4>{first_name + " " + last_name || "UNDEFINED"}</h4>
      <button>
        <img src={heart1} alt="avatar" />
      </button>
    </div>
  );
}

export default MemberCard;
