import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:id" element={<User />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter> */}
    </>
  )
}

export default App
