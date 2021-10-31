import React, {useState, useEffect} from 'react';
import { 
  Button,
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
 } from '@material-ui/core';
import  {
  Checkbox,
  FormControlLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { PersonalProfile, initPersonalProfile } from '../Models/PersonalProfile';
import axios from 'axios';

const PersonalProfilePage = () => 
{
  const [personalProfile, setPersonalProfile] = useState<PersonalProfile>(initPersonalProfile);

  const fetchPersonalProfile = async () => {
    await axios.get("http://localhost:3001/personal-profile/")
    .then(res => {
      const resPersonalProfile : PersonalProfile[] = res.data as PersonalProfile[];
      setPersonalProfile(resPersonalProfile[0]);
    })
  };

  useEffect(() => {
    fetchPersonalProfile();
  }, []);

  const handleChangeLoginId = (event :React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfile((prev) => ({...prev,  loginId: event.target.value}));
  };

  const handleChangeName = (event :React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfile((prev) => ({...prev,  name: event.target.value}));
  };

  const handleChangeUrl = (event :React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfile((prev) => ({...prev,  url: event.target.value}));
  };

  const handleChangePart = (event: SelectChangeEvent) => {
    setPersonalProfile((prev) => ({...prev,  part: Number(event.target.value)}));
  };

  const handleChangeGenre = (event: SelectChangeEvent) => {
    setPersonalProfile((prev) => ({...prev,  genre: Number(event.target.value)}));
  };

  const handleChangeLikeArtist = (event :React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfile((prev) => ({...prev,  likeArtist: event.target.value}));
  };

  const handleChangeActivityArea = (event :React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfile((prev) => ({...prev,  activityArea: event.target.value}));
  };

  const handleChangeActivityDate = (event :React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfile((prev) => ({...prev,  activityDate: event.target.value}));
  };

  const handleChangeIsOnlineAllow = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfile((prev) => ({...prev,  isOnlineAllow: event.target.checked}));
  };

  const handleChangeDirectionId = (event: SelectChangeEvent) => {
    setPersonalProfile((prev) => ({...prev,  directionId: Number(event.target.value)}));
  };

  const handleChangeIntroduction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfile((prev) => ({...prev,  introduction: event.target.value}));
  };
  
  const handleChangeIsHopeToJoin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalProfile((prev) => ({...prev,  isHopeToJoin: event.target.checked}));
  };

  const handleClickPersonalProfileUpdate = async () => {
    await axios.post("http://localhost:3001/personal-profile/", { ...personalProfile })
      .then(res => {
        console.log(res);
        console.log(res.data);
    });
  };

  return (
    <div className="PersonalProfile">
      <TextField
        required
        label="Login ID"
        defaultValue=""
        value={personalProfile.loginId}
        onChange={handleChangeLoginId}
        variant="filled"
      />
      <TextField
        required
        label="Name"
        defaultValue=""
        value={personalProfile.name}
        onChange={handleChangeName}
        variant="filled"
      />
      <FormControl>
        <InputLabel>Part</InputLabel>
        <Select
          labelId="part"
          value={String(personalProfile.part)}
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
        value={personalProfile.url}
        onChange={handleChangeUrl}
        variant="filled"
      />
      <FormControl>
        <InputLabel>Genre</InputLabel>
        <Select
          labelId="genre"
          value={String(personalProfile.genre)}
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
        value={personalProfile.likeArtist}
        onChange={handleChangeLikeArtist}
        variant="filled"
      />
      <TextField
        label="ActivityArea"
        defaultValue=""
        value={personalProfile.activityArea}
        onChange={handleChangeActivityArea}
        variant="filled"
      />
      <TextField
        label="ActivityDate"
        defaultValue=""
        value={personalProfile.activityDate}
        onChange={handleChangeActivityDate}
        variant="filled"
      />
      <FormControlLabel
        label="Online OK"
        control={
          <Checkbox
            checked={personalProfile.isOnlineAllow}
            onChange={handleChangeIsOnlineAllow}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
      />
      <FormControl>
        <InputLabel>Direction</InputLabel>
        <Select
          labelId="direction"
          value={String(personalProfile.directionId)}
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
            checked={personalProfile.isHopeToJoin}
            onChange={handleChangeIsHopeToJoin}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
      />
      <TextField
        label="Introduciton"
        multiline
        maxRows={10}
        value={personalProfile.introduction}
        onChange={handleChangeIntroduction}
      />   
      <Button onClick={handleClickPersonalProfileUpdate}
      >
        Update
      </Button>
    </div>
  );
};

export default PersonalProfilePage;
