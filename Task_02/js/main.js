// TASk #02:

// На странице есть две кнопки. 
// При клике на первую кнопку просим пользователя ввести в prompt ссылку, 
// при клике на вторую - переадресовывается на другой сайт (по ранее введенной ссылке). 
// Реализовать проверку на http / https. Если протокол не указан - добавляем.

const button01 = document.getElementById('btn1');
const button02 = document.getElementById('btn2');
let userUrl;

button01.addEventListener('click', function(){
    userUrl = prompt('Enter URL');
    if (userUrl.indexOf('https://') +1) {
        return userUrl;
    } else {
        let string = userUrl.split();
        string.unshift('https://');
        userUrl = string.join('');
        return userUrl;
    }
});

button02.addEventListener('click', function() {
    location.href = userUrl;
});

