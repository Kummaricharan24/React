import Appbut from "./Appbut";
import Appname from "./Appname";
function App() {
  return (
    <div>
      <h1 className="text-center my-3">Todo App</h1>

      <Appname  />
      <Appbut item="Buter Milk" date="16-12-2005" />
      <Appbut item="I love Cherry" date="16-12-2005" />
      <Appbut item="Market" date="16-12-2005" />
      
    </div>
  );
}
export default App;