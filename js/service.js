//腳踏車橫向js 
let bike = document.querySelector('.bike-img');
window.addEventListener('scroll', function () {
  let scrollPositionY = window.pageYOffset;
  let addMargin = (scrollPositionY / window.innerWidth) * 100;
  if (addMargin >= 10) {
    addMargin -= 10;
    bike.style.marginRight = `${addMargin}vw`
  }
})
