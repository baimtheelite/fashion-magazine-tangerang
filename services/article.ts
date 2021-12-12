import axios from "axios";
import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function getArticle() {
    const url = `${ROOT_API}/article`;
  
    return callAPI({
      url,
      method: 'GET',
      data: {},
      token: true,
    });
  }