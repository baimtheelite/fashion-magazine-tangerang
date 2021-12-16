import axios from "axios";
import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function getArticle(data : object = {} ) {
  const url = `${ROOT_API}/article`;
  console.log(data);

  return callAPI({
    url,
    method: "GET",
    params: data,
    token: false,
  });
}

export async function getArticleDetail(slug: string) {
  const url = `${ROOT_API}/article/${slug}`;

  return callAPI({
    url,
    method: "GET",
    data: {},
    token: false,
  });
}
