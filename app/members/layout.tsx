// メンバーページのレイアウト。Heroは上の背景と大文字（と日本語）。Sheetは幅だけ。childrenにはmembersの中身が入る

import Hero from "../_components/Hero/Hero";
import Sheet from "../_components/Sheet/Sheet";
import styles from "./page.module.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}
