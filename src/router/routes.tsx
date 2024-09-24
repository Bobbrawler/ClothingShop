import { type ReactElement } from "react";
import NotFoundPage from "../pages/NotFound";
import HomePage from "../components/HomeMenuPage";
import ClothesPage from "../components/ClothInfoPage";
import SalePage from "../components/SalePage";
import BasketPage from "../components/BasketPage";

export const enum ApplicationPaths {
  HOME = "/",
  SALE = "/sale",
  BASKET = "/basket",
  CLOTHES_INFO = "/clothes/:itemId",
  NOT_FOUND = "*",
}

export interface IApplicationRoute {
  id: string;
  path: ApplicationPaths;
  element: ReactElement;
}

const applicationRoutes: IApplicationRoute[] = [
  {
    id: "notFound",
    path: ApplicationPaths.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    id: "home",
    path: ApplicationPaths.HOME,
    element: <HomePage />,
  },
  {
    id: "basket",
    path: ApplicationPaths.BASKET,
    element: <BasketPage />,
  },
  {
    id: "sale",
    path: ApplicationPaths.SALE,
    element: <SalePage />,
  },
  {
    id: "clothesInfo",
    path: ApplicationPaths.CLOTHES_INFO,
    element: <ClothesPage />,
  },
];

export default applicationRoutes;
