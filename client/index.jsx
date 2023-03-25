import { createRoot } from 'react-dom/client';
import './style.css';
import {BrowserRouter} from "react-router-dom"
import App from './components/App.jsx';

const appRoot = document.getElementById('app');

const root = createRoot(appRoot);

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>

);