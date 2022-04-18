import './App.css';
import MuiAccordion from './components/MuiAccordion';
import MuiAutocomplete from './components/MuiAutocomplete';
import MuiBreadcrumb from './components/MuiBreadcrumb';
import MuiButtons from './components/MuiButtons';
import MuiCard from './components/MuiCard';
import MuiCheckBox from './components/MuiCheckBox';
import MuiDrawer from './components/MuiDrawer';
import MuiImagelist from './components/MuiImagelist';
import MuiLayout from './components/MuiLayout';
import MuiLink from './components/MuiLink';
import MuiNavbar from './components/MuiNavbar';
import MuiRadioButton from './components/MuiRadioButton';
import MuiRating from './components/MuiRating';
import MuiSelect from './components/MuiSelect';
import MuiSpeedDail from './components/MuiSpeedDail';
import MuiSwitch from './components/MuiSwitch';
import MuiTextfield from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';
import MuiAvatar from './MuiAvatar';
import MuiBottomNavigation from './MuiBottomNavigation';

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
      <MuiImagelist />
      <MuiNavbar />
      <MuiLink /> 
      <MuiBreadcrumb />
      <MuiDrawer />
      <MuiSpeedDail />
      <MuiBottomNavigation />
      <MuiAvatar />
    </div>
  );
}

export default App;
