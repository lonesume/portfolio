import Link from "next/link";
import { useCallback } from "react";
import { useRouter } from "next/router";

enum Page {
  Home = "/",
  About = "/about",
  Projects = "/projects",
}

export default function Navbar() {
  const router = useRouter();

  const highlightLinkBasedOnPage = useCallback(
    (linkPath: string) =>
      linkPath === router.pathname ? "text-yellow-300" : "",
    [],
  );

  return (
    <>
      <div className="mx-10 my-5 space-x-10">
        <Link
          className={`hover:text-yellow-300 ${highlightLinkBasedOnPage(Page.Home)}`}
          href={Page.Home}
        >
          Brian Joseph
        </Link>
        <Link
          className={`hover:text-yellow-300 ${highlightLinkBasedOnPage(Page.About)}`}
          href={Page.About}
        >
          About
        </Link>
        <Link
          className={`hover:text-yellow-300 ${highlightLinkBasedOnPage(Page.Projects)}`}
          href={Page.Projects}
        >
          Projects
        </Link>
        <a
          className="hover:text-yellow-300"
          href={
            "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/lonesume/brian_joseph_resume/main/brian_joseph_resume.pdf"
          }
          target="_blank"
        >
          Resume
        </a>
        <a className="hover:text-yellow-300" href="mailto:brian@brianjoseph.me">
          Contact
        </a>
      </div>
    </>
  );
}