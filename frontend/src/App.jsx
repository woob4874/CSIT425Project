import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from './components/LoginButton.jsx'
import { LogoutButton } from './components/LogoutButton.jsx'
import { Profile } from './components/Profile.jsx'
import './App.css'

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) return <p>Loading…</p>

  return (
    <main>
      <h1>Task Management</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </main>
  )
}

export default App
