import React ,{useState} from 'react';
import { 
  Button,
  TextField,
} from '@material-ui/core';
import axios from 'axios';

interface Login {
  username : string;
  password : string;
};

const initLogin : Login =  {
  username : "",
  password : ""
}


const LoginPage = () => {
  const [login, setLogin] = useState<Login>(initLogin);

  const handleChangeLoginId = (event :React.ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({...prev,  username: event.target.value}));
  };

  const handleChangeLoginPassword = (event :React.ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({...prev,  password: event.target.value}));
  };

  const handleClickLogin = async () => {

    await axios.post("http://localhost:3001/auth/login/", { ...login })
      .then(res => {
        console.log(res);
        console.log(res.data);
    });
  };

  return (
    <div className="Login">
      <TextField
        required
        label="Login ID"
        defaultValue=""
        value={login.username}
        onChange={handleChangeLoginId}
        variant="filled"
      />
      <TextField
        required
        label="Password"
        type="password"
        defaultValue=""
        value={login.password}
        onChange={handleChangeLoginPassword}
        variant="filled"
      />  
      <Button onClick={handleClickLogin}
      >
        ログイン
      </Button>
    </div>
  );
};

export default LoginPage;
