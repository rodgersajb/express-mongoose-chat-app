import Aside from "./Aside";
import Content from "./Content";
import Conversations from "./Conversations";

export default function Home() {
    return (
      <main className="grid grid-cols-20 min-h-screen w-100%">
        <Aside />
        <Content />
        <Conversations />
      </main>
    );
}