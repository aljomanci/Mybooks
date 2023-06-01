import Home from './components/Home/Home' ;
import CartContent from './components/CartContent/CartContent';
import { BrowserRouter, Routes , Route, } from 'react-router-dom';
import DataProvider from './components/context/DataContext';
import Error404 from './Error404' ;

function App ()  {
  return (
    <DataProvider>
    <BrowserRouter>
  
    <Routes>
      <Route exact path='/'element={<Home/>}> </Route>
      <Route exact path='/cart' element={<CartContent/>}/>
      <Route path='*' element={<Error404/>}></Route>
    </Routes>
  
    </BrowserRouter>
    </DataProvider>
  );
}
 
export default App;

