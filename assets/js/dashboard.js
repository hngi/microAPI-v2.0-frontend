let toggle = document.querySelectorAll('.api__box .p-switch');
let check = document.querySelectorAll('.api__box .p-toggle input')

toggle.forEach((tug, index) => {
  tug.addEventListener('click', (e) => {
    check[index].click();
  })
})