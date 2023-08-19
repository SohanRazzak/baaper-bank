// login page
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
    const userName = document.getElementById('user-name').value;
    const password = document.getElementById('password').value;

    if (password == '' || userName == '' || password.length < 6) {
        alert('Enter a valid username or password!');
    }
    else {
        var matchPass = 'did not match';
        for (const i of users) {
            if (userName === i.user && password === i.pass) {
                location.href = 'dashboard.html';
                matchPass = 'did match';
            }
        }
        if (matchPass == 'did not match') {
            alert('Your username and password ' + matchPass)
        }
    }
})