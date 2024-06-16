import styles from "@/styles/TeamList.module.css";
import arrow from "@/assets/arrow.svg";
import exit from "@/assets/exit.svg";

import MemberCard from "@/components/MemberCard";
import { useGetUsersQuery } from "@/api/usersApi";
import { useState, useEffect } from "react";

import type { User } from "@/types";

function TeamList() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const { data } = useGetUsersQuery(page);
  const [isLiked, setIsLiked] = useState<{ id: number; isLiked: boolean }[]>(
    localStorage.getItem("isLiked") ? JSON.parse(localStorage.getItem("isLiked") as string) : []
  );

  const handleLikes = (data: User[]) => {
    if (localStorage.getItem("isLiked")) {
      return;
    }
    const isLikedArr: { id: number; isLiked: boolean }[] = [];
    data.forEach((user) => {
      isLikedArr.push({ id: user.id, isLiked: false });
    });
    localStorage.setItem("isLiked", JSON.stringify(isLikedArr));
  };

  const setLike = (id: number) => {
    const isLikedArr = [...isLiked];
    const index = isLikedArr.findIndex((item) => item.id === id);
    if (index !== -1) {
      isLikedArr[index].isLiked = !isLikedArr[index].isLiked;
    } else {
      isLikedArr.push({ id, isLiked: true });
    }
    setIsLiked(isLikedArr);
    localStorage.setItem("isLiked", JSON.stringify(isLikedArr));
  };

  useEffect(() => {
    if (data) {
      handleLikes(data.data);
      setUsers((prevUsers) => [...prevUsers, ...data.data]);
    }
  }, [data]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleExit = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

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
        <button onClick={handleExit} className={styles.exit_btn}>
          <span>Выход</span>
          <img src={exit} alt="icon" />
        </button>
      </header>
      <main className={styles.main}>
        <div className={styles.cardsContainer}>
          {users.map((user) => (
            <MemberCard
              email={user.email}
              key={user.id}
              id={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              avatar={user.avatar}
              setLike={setLike}
              isLiked={isLiked.find((item) => item.id === user.id)?.isLiked}
            />
          ))}
        </div>
        <button onClick={handleNextPage} className={styles.showMoreBtn}>
          <span>Показать еще</span>
          <img src={arrow} alt="icon" />
        </button>
      </main>
    </>
  );
}

export default TeamList;
