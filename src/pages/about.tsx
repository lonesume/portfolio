import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";
import { useScramble } from "use-scramble";

export default function About() {
  const { ref } = useScramble({
    text: "More than just code.",
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
        <section className="mx-auto max-w-6xl px-6 py-24">
          {/* Header */}
          <div className="mb-20">
            <p
              className="mb-5 text-xl text-yellow-300 md:text-2xl"
              ref={ref}
            ></p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              I&apos;m Brian Joseph, a Computer Science student and software
              engineer focused on building useful, thoughtful technology.
            </h1>
          </div>

          {/* About */}
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-yellow-300">
                My Story
              </p>

              <p className="text-lg leading-8">
                I&apos;m a third-year Computer Science student at Florida
                A&amp;M University, originally from Orlando, Florida. I
                transferred to FAMU after earning my associate degree from
                Valencia College.
              </p>

              <p className="mt-6 text-lg leading-8">
                My interests span software engineering, artificial intelligence,
                and cybersecurity. I especially enjoy building full-stack
                products and turning ideas into software that people can
                actually use.
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-yellow-300">
                Engineering
              </p>

              <p className="text-lg leading-8">
                I&apos;ve worked with technologies including Python, TypeScript,
                Go, React, Next.js, FastAPI, MongoDB, and Docker while building
                web applications, AI tools, desktop software, and
                computer-vision projects.
              </p>

              <p className="mt-6 text-lg leading-8">
                What excites me about engineering is the process of
                understanding a problem, experimenting with solutions, and
                eventually creating something that feels simple and intuitive to
                the person using it.
              </p>
            </div>
          </div>

          {/* Beyond Code */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="mb-4 text-sm uppercase tracking-widest text-yellow-300">
                  Beyond Code
                </p>

                <p className="text-lg leading-8">
                  Leadership and service have also shaped who I am. From student
                  organizations to tutoring in my community, I enjoy
                  opportunities that allow me to contribute, lead, and help the
                  people around me grow.
                </p>
              </div>

              <div>
                <p className="mb-4 text-sm uppercase tracking-widest text-yellow-300">
                  Outside the Screen
                </p>

                <p className="text-lg leading-8">
                  When I&apos;m away from my computer, you&apos;ll probably find
                  me in the gym, cooking for my family, watching football, or
                  spending time with the people I care about. I&apos;m big on
                  constantly challenging myself, whether that&apos;s physically,
                  academically, or professionally.
                </p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <p className="max-w-3xl text-2xl leading-10">
              Right now, I&apos;m focused on becoming a stronger engineer,
              contributing to meaningful products, and finding opportunities
              where I can learn from great teams while building things that
              matter.
            </p>

            <a
              href="mailto:brian@brianjoseph.me"
              className="mt-8 inline-block text-xl text-yellow-300 transition-opacity hover:opacity-70"
            >
              brian@brianjoseph.me →
            </a>
          </div>
        </section>
      </BodyContainer>
    </>
  );
}
