import './App.css';
import { Block, Button, Hero } from './components';

function App() {
  return (
    <div className='App'>
      <Hero color='danger' title='This is hero title' subtitle='This is hero subtitle'></Hero>
      <Block>First block</Block>
      <Block color='success'>Second block</Block>
      <Block color='danger'>Third block</Block>
      <Button color='primary'>Save changes</Button>
      <Button color='success'>Save and continue</Button>
      <Button color='danger'>Cancel</Button>
    </div>
  );
}

export default App;
