import "./App.css";
import LikedMovies from "./pages/LikedMovies";
import MovieFinder from "./pages/MovieApp";
import store from "./redux/store";

import { Provider } from "react-redux";
import { Routes, Route } from "react-router";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieFinder />} />
          {/* <Route path="/watch-list" element={<LikedMovies />} /> */}
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
