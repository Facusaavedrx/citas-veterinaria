import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App () {
  return (
    <div className='container m-auto'>
      <Header />
      <div>
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
