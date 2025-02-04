
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentRoutes from './routes/Router';


function App() {
  return (
    <BrowserRouter>
      <ContentRoutes/>
    </BrowserRouter>
  );
}

export default App;
