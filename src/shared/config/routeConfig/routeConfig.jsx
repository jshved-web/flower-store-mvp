import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage'
import { AboutPage } from "pages/AboutPage"
import { DeliveryPage } from "pages/DeliveryPage"
import { CartPage } from "pages/CartPage"

const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  NOT_FOUND: 'not_found',
  DELIVERY: 'delivery',
  CART: 'cart'
};

export const RoutePath = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.DELIVERY]: '/delivery',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.DELIVERY]: {
    path: RoutePath.delivery,
    element: <DeliveryPage />,
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <CartPage />,
  },
};


