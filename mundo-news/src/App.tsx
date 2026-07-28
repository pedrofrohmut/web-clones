import { BrowserRouter, Routes, Route } from "react-router"

import LayoutHeader from "/src/layout/LayoutHeader"
import LayoutFooter from "/src/layout/LayoutFooter"

import HomePage from "/src/pages/home/HomePage"
import CategoryPage from "/src/pages/category/CategoryPage"

const App = () => {
  return (
    <BrowserRouter>
      <LayoutHeader />

      <div className="layout-content">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
        </Routes>
      </div>

      <LayoutFooter />
    </BrowserRouter>
  )
}

export default App
