import { FC, useState } from "react";
import NavBar from "./NavBar";

const Home: FC = () => {
  //const [counter, setCounter] = useState(0);

  return (
    <div>
      <NavBar></NavBar>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
