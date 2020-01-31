// TASk #02:

// На странице есть две кнопки. 
// При клике на первую кнопку просим пользователя ввести в prompt ссылку, 
// при клике на вторую - переадресовывается на другой сайт (по ранее введенной ссылке). 
// Реализовать проверку на http / https. Если протокол не указан - добавляем.

let button01 = document.getElementById('btn1');
button01.addEventListener('click', function(){
    let userUrl = prompt('Enter URL');
    if (userUrl.indexOf('https://') +1) {
        return userUrl;
        // console.log(userUrl);
    } else {
        let string = userUrl.split();
        string.unshift('https://');
        userUrl = string.join('');
        return userUrl;
        // console.log(userUrl);
        // let userAddress = string.join('');
        // return userAddress;
    }
});

// let button02 = document.getElementById('btn2');
// button02.addEventListener('click', function() {
//     location.href = userAdress;
// });

