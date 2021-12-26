import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import AddContact from './screens/AddContact'
import EditContact from './screens/EditContact'

import Home from './screens/Home'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-contact' element={<AddContact />} />
        <Route path='/edit-contact' element={<EditContact />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
