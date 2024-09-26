
type ProjectProps = {
  project: string;
};

export default function Project( props : ProjectProps) {
  return (
    <div>
      <p>{props.project}</p>
    </div>
  );
}
