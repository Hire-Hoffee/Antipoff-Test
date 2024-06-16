import styles from "@/styles/MemberCard.module.css";
import heart1 from "@/assets/heart1.svg";

type Props = {};

function MemberCard({}: Props) {
  return (
    <div className={styles.container}>
      <img src="https://i.pravatar.cc/124" alt="avatar" />
      <h4>Antipoff</h4>
      <button>
        <img src={heart1} alt="avatar" />
      </button>
    </div>
  );
}

export default MemberCard;
