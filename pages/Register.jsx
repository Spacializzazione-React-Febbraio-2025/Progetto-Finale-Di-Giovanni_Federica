import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { supabase } = useAuth()

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (!error) navigate('/dashboard')
    else alert(error.message)
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Registrati</h2>
      <input className="block border p-2 my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="block border p-2 my-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2" onClick={handleRegister}>Registrati</button>
    </div>
  )
}

export default Register