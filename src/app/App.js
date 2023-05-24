import { Routes, Route } from "react-router-dom";

import { AboutMe } from "./components/AboutMe/AboutMe";
import { Postlist } from "./components/Postlist/Postlist";
import { User } from "./components/User/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Postlist />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
