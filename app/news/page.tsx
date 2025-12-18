import { getNewsList } from "../_libs/microcms";
import NewsList from "../NewsList/NewsList";

export default async function Page() {
  const { contents: news } = await getNewsList();
  return <NewsList news={news} />;
}
