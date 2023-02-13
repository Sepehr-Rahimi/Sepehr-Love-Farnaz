import Header from "./Components/Header";
import Router from "./Router";

const App = () => {
  return (
    <div className="bg-slate-300 min-h-screen w-full flex flex-col items-center">
      <Header />
      <Router />
    </div>
  );
};

export default App;
