export default function Index() {
  return (
    <div className="py-16 px-4 max-w-screen-md mx-auto w-full">
      <h1 className="text-4xl font-bold mb-6">Welcome to Remix 6</h1>
      <ul className="list-disc grid gap-2 px-4.5">
        <li>
          <a
            target="_blank"
            className="text-blue-500 underline"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-blue-500 underline"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-blue-500 underline"
            href="https://remix.run/docs"
            rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
