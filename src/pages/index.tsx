import Head from "next/head";
import Link from "next/link";
import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <BodyContainer>
          <p className="animate-fadeIn1">Full Stack Software Developer</p>
          <p className="animate-fadeIn2">Student @ Valencia College</p>
          <p className="animate-fadeIn3">Burrito Lover</p>
        </BodyContainer>
      </main>
    </>
  );
}
