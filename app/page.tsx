import ButtonLink from "./_components/ButtonLink/ButtonLink";
import { News } from "./_libs/microcms";
import NewsList from "./NewsList/NewsList";
import styles from "./page.module.css";
import Image from "next/image";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスと移転しました",
      category: {
        name: "情報",
      },
      publishedAt: "2025/05/18",
      createdAt: "2025/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました。",
      category: {
        name: "更新",
      },
      // publishedAt: "2025/05/19",
      createdAt: "2025/05/20",
    },
    {
      id: "3",
      title: "当社CEOが業界リーダーTOP30に選出されました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/05/19",
      createdAt: "2025/05/19",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
