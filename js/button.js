const buttons = document.querySelectorAll('i');

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        removeActiveClass();
        button.classList.add('active');
    })
})

function removeActiveClass(){
    buttons.forEach((button)=>{
        button.classList.remove('active');
    })
}