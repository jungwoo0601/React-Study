import Counter from "@components/Counter";
import Header from "@components/Header";

function App() {
  console.log("App 호출됨");
  return (
    <div id="app">
      <Header />
      <Counter />
    </div>
  );
}

export default App;
