import { Route, Routes } from "react-router-dom";
import { Verify } from "../core/Verify";
import { PublicRoute } from "./PublicRoute";
import { AppLayout } from "../components/layout/AppLayout";
import { Home } from "../core/Home";
import { DrinkDetail } from "../core/DrinkDetail";
import { Login } from "../core/login";
import { ProtectedRoute } from "./ProtectedRoute";
import { Profile } from "../core/Profile";
import { B2BOrder } from "../core/B2BOrder";
import { NotFound } from "../core/NotFound";

export function AppRoute(){

    return (
    <Routes>

      
      <Route path="/verify" element={<Verify/>} />


      <Route element={<PublicRoute/>}>
        <Route element={<AppLayout/>}>
          <Route index element={<Home/>} />
          <Route path="drink/:id" element={<DrinkDetail/>} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Route>

      
      <Route element={<ProtectedRoute/>}>
        <Route element={<AppLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="b2b-orders" element={<B2BOrder/>} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound/>} />

    </Routes>
  );
}
