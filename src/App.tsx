import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center my-2">
        <div className="w-[98vw]">
          <Outlet />
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default App;
