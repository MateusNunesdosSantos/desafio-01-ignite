import { NewTodo } from "./Components/NewTodo"
import { Header } from "./Components/Header"
import { ListTodo } from "./Components/ListTodo"

import './global.css'
import { TodoProvider } from "./context/TodoProvider"

function App() {

  return (
    <TodoProvider>
      <Header />
      <div className="container">
        <NewTodo />
        <ListTodo />
      </div>
    </TodoProvider>
  )
}

export default App
