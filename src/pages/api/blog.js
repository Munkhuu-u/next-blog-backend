export default async function handler(request, response) {
  const res = await fetch("https://dev.to/api/articles/1747862");
  const data = await res.json();

  console.log("data: ", data);
  console.log("data.title: ", data.title);
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.status(200).json(data);
}
