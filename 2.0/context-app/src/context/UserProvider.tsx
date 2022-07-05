import { UserContext } from "./UserContext"

export const UserProvider = ({ children }: any) => {
    const user = {
        id: 123,
        name: 'rafael',
        email: 'r@m.com'
    }

  return (
    <UserContext.Provider  value={{user}}>
        { children }
    </UserContext.Provider>
  )
}
