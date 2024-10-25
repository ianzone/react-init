import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

const app = document.createElement('div');
app.id = 'app';
document.getElementsByTagName('body')[0].appendChild(app);
ReactDOM.createRoot(app).render(
  <StrictMode>
    <h1>Hello</h1>
  </StrictMode>,
);
