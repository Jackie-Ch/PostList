import { Routes, Route } from 'react-router-dom';

import { AboutMe } from './components/AboutMe/AboutMe';
import { Postlist } from './components/Postlist/Postlist';
import { User } from './components/User/User';
import { Layout } from './components/Layout/Layout';
import { NotFoundPage } from './components/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/postlist" element={<Layout />}>
          <Route index element={<Postlist />} />
          <Route path="/postlist/aboutme" element={<AboutMe />} />
          <Route path="/postlist/users/:id" element={<User />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
