import CustomButton from "./CustomButton";

export default function App1() {
  //   function handleClick(abc) {
  //     console.log("Button Clicked");
  //     console.log("abc", abc);
  //   }

  const sayHii = (e) => {
    console.log("e", e);
  };

  function sayHello() {
    console.log("Heeeeeeelllooo");
  }

  return (
    <>
      {/* <button onClick={handleClick}>Click Me</button> */}

      {/* <button
        onClick={function (abc) {
          console.log("Button Clicked");
          console.log("abc", abc);
        }}>Click Me</button> */}

      <button onClick={(e) => sayHii(e)}>Click Me!!!!</button>

      <br />
      <br />
      <CustomButton onClick={sayHello} />
    </>
  );
}
