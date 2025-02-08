import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Tasks, Display, Create, Edit } from "@pages";

import "@styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="tasks" element={<Tasks />}>
        <Route index element={<Display />} />
        <Route path="create" element={<Create />} />
        <Route path="edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
