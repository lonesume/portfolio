import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";
import { useScramble } from "use-scramble";

export default function About() {
  const { ref } = useScramble({
    text: "brian@brianjoseph.me",
    range: [65, 125],
    speed: 0.5,
    tick: 2,
    step: 5,
    scramble: 5,
    seed: 2,
    chance: 1,
    overdrive: false,
    overflow: false,
  });

  return (
    <>
      <Navbar />
      <BodyContainer>
        <p className="py-24 text-center text-3xl text-yellow-300" ref={ref}></p>
        <div className="columns-3 px-52">
          <p className="break-inside-avoid">
            Hi, I&apos;m Brian! I am a student at Valencia College
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
            customers—because nothing says &quot;future software engineer&quot;
            like optimizing the perfect cheese-to-burger ratio and debugging
            milkshake machines in record time.{" "}
          </p>
          <p className="break-inside-avoid">
            In the future, I would like to work in big tech, specifically
            because I love how these companies are able to create innovative
            solutions that simplify and improve people&apos;s lives in so many
            ways.
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
