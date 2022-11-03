import React from "react";
import { Profile, DisplayMovies, AppBarCustom } from "./AppComponent";

function App() {
  return (
      <div className="App">
          <AppBarCustom />
          <Profile />
          <DisplayMovies />
      </div>
  );
}

export default App;