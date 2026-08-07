
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './css/index.css'
import router from './App.jsx'
import { store } from './Store.jsx'
import { Provider } from 'react-redux'
import { ThemeProvider } from './Components/ThemeContext.jsx'
import { extendedApiUserSlice } from './Features/Users/UserSlice.js'
import { extendedApiSlice } from './Features/Posts/postSlice.js'
import { StrictMode } from 'react'

store.dispatch(extendedApiUserSlice.endpoints.getUsers.initiate())
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate())

createRoot(document.getElementById('root')).render(
<StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
</StrictMode>
)
