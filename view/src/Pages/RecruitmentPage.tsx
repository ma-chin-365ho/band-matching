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

interface PersonalProfileSeach extends PersonalProfile {
  isUrlInputed   : boolean,
  keyword        : string,
}

interface PersonalProfileDispProps extends PersonalProfile {

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

const initPersonalProfileDispProps : PersonalProfileDispProps = 
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
};

const dummyPersonalProfileDispProps : PersonalProfileDispProps[] =[initPersonalProfileDispProps, initPersonalProfileDispProps, initPersonalProfileDispProps, initPersonalProfileDispProps, initPersonalProfileDispProps, initPersonalProfileDispProps, initPersonalProfileDispProps];

const PersonalProfileSeachField = () => {
  const [personalProfileSeach, setPersonalProfileSeach] = React.useState<PersonalProfileSeach>(initPersonalProfileSeach);

  const handleChangePart = (event: SelectChangeEvent) => {
    setPersonalProfileSeach((prev) => ({...prev,  part: Number(event.target.value)}));
  };

  const handleChangeGenre = (event: SelectChangeEvent) => {
    setPersonalProfileSeach((prev) => ({...prev,  genre: Number(event.target.value)}));
  };

  const handleChangeLikeArtist = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfileSeach((prev) => ({...prev,  likeArtist: event.target.value}));
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

  const handleClickSeachBand = () => {

  }

  return (
    <div className="PersonalProfileSeach">
      <TextField
        required
        label="Login ID"
        defaultValue=""
        variant="filled"
      />
      <TextField
        required
        label="Name"
        defaultValue=""
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
        onChange={handleChangeLikeArtist}
        variant="filled"
      />
      <TextField
        label="ActivityArea"
        defaultValue=""
        variant="filled"
      />
      <TextField
        label="ActivityDate"
        defaultValue=""
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
      <Button onClick={handleClickSeachBand}
      >
        検索
      </Button>
    </div>
  );  
};

const PersonalProfileDisp = (props : {data: PersonalProfileDispProps}) => {

  const partName = props.data.part;
  const genreName = props.data.genre;
  const directionName = props.data.directionId;

  const handleClickGood = () => {

  };

  return (
    <div className="BandProfileDisp">
      <Typography>loginId:{props.data.loginId}</Typography>
      <Typography>name:{props.data.name}</Typography>
      <Typography>part:{partName}</Typography>
      <Typography>URL:{props.data.url}</Typography>
      <Typography>Genre:{genreName}</Typography>
      <Typography>likeArtist:{props.data.likeArtist}</Typography>
      <Typography>ActivityArea: {props.data.activityArea}</Typography>
      <Typography>Activity Date: {props.data.activityDate}</Typography>
      <Typography>Online OK:{props.data.isOnlineAllow}</Typography>
      <Typography>Hope To Join:{props.data.isHopeToJoin}</Typography>
      <Typography>Direction:{directionName}</Typography>
      <Typography>Introduction:{props.data.introduction}</Typography>
      <Button onClick={handleClickGood}
      >
        いいね。
      </Button>
    </div>
  );
};

const PersonalProfileDisps = () => {

  let personalProfileDisps :any = [];
  dummyPersonalProfileDispProps.forEach(
      (b : PersonalProfileDispProps) => {
          personalProfileDisps.push(
              <Grid item xs={3}>
                  <PersonalProfileDisp data={b} />
              </Grid>
          );
      }
  );

  return (
      <div className="PersonalProfileDisps">
          <Grid container spacing={2}>                
              {personalProfileDisps}
          </Grid>
      </div>
  );  
};

const RecruitmentPage = () => {
  return (
    <div className="Recruitment">
      Recruitment
      <PersonalProfileSeachField />
      <PersonalProfileDisps />      
    </div>
  );
}

export default RecruitmentPage;