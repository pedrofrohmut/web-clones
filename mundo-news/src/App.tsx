import { Routes, Route } from "react-router"

import Header from "/src/layout/Header"

import HomePage from "/src/pages/home/HomePage"

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
