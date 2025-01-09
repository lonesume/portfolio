import Link from "next/link";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

enum Page {
  Home = "/",
  About = "/about",
  Projects = "/projects",
}

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const highlightLinkBasedOnPage = useCallback(
    (linkPath: string) => {
      if (router.pathname === linkPath) {
        return "text-yellow-300";
      }
      if (linkPath !== Page.Home && router.pathname.startsWith(linkPath)) {
        return "text-yellow-300";
      }
      return "";
    },
    [router.pathname],
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative mx-4 my-5 md:mx-10">
      {/* Desktop Navigation */}
      <div className="hidden items-center space-x-10 md:flex">
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
          href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/lonesume/brian_joseph_resume/main/brian_joseph_resume.pdf"
          target="_blank"
        >
          Resume
        </a>
        <a
          className="hover:text-yellow-300"
          href="mailto:brian@brianjoseph.me"
          target="_blank"
        >
          Contact
        </a>
        <div className="flex space-x-4">
          <a href="https://github.com/lonesume" target="_blank">
            <FaGithub className="cursor-pointer hover:text-yellow-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/brianjoseph1758/"
            target="_blank"
          >
            <FaLinkedin className="cursor-pointer hover:text-yellow-300" />
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center justify-between md:hidden">
        <Link
          className={`hover:text-yellow-300 ${highlightLinkBasedOnPage(Page.Home)}`}
          href={Page.Home}
        >
          Brian Joseph
        </Link>
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-lg bg-black p-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              className={`hover:text-yellow-300 ${highlightLinkBasedOnPage(Page.About)}`}
              href={Page.About}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              className={`hover:text-yellow-300 ${highlightLinkBasedOnPage(Page.Projects)}`}
              href={Page.Projects}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <a
              className="hover:text-yellow-300"
              href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/lonesume/brian_joseph_resume/main/brian_joseph_resume.pdf"
              target="_blank"
              onClick={toggleMenu}
            >
              Resume
            </a>
            <a
              className="hover:text-yellow-300"
              href="mailto:brian@brianjoseph.me"
              target="_blank"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/lonesume" target="_blank">
                <FaGithub className="cursor-pointer hover:text-yellow-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/brianjoseph1758/"
                target="_blank"
              >
                <FaLinkedin className="cursor-pointer hover:text-yellow-300" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
