import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
       <Header></Header>
       <div className='md:flex'>
       <Blogs></Blogs>
       <Bookmarks></Bookmarks>
       </div>
    </>
  )
}

export default App



