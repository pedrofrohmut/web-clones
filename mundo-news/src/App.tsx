import { BrowserRouter, Routes, Route } from "react-router"

import LayoutHeader from "/src/layout/LayoutHeader"
import LayoutFooter from "/src/layout/LayoutFooter"

import HomePage from "/src/pages/home/HomePage"
import CategoryPage from "/src/pages/category/CategoryPage"
import ArticlePage from "/src/pages/article/ArticlePage"
import NotFoundPage from "/src/pages/not-found/NotFoundPage"

const App = () => {
  return (
    <BrowserRouter>
      <LayoutHeader />

      <div className="layout-content">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/article/:topic-slug/:title-slug" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <LayoutFooter />
    </BrowserRouter>
  )
}

export default App
