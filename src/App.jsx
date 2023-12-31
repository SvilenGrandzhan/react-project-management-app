import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((previousState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: previousState.selectedProjectId,
        id: taskId,
      };
      return {
        ...previousState,
        tasks: [newTask, ...previousState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((previousState) => {
      return { ...previousState, tasks: previousState.tasks.filter((task) => task.id !== id) };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((previousState) => {
      return { ...previousState, selectedProjectId: undefined, projects: previousState.projects.filter((project) => project.id !== previousState.selectedProjectId) };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((previousState) => {
      return { ...previousState, selectedProjectId: id };
    });
  };

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
        selectedProjectId: undefined,
        projects: [...previousState.projects, newProject],
      };
    });
  };

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      onAddTask={handleAddTask}
      onDelete={handleDeleteProject}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProjectId} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onSelectProject={handleSelectProject}
        onAddProject={handleAddProjectId}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
