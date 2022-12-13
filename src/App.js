// import "./App.scss";
// import "./index.scss";
import DarkModeButton from "./components/darkModeButton/DarkModeButton";
import Game from "./components/tictactoes/Game";

function App() {
  return (
    <div className=" dark:bg-black w-screen h-screen">
      <DarkModeButton></DarkModeButton>
      <Game></Game>
    </div>
  );
}

export default App;
