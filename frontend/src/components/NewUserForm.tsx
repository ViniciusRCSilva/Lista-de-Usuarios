import { gql, useMutation } from "@apollo/client"
import { FormEvent, useEffect, useState } from "react"
import { GET_USERS } from "./UsersList"
import { client } from "../lib/apollo"
import { toast } from 'sonner'

const CREATE_USER = gql`
    mutation($name: String!) {
        createUser(name: $name) {
            id
            name
        }
    }
`

export function NewUserForm() {
    const [name, setName] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [createUser] = useMutation(CREATE_USER)

    async function handleCreateUser(event: FormEvent) {
        event.preventDefault()

        await createUser({
            variables: {
                name,
            },
            update: (cache, {data: {createUser} }) => {
                const { users } = client.readQuery({ query: GET_USERS })

                cache.writeQuery({
                    query: GET_USERS,
                    data: {
                        users: [
                            ...users,
                            createUser,
                        ]
                    }
                })
            }
        })
        toast.success("Usuário adicionado com sucesso!")

        setName('')
    }

    function handleDisable() {
        name.length > 0 ? setDisabled(false) : setDisabled(true)
    }

    useEffect(() => {
        handleDisable()
        console.log(disabled)
    })

    return(
      <form onSubmit={handleCreateUser} className="w-full">
        <input 
            type="text" 
            placeholder="Inserir usuário..."
            value={name} 
            onChange={e => setName(e.target.value)} 
            className="w-3/4 bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none" 
        />

        <button 
            type="submit" 
            disabled={disabled}
            className="w-1/4 px-5 py-4 text-3xl bg-white text-slate-900 rounded-lg font-medium opacity-100 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed hover:scale-105 transition-all"
        >
            Adicionar
        </button>
      </form>  
    )
}