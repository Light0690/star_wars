import {BrowserRouter,Routes, Route } from 'react-router-dom';

import routesConfig from '@routes/routesConfig';
import { REPO_NAME } from '@constants/repo';

import Header from '@components/Header';

import styles from './App.module.css';

const App = () =>{
  return(
    <>
    <BrowserRouter basename={`/${REPO_NAME}/`}>
      <div className={styles.wrapper}>
        <Header />
        
        <Routes>
          {routesConfig.map((route,index) => 
            <Route 
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.component/>} 
            />
          )}
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;