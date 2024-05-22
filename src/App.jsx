import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout/Layout";

import Home from "pages/Home/Home";
import { ROUTE_PATH } from "constants/routest";
import Teachers from "pages/Teachers/Teachers";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTE_PATH.home} element={<Home />} />
        <Route path={ROUTE_PATH.teachers} element={<Teachers />} />
      </Routes>
    </Layout>
  );
}

export default App;
