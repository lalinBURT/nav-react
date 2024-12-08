import { React, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import "normalize.css"
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  /* 
    React.StrictMode 包裹用于严格模式
    Suspense 包裹用于懒加载
    Provider  包裹用于使用redux/toolkit
    HashRouter 包裹用于开启哈希router
    */  
  // <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  // </React.StrictMode>
);
