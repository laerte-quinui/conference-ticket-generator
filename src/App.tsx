import Logo from './assets/images/logo-full.svg'
import Background from './components/Background'
import Form from './components/Form'
import Header from './components/Header'

function App() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <img src={Logo} className="mx-auto mt-8 mb-16" />
        <Header />
        <Form />
      </div>
      <Background />
    </div>
  )
}

export default App
