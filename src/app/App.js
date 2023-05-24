import { Routes, Route } from "react-router-dom";

import { AboutMe } from "./components/AboutMe/AboutMe";
import { Postlist } from "./components/Postlist/Postlist";
import { User } from "./components/User/User";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Postlist />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/users/:id" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
