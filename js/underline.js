const underline = document.querySelector('#underline');

underline.addEventListener('click', () => {
    console.log("clicked ul")
    document.querySelector('#input').style.textDecoration = 'underline';
})


