
const validates = (email,password) => {
      
      const validate_email = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
      const validate_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     // const validate_name = /b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
      
     // if(isSignForm && !validate_name) return 'Invalid Name';
      if(!validate_email) return 'Invalid email address! Try Again';
      if(!validate_password) return 'Invalid password! Try Again';

      return null;
}

export default validates;