const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
const span = document.getElementById('lang');
const img = document.getElementById('flag');

let index = 1;

select.forEach(a => {
  a.addEventListener('click', b => {
    const next = b.target.nextElementSibling;
    next.classList.toggle('toggle');
    next.style.zIndex = index++;
  });
});
option.forEach(a => {
  a.addEventListener('click', b => {
    span.innerText = b.target.innerText;
    b.target.parentElement.classList.remove('toggle');
    if (span.innerText === 'English') {
      img.src = './img/englandnone.png';
    } else img.src = './img/RussianFlag.png';
  });
});