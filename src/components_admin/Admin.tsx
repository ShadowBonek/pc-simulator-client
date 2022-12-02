import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Error404 from "components_admin/pages/Error404";
import Navigation from "components_admin/molecules/Navigation";

import AddComponent from "components_admin/organisms/AddComponent";
import UpdateComponent from "components_admin/organisms/UpdateComponent";
import Components from "./pages/Components";
import DeleteComponent from "./organisms/DeleteComponent";
import Navbar from "./organisms/NavBar";

const AdminSt = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 14vw calc(100% - 14vw);

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 4vw calc(100% - 4vw);
  }
`;

const Admin = () => {
  //   const app = useSelector((store: StoreInterface) => store.app);
  return (
    <AdminSt>
      {/* <Navigation /> */}
      <Navbar />
      <Routes>
        <Route path="/components/:component" element={<Components />} />
        <Route path="/add-component/:component" element={<AddComponent />} />
        <Route path="/update-component/:component" element={<UpdateComponent />} />
        <Route path="/delete-component" element={<DeleteComponent />} />

        <Route path="/*" element={<Error404 />} />
      </Routes>
    </AdminSt>
  );
};

export default Admin;
