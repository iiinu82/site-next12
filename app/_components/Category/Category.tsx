import React from "react";
import styles from "./index.module.css";
import { CategoryName } from "@/app/_libs/microcms";

type Props = {
  category: CategoryName;
};
export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
