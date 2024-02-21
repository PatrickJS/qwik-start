import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Qwik Start</title>
      </head>
      <body>
        <div id="app"></div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  );
});
