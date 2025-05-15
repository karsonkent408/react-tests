import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, ProjectDetail, Projects } from './pages'
import Layout from './components/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
