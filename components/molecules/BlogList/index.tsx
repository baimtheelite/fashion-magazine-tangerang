import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArticleTypes } from "../../../services/data-types";
import Moment from "react-moment";

const IMG = process.env.NEXT_PUBLIC_IMAGE;

export default function BlogList(props: ArticleTypes) {
  const { title, meta_description, cover, publish_date, slug } = props;
  return (
    <Link href={`blog/${slug}`}>
      <a style={{textDecoration: 'none', color: 'black'}}>
        <div className="card mb-4">
          <div className="card-body py-0">
            <div className="row">
              <div className="col-2 p-0">
                <Image
                  width={900}
                  height={400}
                  objectFit="cover"
                  className="img-fluid m-0"
                  src={`${IMG}/${cover}`}
                  alt="..."
                />
              </div>
              <div className="col-10 py-2">
                <div className="small text-muted">
                  <Moment format="DD MMMM YYYY" locale="id">
                    {publish_date}
                  </Moment>
                </div>
                <h2 className="card-title h4">{title}</h2>
                <p className="card-text text">{meta_description}</p>
                {/* <Link href={`/blog/${slug}`}>
                <a className="btn btn-primary">Read more →</a>
              </Link> */}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
