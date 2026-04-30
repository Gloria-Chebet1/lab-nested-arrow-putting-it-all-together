function createLoginTracker(userInfo) {
    let wrongLoginCount = 0;

    const loginAttempt = (passwordAttempt) => {
        if (wrongLoginCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }

        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        wrongLoginCount++;

        if (wrongLoginCount === 3) {
            return "Account locked due to too many failed login attempts";
        }

        return `Login attempt ${wrongLoginCount}: Login failed`;
    };

    return loginAttempt;
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};