import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import { Routing } from '../routing/Routing';

function App() {
  return (
    <div className="App">
      <Container>
        <Routing />
      </Container>
    </div>
  );
}

export default App;
