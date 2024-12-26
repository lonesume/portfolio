import { useRouter } from "next/router";
import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";
import { details } from "~/utils/projects";
import Image from "next/image";
import { useMemo } from "react";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get `id` from the URL

  // Avoid rendering until `id` is available
  if (!id) {
    return <p>Loading...</p>; // Return a loading state or skeleton screen
  }

  const project = useMemo(
    () => details.filter((detail) => detail.id === id)[0]!,
    [details],
  );

  const renderProject = (): JSX.Element => {
    return (
      <Image
        src={project.imageUrl}
        alt={project.projectName}
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
        <div className="flex flex-row">
          <div className="w-2/3">
            <h1 className="text-4xl">Project: {project.projectName}</h1>
            <p>This is the project details page for {project.projectName}.</p>
          </div>
          <div className="w-1/3">{renderProject()}</div>
        </div>
      </BodyContainer>
    </>
  );
};

export default ProjectPage;
