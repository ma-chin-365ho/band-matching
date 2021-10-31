export interface BandProfile {
    id              : number | null;
    overview        : string;
    introduction    : string;
    leaderId        : number;
    memberId        : number[];
    url?            : string;
    genre?          : number;
    status          : number;
    activityArea    : string;
    activityDate    : string;
    directionId     : number;
    isOnlineAllow   : boolean;
    recruitmentPart : number;
    ruleLowerAge?   : number;
    ruleUpperAge?   : number;
    ruleSex?        : number;
};

export const initBandProfile : BandProfile = 
{
    id              : null,
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
    ruleLowerAge    : 0,
    ruleUpperAge    : 0,
    ruleSex         : 0
};