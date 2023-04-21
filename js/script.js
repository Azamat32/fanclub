const password = document.querySelector('#input_password');
const showPassword = document.querySelector('.open_eye');
const closePassword = document.querySelector('.close_eye');

showPassword.addEventListener('click', function (e) {
    showPassword.style.display = 'none';
    closePassword.style.display = 'block';
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
});
closePassword.addEventListener('click', function (e) {
    closePassword.style.display = 'none';
    showPassword.style.display = 'block';
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
});

const passwordtoggle = document.querySelector('.form_password_toggle');
const sendBtn = document.querySelector('.login_signup_toggle')
const forgotPassword = document.querySelector('.form_password');
const loginSign = document.querySelector('.login_signup');
const notification = document.querySelector('.notification');

passwordtoggle.addEventListener('click', () =>{
    loginSign.style.display = 'none';
    forgotPassword.style.display = 'block';
})
sendBtn.addEventListener('click', () =>{
    loginSign.style.display = 'block';
    forgotPassword.style.display = 'none';
    notification.style.display = 'block';
    setTimeout(() =>  notification.style.display = 'none',5000 )
})



