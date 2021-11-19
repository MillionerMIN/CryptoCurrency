import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import { Routing } from '../routing/Routing';
import { Footer } from '../footer/Footer';
import { MobHeader } from '../header/MobHeader';

function App() {
  return (
    <div className="App">
      <MobHeader />
      <Container>
        <Routing />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
