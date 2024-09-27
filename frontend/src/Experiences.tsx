import Experience from './Experience';      

type Experience = {
    name: string;
  };
  
  type ExperienceProps = {
    experiences: Experience[];
  };    

  export default function Experiences(props : ExperienceProps) {
    return (
      <section className="experience-list">
        <div>
          <h1>Experiences</h1>
          {props.experiences.length > 0 ? (
            props.experiences.map((experience, index) => (
              <Experience key={index} description={experience.name} />
            ))
          ) : (
            <p>No experiences</p> // shows the message only if i have no experiences in App.tsx
          )}
        </div>
      </section>
    );
  }
