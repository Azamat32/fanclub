const copyBtn = document.querySelector('.copy_link');
const linkBox = document.querySelector('.link_box');
const commentBtn = document.getElementById('comment_btn');
const modalClose = document.querySelector('.modal_close');
const modal = document.querySelector('.modal');
const navBox = document.querySelector('.nav_search_box')
const search = document.querySelector('#searchItem')
const search2 = document.querySelector('#searchItem2')



search.onclick = () =>{
    if(navBox.classList.contains('active') == false){
         navBox.classList.add('active')

    }
    else{
        navBox.classList.remove('active')

    }
   
}
search2.onclick = () =>{
    if(navBox.classList.contains('active') == false){
         navBox.classList.add('active')

    }
    else{
        navBox.classList.remove('active')

    }
   
}
window.addEventListener('click', function() {
    if(navBox.target.classList.contains('active') == true){
        navBox.classList.remove('active')

    }
    else{
        navBox.classList.add('active')

    }
});

copyBtn.addEventListener('click', () => {
    linkBox.style.display='block'
    setTimeout(() => linkBox.style.display='none', 3000)
})


commentBtn.addEventListener('click',() => {
    console.log('hell232o');
    modal.style.display = 'block';

})
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    console.log('hello');
})
