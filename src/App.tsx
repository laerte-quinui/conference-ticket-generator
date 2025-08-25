import { useActionData } from 'react-router'
import Logo from './assets/images/logo-full.svg'
import Background from './components/Background'
import Form from './components/Form'
import Header from './components/Header'
import Ticket from './components/Ticket'

function App() {
  const actionData = useActionData()
  const getData = (name: string) => {
    if (!actionData) return null
    return actionData.get(name)
  }

  return (
    <div>
      <div className="container mx-auto h-screen px-4">
        <img src={Logo} className="mx-auto mt-8 mb-8 lg:mb-16" />
        <Header
          userData={{ name: getData('userName'), email: getData('email') }}
        />
        {!actionData && <Form />}
        {actionData && (
          <Ticket
            id={getData('id')}
            avatar={getData('avatar')}
            userName={getData('userName')}
            github={getData('github')}
          />
        )}
      </div>
      <Background />
    </div>
  )
}

export default App
