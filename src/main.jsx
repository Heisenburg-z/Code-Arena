// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App'
// import './index.css'

// const rootElement = document.getElementById('root');
// if (rootElement) {
//   createRoot(rootElement).render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );
// } else {
//   console.error("Root element not found");
// }
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)