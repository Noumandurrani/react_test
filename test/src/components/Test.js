function Button(props) {
  return <button style={props.style}>{props.name.text}</button>;
}

function Test() {
  let obj = {
    text: "Login",
  };
  return (
    <div>
      <h1>this is test component</h1>
      
      <Button name={obj} style={{ color: "red" }}></Button>
    </div>
  );
}
export default Test;
