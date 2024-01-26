// import {BrowserRouter, Routes , Route } from "react-router-dom"
// import Layout from "./Layout"
// import Home from "./About"
// import About from "./Home"
// import Contact from "./Contact"
// export default function App() {
//   return (
//    <BrowserRouter>
//    <Routes>
//     <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}   />
//       <Route path="about" element={<About/>}/>
//       <Route path="contact" element={<Contact/>}/>

//     </Route>
//    </Routes>
//    </BrowserRouter>
//   )
// }

// import React from 'react'
// import Counter from './Counter'

// export default function App() {
//   return (
//     <div><Counter/></div>
//   )
// }
import React from 'react'
// import Effect from './Effect'
import Reducer from './Reducer'


export default function App() {
  


  return (
    <div>
     {/* <Effect/> */}
     <Reducer/>
    </div>
  )
}
