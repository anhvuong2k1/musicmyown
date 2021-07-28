// 
// 
//         
//                     SHOW MENU
// 
// 
// 

const showUser = $('#showUser');
const container_left = $('.container_left');
const showin4 = $('#showin4');

const clear1 = $('#clear1');


showUser.onclick = function () {
    container_left.classList.add('very1');
    this.classList.add('very1');
    showin4.classList.add('very1');
};

clear1.onclick = function () {
    container_left.classList.remove('very1');
    this.classList.remove('very1');
    showin4.classList.remove('very1');
};

// ---------------------------------------------------------------

const showList = $('#showList');
const showother = $('#showother');
const container_right = $('.container_right');

const clear2 = $('#clear2');

showList.onclick = function () {
    container_right.classList.add('very2');
    this.classList.add('very2');
    showother.classList.add('very2');
};

clear2.onclick = function () {
    container_right.classList.remove('very2');
    this.classList.remove('very2');
    showother.classList.remove('very2');
};