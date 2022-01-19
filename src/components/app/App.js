import './App.scss'
import { CustomTable } from "../customTable/CustomTable";
import { Input } from "reactstrap";
import { useState } from "react";
import users from "../../users.json";


export const App = () => {

  const [search, setSearch] = useState('')
  const [searchingUsers, setSearchingUsers] = useState(users)

  const handleChange = (e) => {
    setSearch(e.target.value)
    if (e.target.value) {
      setSearchingUsers(users.filter( item => item.username.toLowerCase().includes(e.target.value)))
    } else {
      setSearchingUsers(users)
    }
  }

  return (
    <div className='layout'>
      <h3 className='layout__title'>Search by username</h3>
      <Input
        placeholder="username"
        onChange={handleChange}
        value={search}
      />
      <CustomTable users={searchingUsers}/>
    </div>
  )
}