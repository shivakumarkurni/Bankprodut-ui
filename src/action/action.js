export const getloginUser = (user) => {
    console.log(user);
    return {
        type: 'LOGIN',
        user
    }
  }