import './App.css';
import MuiAccordion from './components/MuiAccordion';
import MuiAutocomplete from './components/MuiAutocomplete';
import MuiButtons from './components/MuiButtons';
import MuiCard from './components/MuiCard';
import MuiCheckBox from './components/MuiCheckBox';
import MuiLayout from './components/MuiLayout';
import MuiRadioButton from './components/MuiRadioButton';
import MuiRating from './components/MuiRating';
import MuiSelect from './components/MuiSelect';
import MuiSwitch from './components/MuiSwitch';
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
      <MuiCheckBox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutocomplete />
      <MuiLayout />
      <MuiCard />
      <MuiAccordion />
    </div>
  );
}

export default App;
