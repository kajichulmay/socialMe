import './App.css';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Headlessui from './components/layout/Headlessui';
import TestTailwind from './components/TestTailwind';

function App() {
  return (
    <>
      <Header />
      <Headlessui />
      <Content>test2</Content>
    </>
  );
}

export default App;
