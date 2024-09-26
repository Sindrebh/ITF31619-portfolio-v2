type Student = {
  name: string;
  degree: string;
  points: number;
  email: string;
};

type HeaderProps = {
  student: Student;
};

export default function Header(props: HeaderProps) {
  return (
    <div>
      <h1>{props.student.name}</h1>
      <p>{props.student.degree}</p>
      <p>{props.student.points} points</p>
    </div>
  );
}
