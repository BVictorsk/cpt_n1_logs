// auth.js

export const authenticateUser = (login, password) => {
    const validUsers = [
      { username: 'Brian', login: '1010', senha: '1010' },
      { username: 'Daniel', login: '1022', senha: '1022' },
      { username: 'Edivaldo', login: '1014', senha: '1014' },
      { username: 'Gabriel', login: '1023', senha: '1023' },
      { username: 'Lucas', login: '1013', senha: '1013' },
      { username: 'Luis', login: '1008', senha: '1008' },
      { username: 'Jefferson', login: '1020', senha: '1020' },
      { username: 'Renan', login: '1002', senha: '1002' },
    ];
  
    return validUsers.some(
      (user) => user.login === login && user.senha === password
    );
  };
  