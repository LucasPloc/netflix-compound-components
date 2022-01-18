import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, SignUp, SignIn } from "./pages";
import { RequireAuth, RedirectUser } from "./helpers/routes";
import { useAuthListener } from "./hooks";

const App = () => {
  const { user } = useAuthListener();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route
          path={ROUTES.BROWSE}
          element={
            <RequireAuth user={user} navigate={ROUTES.SIGN_IN}>
              <Browse user={user} />
            </RequireAuth>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <RedirectUser user={user} navigate={ROUTES.BROWSE}>
              <SignUp />
            </RedirectUser>
          }
        />
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <RedirectUser user={user} navigate={ROUTES.BROWSE}>
              <SignIn />
            </RedirectUser>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
