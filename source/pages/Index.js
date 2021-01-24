import Layout from "../components/Layout";

export default function Index() {
  return Layout({
    children: `
<section style="margin-bottom:3.75rem">
    <h1>Howdy! My name is Farzad YZ
    </h1>
    <p>I'm a Software engineer working at <a rel="nofollow" href="https://epicgames.com"><strong>Epic
                Games</strong></a> <!-- -->and
        living in <span style="font-size:40px;vertical-align:middle;display:inline-block;line-height:1" role="img"
            aria-label="Finland">🇫🇮</span>
    </p>
    <p>I'm interested in <span style="font-weight:700;display:inline-block">Javascript</span>,<span
            style="font-weight:700;display:inline-block">Typescript</span>,
        <span style="font-weight:700;display:inline-block">React</span>,
        <span style="font-weight:700;display:inline-block">React Native</span>,
        <span style="font-weight:700;display:inline-block">Nodejs</span>,
        <span style="font-weight:700;display:inline-block">Serverless</span>,
        <span style="font-weight:700;display:inline-block">GraphQL</span>,
        <span style="font-weight:700;display:inline-block">ReasonML</span>. Fascinated by
        <span style="font-weight:700;display:inline-block">DX Tooling</span> and
        <span style="font-weight:700;display:inline-block">Automation</span>.
        <span style="font-weight:700;display:inline-block"><a href="/talks">Public technical
                speaker</a></span>. Passionate about <span style="font-weight:700;display:inline-block">UI
            Engineering</span>,
        <span style="font-weight:700;display:inline-block">Statecharts</span> and
        <span style="font-weight:700;display:inline-block">Reactivity</span>.
    </p>
    <p>My hobbies consist of Walking, Listening to music for a long time, Reading, Watching movies, Playing
        pool
        and
        Football. You can actively find me on
        <a style="font-weight:700;color:#282828;display:inline-block;margin:0 5px;text-decoration:underline;box-shadow:none"
            target="_blank" href="https://twitter.com/farzad_yz">Twitter</a> and
        <a style="font-weight:700;color:#282828;display:inline-block;margin:0 5px;text-decoration:underline;box-shadow:none"
            target="_blank" href="https://medium.com/@farzad_yz">Medium</a>. Come say Hi!
    </p>
    <p>You can also find me on:<a
            style="font-weight:700;color:#282828;display:inline-block;margin:0 5px;text-decoration:underline;box-shadow:none"
            target="_blank" href="https://github.com/farskid">Github</a><a
            style="font-weight:700;color:#282828;display:inline-block;margin:0 5px;text-decoration:underline;box-shadow:none"
            target="_blank" href="https://stackoverflow.com/users/2784512/farzad-yz">Stackoverflow</a><a
            style="font-weight:700;color:#282828;display:inline-block;margin:0 5px;text-decoration:underline;box-shadow:none"
            target="_blank" href="https://www.linkedin.com/in/farzadyz">Linkedin</a>.</p>
</section>
{{/content}}
{{/layout}}`,
  });
}
