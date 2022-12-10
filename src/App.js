import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import "./App.css";
import routes from "./routes/mainRoute";
import store from "./redux/store";


function App() {
  return (
    <main className="font-poppins ">
      <Provider store={store} >
        <RouterProvider router={routes} />
      </Provider>
    </main>
  );
}

export default App;
