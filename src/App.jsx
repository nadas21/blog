import { Fakshin } from "./components/Fakshin"
import { Header } from "./components/Hader"
import { Head } from "./components/Head"
import { List } from "./components/List"
import { Loading } from "./components/Loading"

function App() {


  return (
    <>
    <Header/>
    <Head/> 
    <main>
    <List/>
    <Loading/>  
    <Fakshin/>
    </main>
    </>
  )
}

export default App
