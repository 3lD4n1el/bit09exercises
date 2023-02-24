import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

export const Ex03 = () => {
  const [users, setUsers] = useState(null)
  const [rows, setRows] = useState(null)
  useEffect(() => {
    getUsers()
  },[])

  useEffect(() =>{
    if (users){
      getRows()
    }
  },[users])
    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        setUsers(await res.json());
      } catch (error) {
        
      } finally {
  
      }
  };
  const getRows = () =>{
    const arr = users.map((user) => { 
    return <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.phone}</td>
      </tr>
    })
    setRows(arr)
  }
  return (
    <div>
      <h2>Directorio</h2>
      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
      </div>
  )
}
