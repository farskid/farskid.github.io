export default function Header() {
  return `<header class="site-header">
    <div class="site-header-avatar">
        <img src="/assets/feri.jpg" alt="Farzad Yousefzadeh" />
    </div>
    <h1>Farzad Yousefzadeh</h1>
    <nav class="site-header-navbar">
        <ul class="site-header-list">
            <li><a data-route="home" href="/">About</a></li>
            <li><a data-route="cv" href="/cv">CV</a></li>
            <li><a data-route="talks" href="/talks">Talks</a></li>
            <li><a data-route="blog" href="/blog">Blog</a></li>
        </ul>
        <script>
            const path = window.location.pathname.replace(/\//gi, "") || 'home';
            const navbar = document.querySelector('.site-header-navbar');
            Array.from(navbar.querySelectorAll('li')).forEach(li => {
                const anchor = li.querySelector('a');
                console.log({ path, route: anchor.getAttribute('data-route') })
                if (path.startsWith(anchor.getAttribute('data-route'))) {
                    li.classList.add('active');
                }
            })
        </script>
    </nav>
    <a class="button">Follow @farzad_yz on Twitter</a>
</header>
<link rel="stylesheet" href="/assets/normalize.css">
<link rel="stylesheet" href="/assets/styles.css">
<link rel="stylesheet" href="//unpkg.com/@highlightjs/cdn-assets@10.5.0/styles/atom-one-dark.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Serif:ital,wght@0,400;0,700;1,400&display=swap"
    rel="stylesheet">`;
}
