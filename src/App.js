import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from "./components/Skills"
import Profile from "./components/Profile"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="profile" element={<Profile />} />
      <Route path="contact" element={<Contact />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
