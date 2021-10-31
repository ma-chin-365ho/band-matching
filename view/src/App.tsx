import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  AppBar,
  Toolbar,
  Typography,
 } from '@material-ui/core'
 import { makeStyles } from '@material-ui/core/styles';
 import MenuIcon from '@material-ui/icons/Menu';
 import  {
  Box,
  Tabs,
  Tab,
} from '@mui/material';
import PersonalProfilePage from './Pages/PersonalProfilePage';
import BandProfilePage from './Pages/BandProfilePage';
import MessagePage from './Pages/MessagePage';
import HopeToJoinPage from './Pages/HopeToJoinPage';
import RecruitmentPage from './Pages/RecruitmentPage';
import LoginPage from './Pages/LoginPage';
import { BandProfile } from './Models/BandProfile';
import axios from 'axios';


const pagePersonalProfile = 0;
const pageMessage = 1;
const pageHopeToJoin = 2;
const pageLogin = 3;
const pageBandProfile = 4;
const pageRecruitment = 5;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props : {page : number, setPage : React.Dispatch<React.SetStateAction<number>>}) => {
  const classes = useStyles();
  
  const handleChangePageTab = (event: React.SyntheticEvent, newValue: number) => {
    props.setPage(newValue);
  };

  const handleClickMessage = async () => {
    // await axios.get("http://localhost:3001/band-profile/")
    // .then(res => {
      // context provider
      // res.data as BandProfile[];
      
    // })
    
  };
  
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Band Matching
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={props.page} onChange={handleChangePageTab} aria-label="basic tabs example">
        　<Tab label="Recruitment" value={pageRecruitment} />
          <Tab label="Message" value={pageMessage} onClick={handleClickMessage}/>
          <Tab label="HopeToJoin" value={pageHopeToJoin} />
          <Tab label="Profile" value={pagePersonalProfile} />
          <Tab label="Band" value={pageBandProfile} />
          <Tab label="Login" value={pageLogin} />
        </Tabs>
      </Box>
    </>
  );
}

const Pages = (props : {page : number}) => {

  switch (props.page) {
    case pagePersonalProfile:
      return(<PersonalProfilePage />);
    case pageBandProfile:
      return(<BandProfilePage />);  
    case pageMessage:
      return(<MessagePage />);
    case pageHopeToJoin:
      return(<HopeToJoinPage />);
    case pageLogin:
      return(<LoginPage />);
    case pageRecruitment:
      return(<RecruitmentPage />);
    default:
      return(<LoginPage />);      
  } 
}

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      <Pages page={page} />
    </div>
  );
}

export default App;
