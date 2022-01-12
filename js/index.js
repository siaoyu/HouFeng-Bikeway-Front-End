
let circles = document.querySelectorAll('.anchor-point-circle');
let lines = document.querySelectorAll('.anchor-point-line');
let titles = document.querySelectorAll('.anchor-point-title');

window.addEventListener('scroll', function () {
  let scrollPositionY = window.pageYOffset;
  let anchor = document.querySelector('.anchor-point');

  let positionY = (scrollPositionY / document.body.offsetHeight) * 100;
  let addMargin = (scrollPositionY / window.innerWidth) * 100;
  console.log(addMargin);
  if (addMargin >= 54) {
    addMargin -= 54.8;
    anchor.style.marginTop = `${addMargin}vw`
  }
  if (positionY >= 62) {
    active(4)
    console.log('5');
  } else if (positionY >= 52) {
    active(3)
    console.log('4');
  } else if (positionY >= 42) {
    active(2)
    console.log('3');
  } else if (positionY >= 32) {
    active(1)
    console.log('2');
  } else {
    active(0)
    console.log('1');
  }

})

function active(index) {
  reorganize();
  circles[index].style.backgroundColor = '#000000';
  titles[index].style.color = '#000000';
  if (index !== 4) {
    lines[index].style.backgroundColor = '#000000';
  }
}

function reorganize() {
  circles.forEach(function (circle) {
    circle.style.backgroundColor = '#AFAFAF'
  })
  lines.forEach(function (line) {
    line.style.backgroundColor = '#AFAFAF'
  })
  titles.forEach(function (title) {
    title.style.color = '#AFAFAF'
  })
}