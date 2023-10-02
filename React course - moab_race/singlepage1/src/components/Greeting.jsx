export default function Greeting(props) {
  const hi = "Hi, how are you ";

  return (
    <p style={{ color: props.mystyle }}>
      {hi}
      {props.name}?
    </p>
  );
}

/*export default function Greeting({ name, mystyle }) {
  const hi = "Hi, how are you ";

  return (
    <p style={{ color: mystyle }}>
      {hi} {name}?
    </p>
  );
}*/
