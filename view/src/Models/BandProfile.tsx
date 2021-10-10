export interface BandRule {
    lowerAge? : number;
    upperAge? : number;
    sex? : number;
};

export interface BandProfile {
    id              : number;
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
    rule            : BandRule;
};

export const initBandRule : BandRule = 
{
    lowerAge : 0,
    upperAge : 0,
    sex : 0
};

export const initBandProfile : BandProfile = 
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
};