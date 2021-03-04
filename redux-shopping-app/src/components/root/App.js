import React from 'react'
import { Container } from 'reactstrap'
import Navi from '../navi/Navi'
import Dasboard from './Dasboard';
function App() {
  return (
   <Container>
    <Navi/>
    <Dasboard/>

   </Container>
  );
}

export default App;
