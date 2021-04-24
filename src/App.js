import { BrowserRouter } from "react-router-dom";
import MenuBar from "./components/nav/MenuBar";
function App() {
  return (
    <BrowserRouter>
      <MenuBar />
    </BrowserRouter>
  );
}

export default App;
