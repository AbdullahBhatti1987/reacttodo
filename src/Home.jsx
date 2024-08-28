
// import TodoList from "./components/TodoList"
import TodoApp from "./components/TodoApp"

function Home() {


  return (
    <>
   
     <h1 className="text-3xl text-center py-5 font-bold drop-shadow underline">My Todo App</h1>
     {/* <TodoList  className={"overflowy-scroll"}/> */}
     <TodoApp  className={"overflowy-scroll"}/>
    </>
  )
}

export default Home