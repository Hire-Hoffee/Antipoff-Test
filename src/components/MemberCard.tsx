import styles from "@/styles/MemberCard.module.css";
import heart1 from "@/assets/heart1.svg";
import heart2 from "@/assets/heart2.svg";
import { useNavigate } from "react-router-dom";

import type { User } from "@/types";

type Props = {
  setLike: (id: number) => void;
  isLiked?: boolean;
};

function MemberCard({ id, avatar, first_name, last_name, setLike, isLiked }: User & Props) {
  const navigate = useNavigate();

  const handleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    e.stopPropagation();
    setLike(id);
  };

  return (
    <div className={styles.container} onClick={() => navigate(`/member/${id}`)}>
      <img src={avatar} alt="avatar" />
      <h4>{first_name + " " + last_name || "UNDEFINED"}</h4>
      <button onClick={(e) => handleLike(e, id)}>
        <img src={isLiked ? heart2 : heart1} alt="avatar" />
      </button>
    </div>
  );
}

export default MemberCard;
