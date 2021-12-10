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
  }, [])
  
  useEffect(() => {
    getArticleList();
    console.log(process.env.NEXT_PUBLIC_API);
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
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
          <SideWidget />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
