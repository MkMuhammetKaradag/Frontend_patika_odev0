import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import HistoryBmi from "./pages/HistoryBmi";

const App = () => {
  return (
    <div className="flex flex-col  items-center">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/history" element={<HistoryBmi />} />
        </Route>
      </Routes>
      {/* <Header></Header>
      <Home></Home> */}
    </div>
  );
};

export default App;
