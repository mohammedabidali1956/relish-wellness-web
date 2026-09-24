export default function handler(req, res) {
  const body = "google-site-verification: googleda41df8ea84cf8c1.html";
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(body);
}
