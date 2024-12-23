import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"
import "./app.scss";
import AppRoutes from "./appRoutes";
import Store from "shared/store/store";

type StateType = {
  store: Store;
};

const store = new Store();
 
export const Context = createContext<StateType>({
  store
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context.Provider value={{
      store
    }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Context.Provider>
  </StrictMode>,
)
