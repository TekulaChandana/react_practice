function Hello() {
  let myName = "Chandana";
  let number = 222;
  let fullName = () => {
    return "Tekula Chandana";
  };
  return (
    <p>
      Welcome to React.This is {fullName()} and my roll no is {number}
    </p>
  );
}

export default Hello;
