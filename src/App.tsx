import './App.css';
import MuiAccordion from './components/MuiAccordion';
import MuiAlert from './components/MuiAlert';
import MuiAutocomplete from './components/MuiAutocomplete';
import MuiBreadcrumb from './components/MuiBreadcrumb';
import MuiButtons from './components/MuiButtons';
import MuiCard from './components/MuiCard';
import MuiCheckBox from './components/MuiCheckBox';
import MuiChip from './components/MuiChip';
import MuiDialog from './components/MuiDialog';
import MuiDrawer from './components/MuiDrawer';
import MuiImagelist from './components/MuiImagelist';
import MuiLayout from './components/MuiLayout';
import MuiLink from './components/MuiLink';
import MuiLoadingbutton from './components/MuiLoadingbutton';
import MuiNavbar from './components/MuiNavbar';
import MuiProgress from './components/MuiProgress';
import MuiRadioButton from './components/MuiRadioButton';
import MuiRating from './components/MuiRating';
import MuiSelect from './components/MuiSelect';
import MuiSkeleton from './components/MuiSkeleton';
import MuiSnackbar from './components/MuiSnackbar';
import MuiSpeedDail from './components/MuiSpeedDail';
import MuiSwitch from './components/MuiSwitch';
import MuiTable from './components/MuiTable';
import MuiTextfield from './components/MuiTextField';
import MuiTooltip from './components/MuiTooltip';
import { MuiTypography } from './components/MuiTypography';
import MuiAvatar from './MuiAvatar';
import MuiBadge from './MuiBadge';
import MuiBottomNavigation from './MuiBottomNavigation';
import MuiList from './MuiList';
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from'@mui/lab/AdapterDateFns'
import MuiDateRange from './components/MuiDateRange';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <MuiTypography />
        <MuiButtons />
        <MuiTextfield />
        <MuiSelect />
        <MuiRadioButton />
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
        <MuiBadge />
        <MuiList />
        <MuiChip />
        <MuiTooltip />
        <MuiTable />
        <MuiAlert />
        <MuiSnackbar />
        <MuiDialog />
        <MuiProgress />
        <MuiSkeleton />
        <MuiLoadingbutton />
        <MuiDateRange />
      </div>
    </LocalizationProvider>
  );
}

export default App;
