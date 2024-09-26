import React, { useState, FormEvent } from 'react';
import Project from './Project';

type Project = {
  id: string;
  name: string;
  category: string;
};

type ProjectProps = {
  handleProjectMutation: (action: 'add' | 'remove', project: Project) => void;
  projects: Project[];
};

export default function Projects(props: React.PropsWithChildren<ProjectProps>) {
  const { projects = [], handleProjectMutation, children } = props;
  const [nameValid, setNameValid] = useState(false);
  const [nameIsDirty, setNameIsDirty] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

   const groupByCategory = (projects: Project[]) => {
    return projects.reduce((acc: { [key: string]: Project[] }, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    }, {});
  };

  const groupedProjects = groupByCategory(projects);

  const validateNameInput = (name: string) => {
    if (nameIsTouched && nameIsDirty) {
      setNameValid(name.trim().length > 2);
    }
  };

  const addProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !category) return;

    const newProject: Project = { id: crypto.randomUUID(), name, category };

    handleProjectMutation('add', newProject);
    reset();
  };

  const reset = () => {
    setName('');
    setCategory('');
    setNameIsDirty(false);
    setNameIsTouched(false);
    setNameValid(false);
  };

  const removeProject = (project: Project) => {
    handleProjectMutation('remove', project);
  };

  const updateName = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement | null;
    if (!input) return;
    setNameIsDirty(true);
    setName(input.value);
  };

  const updateCategory = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement | null;
    if (!input) return;
    setCategory(input.value);
  };

  const isInvalidName = !nameValid && nameIsDirty;

  return (
    <>
      <section className="list">
        <h3>Projects</h3>
        {children}
        {Object.keys(groupedProjects).length > 0 ? (
          Object.keys(groupedProjects).map((category) => (
            <div key={category}>
              <h4>{category} Projects</h4>
              <ul>
                {groupedProjects[category].map((project) => (
                  <li key={project.id} className="project-card">
                    <header>
                      <h5>{project.name}</h5>
                      <button
                        onClick={() => removeProject(project)}
                        type="button"
                        className="error"
                      >
                        Remove project
                      </button>
                    </header>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No Projects available</p>
        )}
      </section>

      <section className="projects form-create">
        <h3>Add a New Project</h3>
        <form onSubmit={addProject}>
          <div className="name field">
            <label htmlFor="name">
              Name of project: <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={!isInvalidName ? 'success' : ''}
              required
              placeholder="Project name"
              onChange={updateName}
              onFocus={() => setNameIsTouched(true)}
              onBlur={() => validateNameInput(name)}
              value={name}
            />
            {isInvalidName && (
              <p className="field-error error">
                The name must be minimum 3 characters
              </p>
            )}
          </div>

          <div className="category field">
            <label htmlFor="category">
              Category: <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              name="category"
              id="category"
              required
              placeholder="Portfolio/Work/Academic"
              onChange={updateCategory}
              value={category}
            />
          </div>

          <div>
            <button type="submit" className="success">
              Add Project
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
