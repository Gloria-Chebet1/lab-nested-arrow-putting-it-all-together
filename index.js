function createLoginTracker(userInfo) {
    let wrongLoginCount = 0;

    const loginAttempt = (passwordAttempt) => {
        if (wrongLoginCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }

        if (passwordAttempt === userInfo.password) {
            wrongLoginCount = 0;
            return "Login successful";
        }

        wrongLoginCount++;
        return `Attempt ${wrongLoginCount}: Login failed`;
    };

    return loginAttempt;
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};