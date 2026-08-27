import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Demo from './pages/Demo'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/proyectos/:id"
          element={<ProjectDetail />}
        />

        <Route
          path="/demos/:id"
          element={<Demo />}
        />

      </Routes>
    </BrowserRouter>
  )
}