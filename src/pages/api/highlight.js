export default async function handler(request, response) {
  const res = await fetch("http://dev.to/api/articles?per_page=1&top=1");
  const data = await res.json();

  console.log("data: ", data);
  console.log("data.title: ", data.title);
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json(data);
}
