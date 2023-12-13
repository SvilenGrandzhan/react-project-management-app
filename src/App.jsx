import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleCancelAddProject = () => {
    setProjectsState((previousState) => {
      return { ...previousState, selectedProjectId: undefined };
    });
  };

  const handleAddProjectId = () => {
    setProjectsState((previousState) => {
      return { ...previousState, selectedProjectId: null };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((previousState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...previousState,
        // later will projectId to selectedProjectId
        selectedProjectId: undefined,
        projects: [...previousState.projects, newProject],
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProjectId} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onAddProject={handleAddProjectId}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
