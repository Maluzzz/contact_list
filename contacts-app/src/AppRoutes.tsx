import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import { PrivateRoute, PublicRoute } from './route'

import { FormScreen, Home, HistoryScreen, LoginScreen, SignUpScreen } from './screens'

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/add-contact'
          element={
            <PrivateRoute>
              <FormScreen />
            </PrivateRoute>
          }
        />
        <Route
          path='/edit-contact'
          element={
            <PrivateRoute>
              <FormScreen />
            </PrivateRoute>
          }
        />
        <Route
          path='/history/*'
          element={
            <PrivateRoute>
              <HistoryScreen />
            </PrivateRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <PublicRoute>
              <SignUpScreen />
            </PublicRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}
export default AppRouter
