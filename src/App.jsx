import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/homepage'
import ContactPage from './pages/contactPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/contactPage" element={<ContactPage />}/>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
