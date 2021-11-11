import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import { Routing } from '../routing/Routing';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routing />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
