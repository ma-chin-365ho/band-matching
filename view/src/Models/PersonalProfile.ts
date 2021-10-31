export interface PersonalProfile {
    id            : number | null;
    loginId       : string;
    name          : string;
    part          : number;
    url?          : string;
    genre?        : number;
    likeArtist?   : string;
    activityArea? : string;
    activityDate? : string;
    isOnlineAllow : boolean;
    isHopeToJoin  : boolean;
    directionId   : number;
    introduction  : string;
};

export const initPersonalProfile : PersonalProfile = 
{
  id: null,
  loginId: "",
  name: "",
  part: 0,
  url: "",
  genre: 0,
  likeArtist: "",
  activityArea: "",
  activityDate: "",
  isOnlineAllow: false,
  isHopeToJoin: false,
  directionId: 0,
  introduction: ""
};