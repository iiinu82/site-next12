import { News } from "../_libs/microcms";
import styles from "./index.module.css";
import Image from "next/image";
import Category from "../_components/Category/Category";
import Date from "../_components/Date/Date";
import Link from "next/link";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません</p>;
  }

  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            <div className={styles.link}>
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="NoImage"
                width={1200}
                height={630}
              />
              <dl className={styles.content}>
                <dt className={styles.newItemTitle}>{article.title}</dt>
                <dd className={styles.meta}>
                  <Category category={article.category} />

                  <Date date={article.publishedAt ?? article.createdAt} />
                </dd>
              </dl>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
