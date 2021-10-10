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
import { BandProfile, initBandRule } from '../Models/BandProfile';

interface BandProfileSeach extends BandProfile {
    isUrlInputed   : boolean,
    keyword        : string,
}

interface BandProfileDispProps extends BandProfile {
    leaderName     : string,
    memberName     : string,
}

const initBandProfileSeach : BandProfileSeach = 
{
    id              : 0,
    overview        : "",
    introduction    : "",
    leaderId        : 0,
    memberId        : [],
    url             : "",
    genre           : 0,
    status          : 0,
    activityArea    : "",
    activityDate    : "",
    directionId     : 0,
    isOnlineAllow   : false,
    recruitmentPart : 0,
    rule            : initBandRule,
    isUrlInputed   : false,
    keyword         : "",
};

const initBandProfileDispProps : BandProfileDispProps = 
{
    id              : 0,
    overview        : "",
    introduction    : "",
    leaderId        : 0,
    memberId        : [],
    url             : "",
    genre           : 0,
    status          : 0,
    activityArea    : "",
    activityDate    : "",
    directionId     : 0,
    isOnlineAllow   : false,
    recruitmentPart : 0,
    rule            : initBandRule,
    leaderName      : "",
    memberName      : "",
};

const dummyBandProfileDispProps : BandProfileDispProps[] =[initBandProfileDispProps, initBandProfileDispProps, initBandProfileDispProps, initBandProfileDispProps, initBandProfileDispProps, initBandProfileDispProps, initBandProfileDispProps];

const BandProfileSeachField = () => {
    const [bandProfileSeach, setBandProfileSeach] = React.useState<BandProfileSeach>(initBandProfileSeach);
  
    const handleChangeStatus = (event: SelectChangeEvent) => {
      setBandProfileSeach((prev) => ({...prev,  status: Number(event.target.value)}));
    };
  
    const handleChangeGenre = (event: SelectChangeEvent) => {
      setBandProfileSeach((prev) => ({...prev,  genre: Number(event.target.value)}));
    };
  
    const handleChangeRecruitmentPart = (event: SelectChangeEvent) => {
      setBandProfileSeach((prev) => ({...prev,  recruitmentPart: Number(event.target.value)}));
    };
  
    const handleChangeIsOnlineAllow = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBandProfileSeach((prev) => ({...prev,  isOnlineAllow: event.target.checked}));
    };
  
    const handleChangeIsUrlInputed = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBandProfileSeach((prev) => ({...prev,  isUrlInputed: event.target.checked}));
    };
    
    const handleChangeDirectionId = (event: SelectChangeEvent) => {
      setBandProfileSeach((prev) => ({...prev,  directionId: Number(event.target.value)}));
    };
  
    const handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBandProfileSeach((prev) => ({...prev,  keyword: event.target.value}));
    };

    const handleClickSeachBand = () => {

    }
    
    return (
      <div className="BandProfileSeachField">
        <FormControl>
          <InputLabel>Recruitment Part</InputLabel>
          <Select
            labelId="recruitmentPart"
            value={String(bandProfileSeach.recruitmentPart)}
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
            value={String(bandProfileSeach.status)}
            label="Status"
            onChange={handleChangeStatus}
          >
            <MenuItem value={0}>メンバ募集中</MenuItem>
            <MenuItem value={1}>募集休止中</MenuItem>
            <MenuItem value={2}>活動休止中</MenuItem>
            <MenuItem value={3}>全て</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="ActivityArea"
          defaultValue=""
          variant="filled"
        />
        <FormControl>
          <InputLabel>Genre</InputLabel>
          <Select
            labelId="genre"
            value={String(bandProfileSeach.genre)}
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
        />
        <FormControlLabel
          label="Online OK"
          control={
            <Checkbox
              checked={bandProfileSeach.isOnlineAllow}
              onChange={handleChangeIsOnlineAllow}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
        />
        <FormControl>
          <InputLabel>Direction</InputLabel>
          <Select
            labelId="direction"
            value={String(bandProfileSeach.directionId)}
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
        />
        <TextField
          label="Rule Upper Age"
          defaultValue=""
          variant="filled"
        />
        <TextField
          required
          label="Rule Sex"
          defaultValue=""
          variant="filled"
        />
        <FormControlLabel
          label="URL Inputed"
          control={
            <Checkbox
              checked={bandProfileSeach.isUrlInputed}
              onChange={handleChangeIsUrlInputed}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
        />
        <TextField
          label="Keyword"
          value={bandProfileSeach.keyword}
          onChange={handleChangeKeyword}
        />
        <Button onClick={handleClickSeachBand}
        >
          検索
        </Button>
      </div>
    );
};
  
const BandProfileDisp = (props : {data: BandProfileDispProps}) => {

    const partName = props.data.recruitmentPart;
    const statusName = props.data.status;
    const genreName = props.data.genre;
    const directionName = props.data.directionId;
    
    const handleClickGood = () => {

    };
  
    return (
      <div className="BandProfileDisp">
        <Typography>overview:{props.data.overview}</Typography>
        <Typography>leader:{props.data.leaderName}</Typography>
        <Typography>member:{props.data.memberName}</Typography>
        <Typography>part:{partName}</Typography>
        <Typography>status:{statusName}</Typography>
        <Typography>ActivityArea: {props.data.activityArea}</Typography>
        <Typography>URL:{props.data.url}</Typography>
        <Typography>Genre:{genreName}</Typography>
        <Typography>Activity Date: {props.data.activityDate}</Typography>
        <Typography>Online OK:{props.data.isOnlineAllow}</Typography>
        <Typography>Direction:{directionName}</Typography>
        <Typography>LowerAge: {props.data.rule.lowerAge}</Typography>
        <Typography>UpperAge: {props.data.rule.upperAge}</Typography>
        <Typography>Sex: {props.data.rule.sex}</Typography>
        <Typography>Introduction: {props.data.introduction}</Typography>
        <Button onClick={handleClickGood}
        >
          いいね。
        </Button>
      </div>
    );
};

const BandProfileDisps = () => {

    let bandProfileDisps :any = [];
    dummyBandProfileDispProps.forEach(
        (b : BandProfileDispProps) => {
            bandProfileDisps.push(
                <Grid item xs={3}>
                    <BandProfileDisp data={b} />
                </Grid>
            );
        }
    );

    return (
        <div className="BandProfileDisps">
            <Grid container spacing={2}>                
                {bandProfileDisps}
            </Grid>
        </div>
    );  
};


const HopeToJoinPage = () => {
  return (
    <div className="HopeToJoin">
      <BandProfileSeachField />
      <BandProfileDisps />
    </div>
  );
}

export default HopeToJoinPage;