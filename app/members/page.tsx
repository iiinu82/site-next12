import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "橘　勝俊",
      position: "CEO",
      profile:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae inventore amet aspernatur delectus aliquam veniam libero, excepturi quae neque tempore! Deserunt minus nihil praesentium modi cum, optio obcaecati porro.",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "田中　雅子",
      position: "CEO",
      profile:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae inventore amet aspernatur delectus aliquam veniam libero, excepturi quae neque tempore! Deserunt minus nihil praesentium modi cum, optio obcaecati porro.",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "後藤　公則",
      position: "CEO",
      profile:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae inventore amet aspernatur delectus aliquam veniam libero, excepturi quae neque tempore! Deserunt minus nihil praesentium modi cum, optio obcaecati porro.",
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
