import { RouterProvider } from "react-router"
import { ToastContainer } from "react-toastify"
import router from "./router"

function App() {
  return (
    <>
      <ToastContainer 
        autoClose={3000}
      />
      <RouterProvider router={router}/>
    </>
  )
}

export default App