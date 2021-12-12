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

export default function Blog(props) {
  // const {title, content, cover, publish_date, slug} = props;
  const { articleDetail } = props;
  console.log(articleDetail);

  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  const { query, isReady, basePath } = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Head>
        <title>{articleDetail.title} - Fashion Magazine Tangerang</title>
        <meta name="description" content={articleDetail.meta_description} />
        <meta name="keywords" content={articleDetail.meta_keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={basePath} />
        <meta property="og:title" content={articleDetail.title} />
        <meta property="og:description" content={articleDetail.meta_description} />
        <meta property="og:image" content={`${IMG}/${articleDetail.cover}`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={basePath} />
        <meta property="twitter:title" content={articleDetail.title} />
        <meta property="twitter:description" content={articleDetail.meta_description} />
        <meta property="twitter:image" content={`${IMG}/${articleDetail.cover}`} />
      </Head>
      <Navbar />

      {/* {isLoading && (
        <div className="container">
          <div className="text-center">
            <Skeleton className="my-3" width={500} height={50} />
            <Skeleton count={1} width={400} />
            <Skeleton count={1} width={900} height={400} />
            <Skeleton className="my-3" count={5} />
          </div>
        </div>
      )} */}

      {isLoading && (
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
                  </header>
                  <figure className="mb-4 text-center">
                    <Image
                      width={900}
                      height={400}
                      className="img-fluid rounded"
                      src={`${IMG}/${articleDetail.cover}`}
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
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

interface getServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    slug: string;
  };
}

export async function getServerSideProps({ req, params }: getServerSideProps) {
  const { slug } = params;

  const response = await getArticleDetail(slug);

  return {
    props: {
      articleDetail: response.data,
    },
  };
}
