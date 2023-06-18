function Pist(props) {
  return (
    <>
      {props.Pist.map((item) => {
        return <li>{item.name}</li>;
      })}
    </>
  );
  // let newMapArr = props.Pist.map((item) => {
  //   return item;
  // });
  // return props.Pist.map((item) => {
  //   return item;
  // });
  // return <h2>{props.Pist}</h2>;
}
export default Pist;
