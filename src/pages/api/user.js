// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dummyData } from "@/utils/dummyData";

export default async function handler(request, response) {
  const res = await fetch("https://dev.to/api/articles/1747862");
  const data = await res.json();
  console.log("dafsdgh");
  console.log("logging data: ", data);
  console.log("logging data.title: ", data.title);
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json(data);
}
