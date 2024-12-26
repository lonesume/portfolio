import { useRouter } from "next/router";
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
    <div>
      <h1>Project: {id}</h1>
      <p>This is the project details page for {id}.</p>
    </div>
  );
};

export default ProjectPage;
