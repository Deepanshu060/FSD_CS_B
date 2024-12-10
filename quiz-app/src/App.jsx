import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Counter from "./components/Counter"

const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<h1>Login Page</h1>}></Route>
        <Route path="/logout" element={<h1>Logout Page</h1>}></Route>
        <Route path="/signup" element={<h1>Signup page</h1>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/*" element={<h1>No page Available</h1>}></Route>




      </Routes>
    </div>
  )
}
export {App}