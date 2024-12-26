import { useRouter } from "next/router";
import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";
// import { useEffect, useState } from "react";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get `id` from the URL

  // Avoid rendering until `id` is available
  if (!id) {
    return <p>Loading...</p>; // Return a loading state or skeleton screen
  }

  // Render the actual content
  return (
    <>
      <Navbar />
      <BodyContainer>
        <div>
          <h1>Project: {id}</h1>
          <p>This is the project details page for {id}.</p>
        </div>
      </BodyContainer>
    </>
  );
};

export default ProjectPage;
