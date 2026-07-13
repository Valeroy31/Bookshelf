
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'
import { store } from './Store.jsx'
import { Provider } from 'react-redux'
import { ThemeProvider } from './Components/ThemeContext.jsx'
import { fetchUsers } from './Features/Users/UserSlice.js'
import { fetchPosts } from './Features/Posts/postSlice.js'

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
 <App />
      </ThemeProvider>
    </Provider>
   
    </BrowserRouter>
    
  </StrictMode>,
)
