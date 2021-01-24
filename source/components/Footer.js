export default function Footer() {
  return `<footer class="site-footer">
    <p class="site-footer-main-text">The materials of this website are licensed under<a class="site-footer-license"
            target="_blank" href="https://creativecommons.org/licenses/by-nc/2.0/">The
            Creative Commons</a></p>
    <em>{{meta.fullName}} @{{currentYear}}</em>
</footer>`;
}
