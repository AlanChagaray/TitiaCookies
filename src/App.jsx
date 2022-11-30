import AppLogin from './component/AppLogin';
import AppAbout from './component/AppAbout';
import AppContainer from './component/AppContainer';
import AppProduct from './component/AppProduct';
import AppFooter from './component/AppFooter';
import AppAlbum from './component/AppAlbum';
import AppIcons from './component/AppIcons';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

function App() {

  
  return (
    <main className=" h-screen text-gray-600 ">
        <BrowserRouter>
            <ul  className="bg-gray-400 grid grid-cols-4   text-white  p-4 ">
                <li><Link className=" hover:text-black  "  to='/'>Home</Link></li>
                <li>
                <select className=" text-white bg-gray-400 appearance-none hover:text-black">
                <option value=''>Categoria</option>
                    <option className="bg-gray-200 text-gray-700 p-6" value='Opcion1'>Opcion 1</option>
                    <option className="bg-gray-200 text-gray-700 p-6" value='Opcion2'>Opcion 2</option>
                    <option className="bg-gray-200 text-gray-700 p-6" value='Opcion3'>Opcion 3</option>
                </select>
                  </li>
                <li><Link className=" hover:text-black  " to='/About' >About</Link></li>
                <li><Link className=" hover:text-black hover:ease-in   " to='/Login' >Login</Link> </li>
            </ul>
       
        <hr></hr>
      { /*<div className="float-left px-2 mt-10">
        <AppContainer/>
  </div> */}   

       <Routes>
            <Route path='/'  />
            <Route path='/Login' element={<AppLogin/>} />
            <Route path='/About' element={<AppAbout/>} />
        </Routes>
        </BrowserRouter>
        
        <AppIcons />

        
           <AppAlbum/>
        <hr></hr>
        <div>
        <h1 className="text-center pt-9  text-3xl">Productos Destacados</h1>
        <div className="grid grid-cols-4 gap-10 mt-5">
        <AppProduct/>
        <AppProduct/>
        <AppProduct/>
        <AppProduct/>
        </div>
        </div>
        
        <AppFooter/>
       </main>
  );
}

export default App
