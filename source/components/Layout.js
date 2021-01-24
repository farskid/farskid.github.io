import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="site-container">
        ${Header()}
        <main>
            ${children}
        </main>
        ${Footer()}
    </div>
</body>

</html>`;
}
