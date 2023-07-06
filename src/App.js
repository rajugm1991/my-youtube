import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import GlobalSearchResults from './components/GlobalSearchResults';
import Head from './components/Head';
import MainContainer from './components/MainContainer';
import VideoInfo from './components/VideoInfo';
import store from './utils/store';

function App() {

  const router=createBrowserRouter([
    {
      path :'/',
      element :  <><Head/>  <Body/></>,
      children : [
         {
            path :'/',
            element : <MainContainer/>
         },
         {
          path :'watch',
          element : <VideoInfo/>
         },
         {
          path :'demo',
          element :<><Demo/> <Demo2/></>
         },
         {
          path :'searchResult',
          element :<GlobalSearchResults/>
         }
      ]
    },
  ])

  

  return (
    <div className="App">
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
