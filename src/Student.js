function Student(props) {
  return (
    <div>
      <h2>Student Information</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

export default Student;