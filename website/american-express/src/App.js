import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        {/* <Route path='/' element={<Register/>}/> */}
      </Routes>
     </BrowserRouter>
  );
}

export default App;
