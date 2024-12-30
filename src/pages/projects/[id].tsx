import { useRouter } from "next/router";
import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";
import { details } from "~/utils/projects";
import Image from "next/image";
import { useMemo } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get `id` from the URL

  const project = useMemo(() => {
    if (!id) return null; // Return `null` if `id` is not available
    return details.find((detail) => detail.id === id);
  }, [id]);

  // Avoid rendering until `id` is available
  if (!id) {
    return <p>Loading...</p>; // Return a loading state or skeleton screen
  }

  const renderProject = (): JSX.Element => {
    return (
      <Image
        src={project?.imageUrl ?? ""}
        alt={project?.projectName ?? ""}
        objectFit="cover"
        width={1024} // Use numbers for width and height
        height={1024}
      />
    );
  };

  return (
    <>
      <Navbar />
      <BodyContainer>
        <div className="flex flex-col px-4 md:flex-row">
          <div className="w-full space-y-6 md:w-2/3 md:space-y-10">
            <Link href="/projects" className="flex items-center space-x-2">
              <FaArrowLeft />
              <span>Go back to projects</span>
            </Link>

            <h1 className="text-3xl md:text-4xl">
              Project: {project?.projectName}
            </h1>
            <p className="text-lg md:pr-10 md:text-xl">
              {project?.description}
            </p>

            <a target="_blank" className="underline" href={project?.githubUrl}>
              See the code!
            </a>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-1/3">{renderProject()}</div>
        </div>
      </BodyContainer>
    </>
  );
};

export default ProjectPage;
