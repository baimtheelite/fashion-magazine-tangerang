import type { NextPage } from "next";
import Navbar from "../components/organisms/Navbar";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import BlogItem from "../components/molecules/BlogItem";
import SideWidget from "../components/organisms/SideWidget";
import { useCallback, useEffect, useState } from "react";
import { getArticle } from "../services/article";
import { ArticleTypes } from "../services/data-types";
import Head from "next/head";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { log } from "console";

const Home: NextPage = () => {
  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  const [isReady, setIsReady] = useState(true);

  const [article, setArticle] = useState([]);
  const getArticleList = useCallback(async () => {
    const data = await getArticle();
    console.log(data);
    setArticle(data.data);
    setIsReady(false);
  }, []);

  useEffect(() => {
    getArticleList();
    console.log(isReady);
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {!isReady && article.map((item: ArticleTypes) => (
                <BlogItem
                  key={item.id}
                  id={item.id}
                  cover={item.cover}
                  metaDescription={item.metaDescription}
                  publish_date={item.publish_date}
                  title={item.title}
                  slug={item.slug}
                />
              ))}

            {isReady && (
              <>
                <Skeleton height={400} />
                <Skeleton width={200} />
                <Skeleton width={300} height={25} />
                <Skeleton width={150} height={40} />

                <Skeleton height={400} />
                <Skeleton width={200} />
                <Skeleton width={300} height={25} />
                <Skeleton width={150} height={40} />
              </>
            )}
          </div>
          {/* <SideWidget /> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
