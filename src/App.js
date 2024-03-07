import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  return (
    <main className="w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center p-4 gap-y-2">
        <Header></Header>
        <Board></Board>
      </div>
    </main>
  );
}

export default App;
