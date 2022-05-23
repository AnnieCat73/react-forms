import { useState } from 'react'



export default function Form() {
  const [username, setUsername] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    alert('test')

    const response = await fetch('/api/form', {
      body: JSON.stringify({
        username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    //const result = await response.json()
  }

  return <form onSubmit={handleSubmit}>
    Username:
    <input
      type="text"
      value={username}
      onChange={(e) => {
        setUsername(e.target.value)
      }}
    />
  </form>
}