import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:courseId" element={<CourseDetail />} />
      </Route>
    </Routes>
  )
}
