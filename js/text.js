const btns = document.querySelectorAll('.btns');
const array = ['text-left', 'text-center', 'text-justify', 'text-right'];

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        document.querySelector('#input').classList.add(array[i]);
    })
})