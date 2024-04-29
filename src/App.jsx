
import { Route, Router, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Navbar/Navbar'
import Review_list from './Components/Review_list/Review_list'
import Edit_data from './Components/Edit_Review/Edit_review'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path='/review_table' element={<Review_list/>} ></Route>
        <Route path='/Edit' element={<Edit_data/>} ></Route>

      </Routes >
      {/* <Home/> */}

    </>
  )
}

export default App
