import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  //   これはデフォルト値。空の時に入る値
  current = 1,
  basePath = "/news",
}: Props) {
  // 45なら5を返す、55なら6を返す関数
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className={styles.container}>
        {/* リンクの付いた1,2,3,4,5....を表示する */}
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            {current !== p ? (
              // 現在のページではないページ番号にはリンクと.itemがつく
              <Link href={`${basePath}/p/${p}`} className={styles.item}>
                {p}
              </Link>
            ) : (
              // 現在のページのページ番号にはリンクが無くて、.itemと.currentがつく
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
