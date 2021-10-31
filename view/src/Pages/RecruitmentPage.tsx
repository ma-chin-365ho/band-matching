import React, {useState} from 'react';
import { 
  Button,
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Typography,
} from '@material-ui/core';
import  {
  Checkbox,
  Grid,
  FormControlLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { PersonalProfile } from '../Models/PersonalProfile';
import axios from 'axios';

interface PersonalProfileSeach extends PersonalProfile {
  isUrlInputed   : boolean,
  keyword        : string,
}

const initPersonalProfileSeach : PersonalProfileSeach = 
{
  id            : 0,
  loginId       : "",
  name          : "",
  part          : 0,
  url           : "",
  genre         : 0,
  likeArtist    : "",
  isOnlineAllow : false,
  isHopeToJoin  : false,
  directionId   : 0,
  introduction  : "",
  isUrlInputed  : false,
  keyword       : "",
};

const PersonalProfileSeachField = (props : {setPersonalProfiles : any}) => {
  const [personalProfileSeach, setPersonalProfileSeach] = useState<PersonalProfileSeach>(initPersonalProfileSeach);

  const fetchPersonalProfile = async () => {
    await axios.get("http://localhost:3001/personal-profile/")
    .then(res => {
      props.setPersonalProfiles(res.data as PersonalProfile[]);
    })
  };

  const handleChangeLoginId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  loginId: event.target.value}));
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  name: event.target.value}));
  };

  const handleChangeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  url: event.target.value}));
  };

  const handleChangePart = (event: SelectChangeEvent) => {
    setPersonalProfileSeach((prev) => ({...prev,  part: Number(event.target.value)}));
  };

  const handleChangeGenre = (event: SelectChangeEvent) => {
    setPersonalProfileSeach((prev) => ({...prev,  genre: Number(event.target.value)}));
  };

  const handleChangeLikeArtist = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  likeArtist: event.target.value}));
  };

  const handleChangeActivityArea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  activityArea: event.target.value}));
  };

  const handleChangeActivityDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  activityDate: event.target.value}));
  };

  const handleChangeIsOnlineAllow = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  isOnlineAllow: event.target.checked}));
  };

  const handleChangeDirectionId = (event: SelectChangeEvent) => {
    setPersonalProfileSeach((prev) => ({...prev,  directionId: Number(event.target.value)}));
  };
  
  const handleChangeIsHopeToJoin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  isHopeToJoin: event.target.checked}));
  };

  const handleChangeIsUrlInputed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  isUrlInputed: event.target.checked}));
  };
  
  const handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  keyword: event.target.value}));
  };

  const handleClickSeachPerson = () => {
    fetchPersonalProfile();
  }

  return (
    <div className="PersonalProfileSeach">
      <TextField
        required
        label="Login ID"
        defaultValue=""
        value={personalProfileSeach.loginId}
        onChange={handleChangeLoginId}
        variant="filled"
      />
      <TextField
        required
        label="Name"
        defaultValue=""
        value={personalProfileSeach.name}
        onChange={handleChangeName}
        variant="filled"
      />
      <FormControl>
        <InputLabel>Part</InputLabel>
        <Select
          labelId="part"
          value={String(personalProfileSeach.part)}
          label="Part"
          onChange={handleChangePart}
        >
          <MenuItem value={0}>Vocal</MenuItem>
          <MenuItem value={1}>Guitar</MenuItem>
          <MenuItem value={2}>Bass</MenuItem>
          <MenuItem value={3}>Drum</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="URL"
        defaultValue=""
        value={personalProfileSeach.url}
        onChange={handleChangeUrl}
        variant="filled"
      />
      <FormControlLabel
        label="URL Inputed"
        control={
          <Checkbox
            checked={personalProfileSeach.isUrlInputed}
            onChange={handleChangeIsUrlInputed}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
      />
      <FormControl>
        <InputLabel>Genre</InputLabel>
        <Select
          labelId="genre"
          value={String(personalProfileSeach.genre)}
          label="Genre"
          onChange={handleChangeGenre}
        >
          <MenuItem value={0}>Rock</MenuItem>
          <MenuItem value={1}>Hiphop</MenuItem>
          <MenuItem value={2}>Jazz</MenuItem>
          <MenuItem value={3}>Acappella</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Like Artist"
        defaultValue=""
        value={personalProfileSeach.likeArtist}
        onChange={handleChangeLikeArtist}
        variant="filled"
      />
      <TextField
        label="ActivityArea"
        defaultValue=""
        value={personalProfileSeach.activityArea}
        onChange={handleChangeActivityArea}
        variant="filled"
      />
      <TextField
        label="ActivityDate"
        defaultValue=""
        value={personalProfileSeach.activityDate}
        onChange={handleChangeActivityDate}
        variant="filled"
      />
      <FormControlLabel
        label="Online OK"
        control={
          <Checkbox
            checked={personalProfileSeach.isOnlineAllow}
            onChange={handleChangeIsOnlineAllow}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
      />
      <FormControl>
        <InputLabel>Direction</InputLabel>
        <Select
          labelId="direction"
          value={String(personalProfileSeach.directionId)}
          label="Direction"
          onChange={handleChangeDirectionId}
        >
          <MenuItem value={0}>Pro</MenuItem>
          <MenuItem value={1}>Amateur</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        label="Hope To Join"
        control={
          <Checkbox
            checked={personalProfileSeach.isHopeToJoin}
            onChange={handleChangeIsHopeToJoin}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
      />
      <TextField
        label="Keyword"
        value={personalProfileSeach.keyword}
        onChange={handleChangeKeyword}
      />
      <Button onClick={handleClickSeachPerson}
      >
        検索
      </Button>
    </div>
  );  
};

const PersonalProfileDisp = (props : {personalProfile: PersonalProfile}) => {

  const partName = props.personalProfile.part;
  const genreName = props.personalProfile.genre;
  const directionName = props.personalProfile.directionId;

  const handleClickGood = () => {

  };

  return (
    <div className="BandProfileDisp">
      <Typography>loginId:{props.personalProfile.loginId}</Typography>
      <Typography>name:{props.personalProfile.name}</Typography>
      <Typography>part:{partName}</Typography>
      <Typography>URL:{props.personalProfile.url}</Typography>
      <Typography>Genre:{genreName}</Typography>
      <Typography>likeArtist:{props.personalProfile.likeArtist}</Typography>
      <Typography>ActivityArea: {props.personalProfile.activityArea}</Typography>
      <Typography>Activity Date: {props.personalProfile.activityDate}</Typography>
      <Typography>Online OK:{props.personalProfile.isOnlineAllow}</Typography>
      <Typography>Hope To Join:{props.personalProfile.isHopeToJoin}</Typography>
      <Typography>Direction:{directionName}</Typography>
      <Typography>Introduction:{props.personalProfile.introduction}</Typography>
      <Button onClick={handleClickGood}
      >
        いいね。
      </Button>
    </div>
  );
};

const RecruitmentPage = () => {
  const [personalProfiles, setPersonalProfiles] = useState<PersonalProfile[]>([]);  

  return (
    <div className="Recruitment">
      Recruitment
      <PersonalProfileSeachField setPersonalProfiles={setPersonalProfiles} />
      <Grid container spacing={2}>                
        {personalProfiles.map((p) => 
          <Grid item xs={3}>
            <PersonalProfileDisp personalProfile={p} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default RecruitmentPage;