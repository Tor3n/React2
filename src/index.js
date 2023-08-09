import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
  clearForageF as clearF
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import { Children } from "react";
import { action as destroyAction } from "./routes/destroy";
import EditContact, {
  action as editAction,
} from "./routes/edit";
import Index from "./routes";

/*
  Tutorial from
  https://reactrouter.com/en/6.14.2/start/tutorial#url-search-params-and-get-submissions 
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
 

    children:[
      {
        errorElement: <ErrorPage/>,
        children: [
          {
            /*Note the { index:true } instead of { path: "" }.
            That tells the router to match and render 
            this route when the user is at the parent 
            route's exact path, so there are no other 
            child routes to render in the <Outlet>. */            
           index: true, 
           element: <Index />},
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "clear",
            action: clearF,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
        ],
      },
      
    ],

  },

  //this way it is going to be a complitely separate page
  //{
  //  path: "contacts/:contactId",
  //  element: <Contact />,
  //},
]);

/*
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);