import { type ReactElement } from "react";
import NotFoundPage from "../pages/NotFound";
import HomePage from "../pages/Home";
import ClothesPage from "../pages/Clothes";

export const enum PagesBasePaths {
  CLOTHES_INFO = "/clothes/"
}

export const enum ApplicationPaths {
  HOME = "/",
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
    element: <HomePage />,
  },
  {
    id: "clothesInfo",
    path: ApplicationPaths.CLOTHES_INFO,
    element: <ClothesPage />
  }
];

export default applicationRoutes;
