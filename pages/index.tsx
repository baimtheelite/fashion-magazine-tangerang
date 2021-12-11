import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/organisms/Navbar";
import Header from "../components/organisms/Header";
import styles from "../styles/Home.module.css";
import Footer from "../components/organisms/Footer";
import BlogItem from "../components/molecules/BlogItem";
import BlogFeatured from "../components/molecules/BlogFeatured";
import SideWidget from "../components/organisms/SideWidget";
import { useCallback, useEffect, useState } from "react";
import { getArticle } from "../services/article";

const Home: NextPage = () => {
  const [article, setArticle] = useState([]);
  const getArticleList = useCallback(async () => {
    const data = await getArticle();
    console.log(data);
    setArticle(data.data);
  }, []);

  useEffect(() => {
    getArticleList();
  }, []);
  return (
    <>
      <Navbar />
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* <BlogFeatured />
            <BlogFeatured /> */}
            {/* {article.map(item => (
              <BlogItem />
            ))} */}
            <BlogItem cover="image/" id={123} metaDescription="asdadsad" publish_date="2021-02-02" key={123} title="asdasd" slug="asdasd-asdad" />
            <BlogItem cover="image/" id={123} metaDescription="asdadsad" publish_date="2021-02-02" key={123} title="asdasd" slug="asdasd-asdad" />
            <BlogItem cover="image/" id={123} metaDescription="asdadsad" publish_date="2021-02-02" key={123} title="asdasd" slug="asdasd-asdad" />
          </div>
          <SideWidget />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
