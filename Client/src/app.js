import React, { Suspense } from "react";
import MainNav from "./components/navigation/mainNav";
import Spinner from "react-bootstrap/Spinner";
import Routes from "./routes/index";

const App = () => {
  return (
    <div>
      <MainNav />
      <Suspense
        className="mx-auto"
        fallback={
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        }
      >
        <Routes />
      </Suspense>
    </div>
  );
};

export default App;
