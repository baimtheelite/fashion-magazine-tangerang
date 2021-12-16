import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getArticle } from "../../../services/article";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  

  const onSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/blog?search=${search}`);
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Fashion Magazine Tangerang</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link href="/">
                <a className="nav-link">
                  Home
                </a>
              </Link>
            </li> */}
            <li className="nav-item">
              <form action="" method="GET" onSubmit={onSubmit}>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Cari Artikel"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="input-group-text">
                    <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button> 
                  </div>
                </div>
              </form>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Blog
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
