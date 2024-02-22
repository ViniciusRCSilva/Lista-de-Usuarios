import { NewUserForm } from "./components/NewUserForm";
import react from './assets/react.svg'
import graphql from './assets/graphql.svg'
import { UsersList } from "./components/UsersList";


function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 p-5 space-y-6">  
      <div className="flex items-center gap-2 select-none">
        <img src={react} alt="react_icon" width={40} />
        <p>+</p>
        <img src={graphql} alt="graphql_icon" width={40} />
      </div>
      <h1 className="text-6xl font-semibold">Lista de Usuários</h1>

      <NewUserForm/>

      <div className='h-px bg-slate-700' />

      <UsersList />
    </div>
  )
}

export default App
