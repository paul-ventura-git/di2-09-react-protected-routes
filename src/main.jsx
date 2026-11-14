import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { mi_store } from './store/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mi_store}>
      <App />
    </Provider>
  </StrictMode>,
)
