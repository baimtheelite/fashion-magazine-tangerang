import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArticleTypes } from "../../../services/data-types";
import Moment from "react-moment";

const IMG = process.env.NEXT_PUBLIC_IMAGE;

export default function BlogItem(props: ArticleTypes) {
  const {title, meta_description, cover, publish_date, slug} = props;
  return (
    <div className="card mb-4">
      <a href="#!">
        <Image
          width={900}
          height={400}
          // layout="fixed"
          className="card-img-top"
          src={`${IMG}/${cover}`}
          alt="..."
        />
      </a>
      <div className="card-body">
        <div className="small text-muted">
          <Moment format="DD MMMM YYYY" locale="id">{publish_date}</Moment>
        </div>
        <h2 className="card-title h4">{title}</h2>
        <p className="card-text">
          {meta_description}
        </p>
        <Link href={`/blog/${slug}`}>
          <a className="btn btn-primary">Read more →</a>
        </Link>
      </div>
    </div>
  );
}
