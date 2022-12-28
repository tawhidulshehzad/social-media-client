import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div style={{ width: "1280px" }} className="m-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
