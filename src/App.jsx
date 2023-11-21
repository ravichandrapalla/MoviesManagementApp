import "./App.css";
import MovieFinder from "./pages/MovieApp";
import store from "./redux/store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">{<MovieFinder />}</div>
    </Provider>
  );
}

export default App;
