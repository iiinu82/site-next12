import Pagination from "@/app/_components/Pagination/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/NewsList/NewsList";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  // 文字列を10進法の数値に変換
  const current = parseInt(params.current, 10);
  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}
