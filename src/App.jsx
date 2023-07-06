import Header from './components/Header';
import ButtonHeader from './components/ButtonHeader';

import './app.css'

function App() {

  return (
    <>
      <Header>
        <nav>
          <ButtonHeader title="MENU" />
          <ButtonHeader title="JOGOS" />
          <ButtonHeader title="CELULARES" />
          <ButtonHeader title="INFORMATICA" />
          <ButtonHeader title="ELETRONICOS" />
        </nav>
      </Header>
    </>
  )
}

export default App