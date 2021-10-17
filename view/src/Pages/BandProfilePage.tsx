import React, {useState} from 'react';
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
import { BandProfile, initBandProfile } from '../Models/BandProfile';
import axios from 'axios';

const BandProfileRegister = () => {
    const [bandProfile, setBandProfile] = React.useState<BandProfile>(initBandProfile);

    const handleChangeOverview = (event: any) => {
      setBandProfile((prev) => ({...prev,  overview: event.target.value}));
    };
    
    const handleChangeLeaderId = (event: any) => {
      setBandProfile((prev) => ({...prev,  leaderId: event.target.value}));
    };
    
    const handleChangeMemberId = (event: any) => {
      setBandProfile((prev) => ({...prev,  memberId : event.target.value}));
    };
    
    const handleChangeStatus = (event: SelectChangeEvent) => {
      setBandProfile((prev) => ({...prev,  status: Number(event.target.value)}));
    };
  
    const handleChangeActivityArea = (event: any) => {
      setBandProfile((prev) => ({...prev,  activityArea : event.target.value}));
    };
    
    const handleChangeURL = (event: any) => {
      setBandProfile((prev) => ({...prev,  url : event.target.value}));
    };

    const handleChangeActivityDate = (event: any) => {
      setBandProfile((prev) => ({...prev,  memberId : event.target.value}));
    };
    
    const handleChangeGenre = (event: SelectChangeEvent) => {
      setBandProfile((prev) => ({...prev,  genre: Number(event.target.value)}));
    };

    const handleChangeRecruitmentPart = (event: SelectChangeEvent) => {
      setBandProfile((prev) => ({...prev,  recruitmentPart: Number(event.target.value)}));
    };
  
    const handleChangeIsOnlineAllow = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBandProfile((prev) => ({...prev,  isOnlineAllow: event.target.checked}));
    };
  
    const handleChangeDirectionId = (event: SelectChangeEvent) => {
      setBandProfile((prev) => ({...prev,  directionId: Number(event.target.value)}));
    };

    const handleChangeRuleLowerAge = (event: any) => {
      setBandProfile((prev) => ({...prev,  ruleLowerAge : event.target.value}));
    };
  
    const handleChangeRuleUpperAge = (event: any) => {
      setBandProfile((prev) => ({...prev,  ruleUpperAge : event.target.value}));
    };
  
    const handleChangeRuleSex = (event: any) => {
      setBandProfile((prev) => ({...prev,  ruleSex : event.target.value}));
    };
  
    const handleChangeIntroduction = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBandProfile((prev) => ({...prev,  introduction: event.target.value}));
    };

    const handleClickBandProfileUpdate = async () => {
      await axios.post("http://localhost:3001/bandprofile/", { bandProfile })
        .then(res => {
          console.log(res);
          console.log(res.data);
      });
    };

    return (
      <div className="BandProfile">
        <TextField
          required
          label="Overview"
          defaultValue=""
          variant="filled"
          onChange={handleChangeOverview}
          />
        <TextField
          required
          label="Leader"
          defaultValue=""
          variant="filled"
          onChange={handleChangeLeaderId}
        />
        <TextField
          label="Member"
          defaultValue=""
          variant="filled"
          onChange={handleChangeMemberId}
        />
        <FormControl>
          <InputLabel>Recruitment Part</InputLabel>
          <Select
            labelId="recruitmentPart"
            value={String(bandProfile.recruitmentPart)}
            label="RecruitmentPart"
            onChange={handleChangeRecruitmentPart}
          >
            <MenuItem value={0}>Vocal</MenuItem>
            <MenuItem value={1}>Guitar</MenuItem>
            <MenuItem value={2}>Bass</MenuItem>
            <MenuItem value={3}>Drum</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Select
            labelId="status"
            value={String(bandProfile.status)}
            label="Status"
            onChange={handleChangeStatus}
          >
            <MenuItem value={0}>メンバ募集中</MenuItem>
            <MenuItem value={1}>募集休止中</MenuItem>
            <MenuItem value={2}>活動休止中</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="ActivityArea"
          defaultValue=""
          variant="filled"
          onChange={handleChangeActivityArea}
        />
        <TextField
          label="URL"
          defaultValue=""
          variant="filled"
          onChange={handleChangeURL}
        />
        <FormControl>
          <InputLabel>Genre</InputLabel>
          <Select
            labelId="genre"
            value={String(bandProfile.genre)}
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
          label="ActivityDate"
          defaultValue=""
          variant="filled"
          onChange={handleChangeActivityDate}
        />
        <FormControlLabel
          label="Online OK"
          control={
            <Checkbox
              checked={bandProfile.isOnlineAllow}
              onChange={handleChangeIsOnlineAllow}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
        />
        <FormControl>
          <InputLabel>Direction</InputLabel>
          <Select
            labelId="direction"
            value={String(bandProfile.directionId)}
            label="Direction"
            onChange={handleChangeDirectionId}
          >
            <MenuItem value={0}>Pro</MenuItem>
            <MenuItem value={1}>Amateur</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Rule Lower Age"
          defaultValue=""
          variant="filled"
          onChange={handleChangeRuleLowerAge}
        />
        <TextField
          label="Rule Upper Age"
          defaultValue=""
          variant="filled"
          onChange={handleChangeRuleUpperAge}
        />
        <TextField
          required
          label="Rule Sex"
          defaultValue=""
          variant="filled"
          onChange={handleChangeRuleSex}
        />
        <TextField
          label="Introduciton"
          multiline
          maxRows={10}
          value={bandProfile.introduction}
          onChange={handleChangeIntroduction}
        />
        <Button onClick={handleClickBandProfileUpdate}
        >
          Update
        </Button>
      </div>
    );
};
  
const BandProfilesPage = () => {
    const [bands, setBands] = useState<BandProfile[]>([]);
  
    let bandProfileDisps :any = [];
  
    const handleClickBandProfileAdd = () => {
      setBands((prev) => ([...prev, initBandProfile]));
  
    }
  
    bands.forEach(
      (b : BandProfile) => {
        bandProfileDisps.push(<BandProfileRegister />);
      }
    );
  
    return (
      <>
        {bandProfileDisps}
        <Button onClick={handleClickBandProfileAdd}
        >
          Add...
        </Button>
      </>
    );
};  

export default BandProfilesPage;