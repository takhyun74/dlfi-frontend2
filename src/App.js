// @ts-nocheck
import { Routes, Route, Navigate } from "react-router-dom";

// styles for this kit
import './App.css'; 

// import "assets/css/bootstrap.min.css";
// import "assets/scss/now-ui-kit.scss?v=1.5.0";
// import "assets/scss/dlgi-style.scss";
// import "assets/demo/demo.css?v=1.5.0";
// import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// font for this


import MainPage from "pages/Main";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" exact={true} element={<MainPage />} />
         {/* <Route path="/login" component={LoginPage} /> */}

        <Route path="/" element={ <Navigate to="/home" /> } />
      </Routes>
    </>
  );
};

export default App;
