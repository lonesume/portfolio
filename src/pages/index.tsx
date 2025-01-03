import Head from "next/head";
import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";
import Image from "next/image";
// import { api } from "~/utils/api";

import homeImage from "../../public/images/home-page-img.png";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Brian Joseph&apos;s Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <BodyContainer>
          <div className="flex flex-row px-40">
            <div className="w-2/3 space-y-1">
              <p className="animate-fadeIn1 text-4xl">
                Full Stack Software Developer
              </p>
              <p className="animate-fadeIn2 text-4xl">
                Student @ Valencia College
              </p>
              <p className="animate-fadeIn3 text-4xl">Burrito Lover</p>
            </div>
            <div className="mr-40 w-1/3">
              <Image
                src={homeImage}
                alt={"Home image"}
                objectFit="cover"
                width={512} // Use numbers for width and height
                height={512}
              />
            </div>
          </div>
        </BodyContainer>
      </main>
    </>
  );
}
