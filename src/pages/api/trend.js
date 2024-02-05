export default async function handler(request, response) {
  const res = await fetch("http://dev.to/api/articles?per_page=4&top=1");
  const data = await res.json();
  console.log(data);
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json(data);
}
