import LoginPage from "./Pages/LoginPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
  <LoginPage />
  //  <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<LoginPage/>}/>
  //   </Routes>
  //  </BrowserRouter>
  );
}

export default App;
