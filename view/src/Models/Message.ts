export interface Message {
    bandId : number;
    msgSeq : number;
    senderUserId : number;
    msg : string;
};

export interface Talk {
    who     : string;
    content : string;
};


