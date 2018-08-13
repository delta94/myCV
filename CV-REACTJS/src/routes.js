import React from "react";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CreateCV from './pages/CreateCV';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/create-cv",
    exact: false,
    main: () => <CreateCV />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
]
export default routes;
