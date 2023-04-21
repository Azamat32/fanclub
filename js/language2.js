const select2 = document.querySelectorAll('.selectBtn2');
const option2 = document.querySelectorAll('.option2');
const span2 = document.getElementById('lang2');
const img2 = document.getElementById('flag2');

let index2 = 1;

select2.forEach(a => {
  a.addEventListener('click', b => {
    const next = b.target.nextElementSibling;
    next.classList.toggle('toggle');
    next.style.zIndex = index2++;
  });
});
option2.forEach(a => {
  a.addEventListener('click', b => {
    span2.innerText = b.target.innerText;
    b.target.parentElement.classList.remove('toggle');
    if (span2.innerText === 'English') {
      img2.src = './img/englandnone.png';
    } else img2.src = './img/RussianFlag.png';
  });
});