import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./app/App"
import { setupStore } from "@src/app/providers/store/store"
import { Provider } from "react-redux"
import 'app/styles/index.scss'

const store = setupStore();


render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
