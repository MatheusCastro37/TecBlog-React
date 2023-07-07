import Header from './components/Header';
import ButtonHeader from './components/ButtonHeader';
import CardContainer from './components/Card';

import './app.css';

function App() {

  return (
    <div className='container'>
      <Header>
        <nav>
          <ButtonHeader title="MENU" />
          <ButtonHeader title="JOGOS" />
          <ButtonHeader title="CELULARES" />
          <ButtonHeader title="INFORMATICA" />
          <ButtonHeader title="ELETRONICOS" />
        </nav>
      </Header>
      <CardContainer />
      <CardContainer />
    </div>
  )
}

export default App