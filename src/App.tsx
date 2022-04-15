import './App.css';
import MuiButtons from './components/MuiButtons';
import MuiSelect from './components/MuiSelect';
import MuiTextfield from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButtons />
      <MuiTextfield />
      <MuiSelect />
    </div>
  );
}

export default App;
