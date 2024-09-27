type Experience = {
    name: string;
};

type Project = {
    name: string;
};

type StudentProps = {
    name: string;
    degree: string;
    points: number;
    email: string;
    experiences: Experience[];
    projects: Project[];
};

export default function Student(props: StudentProps) {
  return (
    <div className="student-container">
            <p>{props.name}</p>
            <p>{props.degree}</p>
            <p>{props.points}</p>
            <p>{props.email}</p>

            <h3>Experiences:</h3>
            <ul>
                {props.experiences.map((exp, index) => (
                    <li key={index}>{exp.name}</li>
                ))}
            </ul>

            <h3>Projects:</h3>
            <ul>
                {props.projects.map((proj, index) => (
                    <li key={index}>{proj.name}</li>
                ))}
            </ul>
      </div>
  );
}
