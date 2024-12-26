import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <BodyContainer>
        <p className="py-24 text-center text-3xl text-yellow-300">
          brian@brianjoseph.me
        </p>
        <div className="columns-3 px-52">
          <p className="break-inside-avoid">
            Hi, I'm Brian! I am a student at Valencia College
          </p>
          <p className="break-inside-avoid">
            I currently study Computer Science, with an emphasis on web
            development, both front-end and back-end, because I want to create
            websites and tools that make life easier, connect people in new
            ways, and help shape the future of how humans interact online.
          </p>
          <p className="break-inside-avoid">
            Currently, I work at The Shack, flexing my engineering prowess by
            meticulously crafting the finest delicacies for my loyal
            customers—because nothing says "future software engineer" like
            optimizing the perfect cheese-to-burger ratio and debugging
            milkshake machines in record time.{" "}
          </p>
          <p className="break-inside-avoid">
            In the future, I would like to work in big tech, specifically
            because I love how these companies are able to create innovative
            solutions that simplify and improve people's lives in so many ways.
          </p>
          <p className="break-inside-avoid">
            Also, outside of work and studying, I like to go to the gym, where I
            challenge myself physically and mentally, building discipline and
            resilience that carry over into all aspects of my life
          </p>
        </div>
      </BodyContainer>
    </>
  );
}
