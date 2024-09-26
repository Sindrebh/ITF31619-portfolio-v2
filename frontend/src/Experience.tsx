type ExperienceItemProps = {
    description: string;
};
  
export default function Experience( props : ExperienceItemProps) {
return (
    <div>
    <p>{props.description}</p>
    </div>
);
}
  