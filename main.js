let btn = document.querySelector('.loginBtn');
let submitBtn = document.querySelector('.submitBtn');
let loginPanel = document.querySelector('.loginPanel');
let inputUsername = document.querySelector('#username');
let inputToken = document.querySelector('#token');
let wrongInput = document.querySelector('.wrongInput')
// let token = null;
let userName = null;
let token = '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';
let regex = /^[a-zA-Z\-]+$/;


function updateUserNameValue(e) {
    userName = e.target.value;
}

function updateTokenValue(e) {
    token = e.target.value;
    console.log(token)
}

inputUsername.addEventListener('input', updateUserNameValue)
inputToken.addEventListener('input', updateTokenValue)

function showLoginPanel() {
    btn.addEventListener('click', () => {
        loginPanel.style.display = 'block';
    })
}
showLoginPanel()

// function submitInput() {
//     submitBtn.addEventListener('click', () => {
//             if (regex.test(userName) && userName !== null) {
    //            let request = new XMLHttpRequest()
             
    //            request.open('GET', `https://api.github.com/users/${userName}`, true)
    //            request.setRequestHeader('Authorization', `Bearer` + token)
    //            request.onload = function () {
    //               var data = JSON.parse(this.response)
              
    //             if (request.status >= 200 && request.status < 400) {
    //               console.log(data)
                
    //             } else {
    //               console.log('error')
    //             }
    //           }
              
    //           request.send()    
            
    //                 wrongInput.innerHTML = null; 
    //                 loginPanel.style.display = 'none'
    //             }
    //             else {
    //                 wrongInput.innerHTML = 'Wrong Username or Password!'
    //             }
    //         })
    // }

    // submitInput()


function getInfo() {
fetch(`https://api.github.com/users/Webixon`, {
    method: 'GET',
    headers: {
        "Authorization": "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"
    }
}) 
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

 }
 getInfo()