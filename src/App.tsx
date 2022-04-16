import './App.css';
import MuiButtons from './components/MuiButtons';
import MuiRadioButton from './components/MuiRadioButton';
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
      <MuiRadioButton/>
    </div>
  );
}

export default App;
