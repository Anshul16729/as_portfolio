import { Home, About, Resume, Portfolio,Services, Contact } from "./routes";

export const path = { Home: "/", About: "/about",Resume:"/resume" ,Portfolio:"/portfolio",Services:"/services",Contact:"/contact"};

export const routing = [
  {
    path: path.Home,
    component: Home,
    exact: true,
  },
  {
    path: path.About,
    component: About,
    exact: false,
  },
  {
    path: path.Resume,
    component: Resume,
    exact: false,
  },
  {
    path: path.Portfolio,
    component: Portfolio,
    exact: false,
  },
  {
    path: path.Services,
    component: Services,
    exact: false,
  },
  {
    path: path.Contact,
    component: Contact,
    exact: false,
  },
];
