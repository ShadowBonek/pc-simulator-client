import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "components_admin/pages/Login";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "react-query";
// *Fonts
import "fonts/fonts.css";
import styled from "styled-components";
import Admin from "components_admin/Admin";
import Error404 from "components_admin/pages/Error404";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "redux/actions/appAction";
import Simulator from "components_simulator/Simulator";
import Menu from "components_simulator/organisms/Menu";
import { StoreInterface } from "interfaces/storeTemplate";
import Home from "components/pages/Home";

const AppSt = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000;
  .toast {
    width: auto;
    height: 3rem;
    background: #ffffff;
    font-family: "Roboto 300";
    font-size: 1rem;
    user-select: none;
  }
`;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      //       refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});
function App() {
  const app = useSelector((store: StoreInterface) => store.app);
  const [cookieConsent, setCookieConsent] = useState(localStorage.getItem("cookieConsent"));
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("token") !== "") {
      dispatch(setLogin(`${localStorage.getItem("token")}`, `${localStorage.getItem("id")}`));
    }
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppSt id="app">
          <Toaster
            toastOptions={{
              className: "toast",
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulator/*" element={<Simulator />} />

            <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={<Admin />} />

            <Route path="/*" element={<Error404 />} />
          </Routes>
          <Menu left={app.menu} />
        </AppSt>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
