import Calculator from "./Calculator";
import { questions } from "./Questions";

function App() {
  return (
    <Calculator category ={questions.category} />
  );
}

export default App
