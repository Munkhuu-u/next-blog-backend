export default async function handler(request, response) {
  const res = await fetch("http://dev.to/api/articles?per_page=15");
  const data = await res.json();
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json(data);
}
