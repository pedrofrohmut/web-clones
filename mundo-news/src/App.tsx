import { Routes, Route } from "react-router"

import LayoutHeader from "/src/layout/LayoutHeader"
import LayoutFooter from "/src/layout/LayoutFooter"

import HomePage from "/src/pages/home/HomePage"

const App = () => {
  return (
    <>
      <LayoutHeader />

      <Routes>
        <Route index element={<HomePage />} />
      </Routes>

      <LayoutFooter />
    </>
  )
}

export default App
