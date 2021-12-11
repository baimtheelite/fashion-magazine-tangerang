import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArticleTypes } from "../../../services/data-types";

const IMG = process.env.NEXT_PUBLIC_IMAGE;

export default function BlogItem(props: ArticleTypes) {
  const {title, metaDescription, cover, publish_date, slug} = props;
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
        <div className="small text-muted">{publish_date}</div>
        <h2 className="card-title h4">{title}</h2>
        <p className="card-text">
          {metaDescription}
        </p>
        <Link href={`/blog/${slug}`}>
          <a className="btn btn-primary">Read more →</a>
        </Link>
      </div>
    </div>
  );
}
