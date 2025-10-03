import emojipedia from './emojipedia';
import './App.css'
import CreateEntry from './components/create-entry';

function App() {

  return (
    <>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className='dictionary'>
        {emojipedia.map(CreateEntry)}
      </dl>
    </>
  )
}

export default App;
