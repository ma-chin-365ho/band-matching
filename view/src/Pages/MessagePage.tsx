import React, {useState} from 'react';
import { 
    Button,
    TextField,
    Typography,
} from '@material-ui/core'
import  {
    Box,
    Tabs,
    Tab,
  } from '@mui/material';
import { Message, Talk } from '../Models/Message';
import axios from 'axios';
  
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
};

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
                {children}
            </Box>
        )}
        </div>
    );
}
  
const TalkRoom = () => {
    const [myTalk, setMyTalk] = useState("");
    const [talks, setTalks] = useState<Talk[]>([]);

    const handleChangeMyTalk = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyTalk(event.target.value);
    };

    const handleClickSendMyTalk = () => {
        setTalks((prev) => ([...prev, {who : "", content: myTalk, }]));
        
        let message : Message = {
            bandId : 0,
            msgSeq : 1,
            senderUserId : 2,
            msg : myTalk
        };

        axios.post("http://localhost:3001/message/", { message })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        setMyTalk("");
    }

    let talkDisps :any = [];
    talks.forEach(
        (t : Talk) => {
            talkDisps.push(<Typography>{t.who + " : " + t.content}</Typography>);
        }
    );


    return (
        <>
            {talkDisps}
            <TextField
                label="Talk"
                multiline
                maxRows={10}
                value={myTalk}
                onChange={handleChangeMyTalk}
            />
            <Button onClick={handleClickSendMyTalk}>
                送信
            </Button>
        </>
    );
};
  
const MessagePage = () => {
    const [pageMsg, setPageMsg] = React.useState(0);

    const handleChangePageMsg = (event: React.SyntheticEvent, newValue: number) => {
        setPageMsg(newValue);
    };
    
    return (
        <div className="Message">
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
            >
                <Tabs
                orientation="vertical"
                variant="scrollable"
                value={pageMsg}
                onChange={handleChangePageMsg}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Band A" />
                    <Tab label="Band B" />
                    <Tab label="Band C" />
                </Tabs>
                <TabPanel value={pageMsg} index={0}>
                    <TalkRoom />
                </TabPanel>
                <TabPanel value={pageMsg} index={1}>
                    <TalkRoom />
                </TabPanel>
                <TabPanel value={pageMsg} index={2}>
                    <TalkRoom />
                </TabPanel>
            </Box>
        </div>
    );
}

export default MessagePage;