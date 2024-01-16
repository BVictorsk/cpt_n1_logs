// auth.js

export const authenticateUser = (login, password) => {
    const validUsers = [
      { username: 'brian', login: '1010', senha: '1010' },
      { username: 'luis', login: '1008', senha: '1008' },
      { username: 'Daniel', login: '1002', senha: '1002' },
    ];
  
    return validUsers.some(
      (user) => user.login === login && user.senha === password
    );
  };
  