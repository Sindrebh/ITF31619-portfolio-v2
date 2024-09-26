import './App.css'
import Header from './Header'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import { useState, useEffect } from 'react';
import { ofetch } from "ofetch";


function App() {

  const student = {
    name: "Sindre Horn",
    degree: "Bachelor IT",
    points: 180,
    email: "sindrbh@hiof.no",
    experiences: [
      { name: "Python" },
      { name: "Java" },
      { name: "HTML/CSS" },
      { name: "Git/Github" },
      { name: "Finance and customer support tools: Microsoft Dynamics 365, Salesforce CRM" }
    ]
  };
  const [projects, setProjects] = useState([
    { id: '1', name: "Portfolio project", category: "Portfolio" },
    { id: '2', name: "Harbor simulator", category: "Academic" }
  ]);

  // Fetch projects with useEffect to get data from the server, 200 ok
  const fetchProjects = async () => {
    console.log("fetching data");
  
    const response = await ofetch('http://localhost:3000/projects', {
      onResponse({ request, response }) {
        console.log('[fetch response]', request, response.status);
      },
    });
  
    setProjects(response);
  };
  
  useEffect(() => {
    fetchProjects();
  }, []);
  const handleProjectMutation = (action: 'add' | 'remove', project: { id: string, name: string, category: string }) => {
    if (action === 'add') {
      setProjects(prevProjects => [...prevProjects, project]);
    } else if (action === 'remove') {
      setProjects(prevProjects => prevProjects.filter(p => p.id !== project.id));
    }
  };

  return (
    <main>
      <Header student={student} />
      <Experiences experiences={student.experiences} />

      <Projects
         projects={projects} 
         handleProjectMutation={handleProjectMutation} 
        />
      <Contact email={student.email} />
    </main>
  )
}

export default App




