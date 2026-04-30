function createLoginTracker(userInfo) {        
  let attemptCount = 0;
  const MAX_ATTEMPTS = 3;

  const loginAttempt = (passwordAttempt) => {   
    if (attemptCount >= MAX_ATTEMPTS) {          
      return "Account locked. Too many attempts";
    }
    if (passwordAttempt === userInfo.password) {
      attemptCount = 0;
      return "Login successful";
    }
    attemptCount++;
    const left = MAX_ATTEMPTS - attemptCount;
    return `Attempt ${attemptCount} failed. ${left} left`;
  };

  return loginAttempt;                          
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};