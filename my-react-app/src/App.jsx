
import Home from "./components/Home.jsx"
import Footer from "./components/Footer"
import Main from "./components/Main"
import background from "./assets/background.webp"


function App() {
 

  return (
    <>
   <div className="bg-cover bg-center ..." style="background-image: url(`${background}`)">
   <div className ="flex flex-col gap-4 border-2  ml-80 mr-80 mt-40">
     <div className="border-4 p-2"><Home /></div>
     <div className="border-4 p-10"><Main /></div>
     <div className="border-4 p-10"><Footer /></div>

     </div>
     </div> 
   
   
     
    </>
  )
}

export default App
