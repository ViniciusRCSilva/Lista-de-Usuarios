import { gql, useMutation, useQuery } from "@apollo/client";
import { TrashSimple, WarningCircle, X } from "@phosphor-icons/react";
import { toast } from "sonner";
import { client } from "../lib/apollo";
import * as Dialog from '@radix-ui/react-dialog';

type User = {
  id: string;
  name: string;
}

export const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

const DELETE_USER = gql`
  mutation($id: String!) {
    deleteUser(id: $id) {
      id
      name
    }
  }
`

export function UsersList() {
    const { data, loading } = useQuery<{ users: User[] }>(GET_USERS);
    const [deleteUser] = useMutation(DELETE_USER)

    async function handleDeleteUser(id: string) {
        await deleteUser({
            variables: {
                id,
            },
            update: (cache, {data: {deleteUser} }) => {
                const { users } = client.readQuery({ query: GET_USERS })

                cache.writeQuery({
                    query: GET_USERS,
                    data: {
                        users: users.filter((user: { id: string }) => user.id !== deleteUser.id)
                    }
                })
            }
        })
        toast.success("Usuário removido com sucesso!")
    }

    return(
        <>        
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <>          
                    {data?.users.length === 0 ? (
                        <p className="text-2xl">Não há usuários cadastrados na lista...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {data?.users.map(user => 
                            <div key={user.id} className="flex items-center justify-between text-2xl font-medium px-6 py-4 bg-slate-800 rounded-lg select-none overflow-hidden">
                                <span>{user.name}</span>
                                <Dialog.Root>
                                    <Dialog.Trigger>
                                        <TrashSimple
                                            className="text-red-600 cursor-pointer" 
                                        />
                                    </Dialog.Trigger>

                                    <Dialog.Portal>
                                        <Dialog.Overlay className='inset-0 fixed bg-black/50' />
                                        <Dialog.Content className='fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] md:rounded-md bg-slate-700 flex flex-col outline-none'>
                                            <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100 transition-colors'>
                                                <X className='size-5' />
                                            </Dialog.Close>

                                            <div className='flex flex-1 flex-col gap-3 p-5 items-center justify-center'>
                                                <WarningCircle className="text-red-600 w-20 h-20" />

                                                <p className='text-3xl leading-10 text-center text-slate-300'>
                                                    Você deseja <span className="text-red-600">apagar</span> o usuário 
                                                    <br/> 
                                                    "{user.name}" 
                                                    <br/> 
                                                    da sua lista?
                                                </p>
                                            </div>

                                            <button 
                                                type='button'
                                                className='group w-full bg-slate-800 py-4 text-center text-xl text-slate-300 outline-none font-medium'
                                                onClick={() => handleDeleteUser(user.id)}
                                            >
                                                Confirmar e <span className='text-red-600 group-hover:underline'>apagar usuário</span>.
                                            </button>
                                        </Dialog.Content>
                                    </Dialog.Portal>
                                </Dialog.Root>
                            </div>      
                        )}
                        </div>
                    )}
                </>
            )}
        </>
    )
}