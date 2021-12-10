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

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogFeatured />
            <div className="row">
              <div className="col-lg-6">
                <BlogItem />
                <BlogItem />
              </div>
              <div className="col-lg-6">
                <BlogItem />
                <BlogItem />
              </div>
            </div>
          </div>
          <SideWidget />

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
