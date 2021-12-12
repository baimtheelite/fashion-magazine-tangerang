import { log } from "console";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Moment from "react-moment";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
import Navbar from "../../components/organisms/Navbar";
import SideWidget from "../../components/organisms/SideWidget";
import { getArticleDetail } from "../../services/article";
import { ArticleDetailTypes } from "../../services/data-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Blog() {
  // const {title, content, cover, publish_date, slug} = props;
  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  const { query, isReady, basePath } = useRouter();

  const [isLoading, setIsLoading] = useState(true);


  const [articleDetail, setArticleDetail] = useState({
    title: "",
    content: "",
    cover: "",
    publish_date: "",
    slug: "",
    meta_keywords: "",
    meta_description: "",
    author: {
      id: "",
      name: "",
    },
  });

  const getArticleDetailAPI = useCallback(async (slug) => {
    const data = await getArticleDetail(slug);
    console.log(data);

    setArticleDetail(data.data);
    setIsLoading(false);
  }, []);


  useEffect(() => {
    if (isReady) {
      console.log(query.slug);

      getArticleDetailAPI(query.slug);
    }
  }, [isReady]);

  return (
    <>
      <Head>
        <title>{isLoading ? articleDetail.title : "Artikel Detail"}</title>
        {/* Meta */}
        <meta name="description" content={isLoading ? articleDetail.title : "Artikel Detail"} />
        <meta name="keywords" content={isLoading ? articleDetail.meta_keywords : "Artikel Detail"} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={basePath} />
        <meta property="og:title" content={isLoading ? articleDetail.title : "Artikel Detail"} />
        <meta property="og:description" content={isLoading ? articleDetail.meta_description : "Artikel Detail"} />
        <meta property="og:image" content={isLoading ? `${IMG}/${articleDetail.cover}` : ''} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={basePath} />
        <meta property="twitter:title" content={isLoading ? articleDetail.title : "Artikel Detail"} />
        <meta property="twitter:description" content={isLoading ? articleDetail.meta_description : "Artikel Detail"} />
        <meta property="twitter:image" content={isLoading ? `${IMG}/${articleDetail.cover}` : ''} />
      </Head>
      <Navbar />
      
      {isLoading && (
        <div className="container">
          <div className="text-center">
            <Skeleton className="my-3" width={500} height={50} />
            <Skeleton count={1} width={400} />
            <Skeleton count={1} width={900} height={400} />
            <Skeleton className="my-3" count={5} />
          </div>
        </div>
      )}

      {!isLoading && (
        <>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-12">
                <article>
                  <header className="mb-4 text-center">
                    <h1 className="fw-bolder mb-1">{articleDetail.title}</h1>
                    <div className="text-muted fst-italic mb-2">
                      Posted on{" "}
                      <Moment
                        format="DD MMMM YYYY"
                        date={articleDetail.publish_date}
                        locale="id"
                      />{" "}
                      by {articleDetail.author.name}
                    </div>
                    {/* <a
            className="badge bg-secondary text-decoration-none link-light"
            href="#!"
          >
            Web Design
          </a>
          <a
            className="badge bg-secondary text-decoration-none link-light"
            href="#!"
          >
            Freebies
          </a> */}
                  </header>
                  <figure className="mb-4 text-center">
                    <Image
                      width={900}
                      height={400}
                      // layout="fixed"
                      className="img-fluid rounded"
                      src={`${IMG}/${articleDetail.cover}`}
                      // src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"

                      alt={articleDetail.title}
                    />
                  </figure>
                  <section className="mb-5 container">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: articleDetail.content,
                      }}
                    />
                  </section>
                </article>
              </div>

              {/* <SideWidget /> */}
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
