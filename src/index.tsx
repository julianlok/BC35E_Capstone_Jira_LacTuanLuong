import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./assets/scss/style.scss";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryBrowserRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./redux/config";
import { ToastProvider } from "./components/Toast";
import Loading from "./components/Loading/Loading";

const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const HomeTemplate = lazy(
  () => import("./templates/HomeTemplate/HomeTemplate")
);
const Project = lazy(() => import("./pages/Home/Project"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Users = lazy(() => import("./pages/Users/Users"));
const AddPropject = lazy(() => import("./pages/Project/AddProject"));
const ProjectDetail = lazy(() => import("./pages/Project/ProjectDetail"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const history: any = createBrowserHistory();

root.render(
  <Provider store={store}>
    <ToastProvider>
      <DndProvider backend={HTML5Backend}>
        <HistoryBrowserRouter history={history}>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen bg-lite">
                <Loading
                  text1="L"
                  duration={1000}
                  text2="1"
                  colors="bg-yellow-300"
                />
                <Loading
                  text1="O"
                  duration={1300}
                  text2="2"
                  colors="bg-green-300"
                />
                <Loading
                  text1="A"
                  duration={2000}
                  text2="3"
                  colors="bg-pink-300"
                />
                <Loading text1="D" duration={3000} />
                <Loading text1="I" duration={1800} />
                <Loading text1="N" duration={2500} />
                <Loading text1="G" duration={800} />
              </div>
            }
          >
            <Routes>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="" element={<HomeTemplate />}>
                <Route index element={<Project />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="add-project" element={<AddPropject />}></Route>
                <Route path="project-detail">
                  <Route path=":id" element={<ProjectDetail />}>
                    <Route path=":taskId" element={<ProjectDetail />}></Route>
                  </Route>
                </Route>
                <Route path="user" element={<Users />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </Suspense>
        </HistoryBrowserRouter>
      </DndProvider>
    </ToastProvider>
  </Provider>
);
