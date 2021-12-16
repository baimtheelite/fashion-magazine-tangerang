import { log } from "console";
import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import BlogList from "../../components/molecules/BlogList";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import { getArticle } from "../../services/article";
import { useRouter } from "next/router";
import { ArticleTypes } from "../../services/data-types";
import SkeletonTheme from "react-loading-skeleton";

export default function Blog() {
  const router = useRouter();
  const { search } = router.query;
  console.log(search);

  const [article, setArticle] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const getArticleAPI = useCallback(async (search) => {
    const data = await getArticle({
      keywords: search,
    });

    setArticle(data.data);
    setIsReady(true);
  }, []);

  useEffect(() => {
    getArticleAPI(search);
  }, [search]);
  return (
    <>
      <Head>
        <title>Blog - Fashion Magazine Tangerang</title>
      </Head>
      <Navbar />
      <div className="container my-4" style={{ minHeight: "100vh" }}>
        {search ? <h1>Hasil Pencarian: "{search}"</h1> : <h1>Index Blog</h1>}
        {!isReady && (
          <>
            <SkeletonTheme height={400} />
            <SkeletonTheme width={200} />
            <SkeletonTheme width={300} height={25} />
            <SkeletonTheme width={150} height={40} />

            <SkeletonTheme height={400} />
            <SkeletonTheme width={200} />
            <SkeletonTheme width={300} height={25} />
            <SkeletonTheme width={150} height={40} />
          </>
        )}

        {isReady && (
          <>
            {article &&
              article.map((item: ArticleTypes) => (
                <BlogList
                  key={item.id}
                  id={item.id}
                  cover={item.cover}
                  meta_description={item.meta_description}
                  publish_date={item.publish_date}
                  title={item.title}
                  slug={item.slug}
                />
              ))}

            {!article && (
              //make div vertically and horizontally center
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                <p className="ml-4"> No Article Found</p>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
