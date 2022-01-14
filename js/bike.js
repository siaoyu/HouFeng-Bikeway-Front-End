
let main = document.querySelector('main');
let loadingVeiw = document.querySelector('.loading-veiw');
let loadCircle = document.querySelector('.loader');
let mainVeiw = document.querySelector('.veiw');
let btnElements = document.querySelectorAll('button');
let skipBtn = document.querySelector('.skip-btn');
//籌備告示
function notYet(){
    alert('籌備中，敬請期待!!')

}
//畫面初始
function start(){
    loadCircle.classList.remove('none')
    btnElements.forEach(function(btn){
        btn.classList.add('none');
    })
    setTimeout(function () {
        loadingVeiw.classList.add('none');
        mainVeiw.classList.remove('loaded');
    }, 700);
    main.style.minHeight = '11000px';
}
///省略動畫用
function skip(){
    loadCircle.classList.remove('none');
    loadingVeiw.classList.add('none');
    mainVeiw.classList.remove('loaded');
    main.style.minHeight = '11000px';
}
//有需要修改就打開
// skip();



mainVeiw.innerHTML =`
<div class="scroll-tip">
    <div class="mouse"></div>
    <h3>請滾動滑鼠滾輪</h3>
</div>
<div class="background"></div>
<div id="road" class="road">
    <div class="line"></div>
    <div class="shadow"></div>
</div>
<div class="camera">
    <!-- 選單 -->
    <div class="menu">
        <div class="toggle"></div>
        <!-- 調整li裡面的--i可以選擇位置 -->
        <li style="--i:3;">
            <a href="#景點"><ion-icon name="map-outline"></ion-icon></a>
        </li>
        <li style="--i:4;">
            <a href="#揪騎"><ion-icon name="bicycle"></ion-icon></a>
        </li>
        <li style="--i:5;">
            <a href="#店家"><ion-icon name="bag-handle-outline"></ion-icon></a>
        </li>
        <li style="--i:6;">
            <a href="#首頁"><ion-icon name="reader-outline"></ion-icon></a>
        </li>
    </div>
    <div class="space">
        <div class="box1">
            <div class="face1"></div>
            <div class="face2"></div>
            <div class="face3"></div>
            <div class="face4"></div>
        </div>
        <div class="box2">
            <div class="face1"></div>
            <div class="face2"></div>
            <div class="face3"></div>
            <div class="face4"></div>
        </div>
    </div>
</div>
<div class="bike"></div>
<div class="cloud cloud-1"></div>
<div class="cloud cloud-2"></div>
<div class="cloud cloud-3"></div>
<div class="cloud cloud-4"></div>
<div class="tree tree-1"></div>
<div class="tree tree-2"></div>
<div class="tree tree-3"></div>
<div class="tree tree-4"></div>
<div class="tree tree-5"></div>
<div class="tree tree-6"></div>
<div class="tree tree-7"></div>
<div class="tree tree-8"></div>
<div class="tree tree-9"></div>
<div class="mountain mountain-1"></div>
<div class="mountain mountain-2"></div>
<div class="grass grass-1 g-left"></div>
<div class="grass grass-2 g-left"></div>
<div class="grass grass-3 g-right"></div>
<div class="grass grass-4 g-right"></div>
<div class="grass grass-5 g-right"></div>
<div class="grass grass-6 g-center"></div>
<div class="grass grass-7 g-center"></div>
<div class="brige"></div>
<div class="marker marker-1"></div>
<div class="marker marker-2"></div>
<div class="marker marker-3"></div>
<div class="marker marker-4"></div>
<div class="marker marker-5"></div>
<div class="building building-1"></div>
<div class="building building-2"></div>
<div class="building building-3"></div>
<div class="building building-4"></div>
<div class="building building-5"></div>

<div class="info">
    <div class="info-title"></div>
    <div class="info-description"></div>
</div>
<div id="p1" class="KM km-1">
    <h3 class="km-number">0.55K</h3>
</div>
<div class="KM km-2">
    <h3 class="km-number">1.1K</h3>
</div>
<div class="KM km-3">
    <h3 class="km-number">1.5K</h3>
</div>
<div class="KM km-4">
    <h3 class="km-number">2.9K</h3>
</div>
<div class="KM km-6">
    <h3 class="km-number">4.3K</h3>
</div>`;

//畫面初始化
// window.onload = function () {
//     setTimeout(function () {
//         laodingVeiw.classList.add('none');
//         mainVeiw.classList.remove('loaded');
//     }, 4000);
// };
//按鈕選單
let toggle = document.querySelector('.camera');
let menu = document.querySelector('.menu');
toggle.onclick = function () {
    menu.classList.toggle('active')
}
//景物
//捲動提示
const scrollTip = document.querySelector('.scroll-tip');
//背景
const backgroundElement = document.querySelector('.background');
//道路
const roadElement = document.querySelector('#road');
//中線
const lineElement = document.querySelector('.line');
//腳踏車
const bikeElement = document.querySelector('.bike');
//雲
const cloudElemets = document.querySelectorAll('.cloud');
//樹
const treeElemets = document.querySelectorAll('.tree');
//草
const grassElemets1 = document.querySelectorAll('.g-left');
const grassElemets2 = document.querySelectorAll('.g-right');
const grassElemets3 = document.querySelectorAll('.g-center');
//山
const mountainElemets = document.querySelectorAll('.mountain');
//橋
const brigeElement = document.querySelector('.brige');
//景點地標
let mapPoints = document.querySelectorAll('.marker');
//建物
let buildingElements = document.querySelectorAll('.building');
//資訊框
let infoElemet = document.querySelector('.info');
let attractionName = document.querySelector('.info-title');
let attractionDescription = document.querySelector('.info-description');

//公里路標
let kmShowers = document.querySelectorAll('.KM');
let kmNumber = document.querySelector('.km-number');


//跳起來
// window.addEventListener('keydown', function(e){
    
//     if(e.code == 'KeyW' ){
        
//         bikeElement.classList.add('jump');
        
//         setTimeout(function () {
//             bikeElement.classList.remove('jump');
//         }, 500);
//     }
// });

//橫向捲軸
window.addEventListener('scroll', function () {
    let yValue = window.scrollY;
    let kNum = (yValue * 0.0005).toFixed(2);
    scrollTip.style.transform = `translateY(${yValue * 1}px)`;
    scrollTip.style.opacity = 1 -(yValue * 0.005);
    
    //腳踏車
    setTimeout(function () {
        bikeElement.style.animation =`animateBiking 1s steps(8)  running`;
    }, 100);
    
    bikeElement.style.animation='';
    //背景
    backgroundElement.style.transform = `translateX(${-yValue}px)`;
    //馬路中線
    lineElement.style.left = yValue % 10 * - 50 + 'px';
    //雲
    cloudElemets.forEach(function (cloudElemet) {
        cloudElemet.style.transform = `translateX(${yValue % 2300 * - 1}px)`;
    })
    //樹
    treeElemets.forEach(function (treeElemet) {
        treeElemet.style.transform = `translateX(${yValue % 5000 * -2}px)`;
    })
    //山
    mountainElemets.forEach(function (mountainElemet) {
        mountainElemet.style.transform = `translateX(${yValue % 6000 * - 1}px)`;
    })
    //草叢1
    grassElemets1.forEach(function (grassElemet1) {
        //                                           多遠出現一次       經過的速度
        grassElemet1.style.transform = `translateX(${yValue % 1000 * - 3}px)`;
    })
    //草叢2
    grassElemets2.forEach(function (grassElemet2) {
        grassElemet2.style.transform = `translateX(${yValue % 2000 * - 3}px)`;
    })
    //草叢3
    grassElemets3.forEach(function (grassElemet3) {
        grassElemet3.style.transform = `translateX(${yValue % 5000 * - 3}px)`;
    })
    //鐵橋
    brigeElement.style.transform = `translateX(${-yValue}px)`;
    //景點
    mapPoints.forEach(function (mapPoint) {
        mapPoint.style.transform = `translateX(${- yValue}px)`;
    })
    //路牌
    kmShowers.forEach(function (kmShower) {
        kmShower.style.transform = `translateX(${- yValue}px)`;
    })
    buildingElements.forEach(function (buildingElement) {
        buildingElement.style.transform = `translateX(${- yValue}px)`;
    })


    //點擊出現
    // infoElemet.classList.remove('open')
    // mapPoint.onclick = function(){
    //     infoElemet.classList.toggle('open')
    //     arttactionName.classList.toggle('none')
    // }
    function deleteText(){
        attractionName.textContent = '';
        attractionDescription.textContent ='';
        infoElemet.classList.remove('open')
    }
    let attractionText =[
        '懷舊的場景布置、復古的柑仔店，請您停下腳步休閑一下，喝了再上。店內有天然的膠質愛玉(降膽固醇、促進代謝)，冷冷的天愛玉也可以吃熱的喔！也有蔬食簡餐喔。',
        '后豐鐵馬道招牌「花梁鋼橋」建於日治時代(明治41年)1908年完工，站在遠處觀望，立即能感受到它的氣勢雄偉。臺鐵舊山線最南端的景點，全長382公尺。',
        '「9號隧道」，亦建於西元1908年，全長1.2公里，是臺鐵舊山線最長的一座隧道，欣賞大甲溪沿岸風光，特殊的隧道穿越經驗，讓這趟悠閒的單車之旅，既豐富又令人驚豔。',
        '在九號隧道北口左迴轉，來到大樟樹休憩廣場。樟樹與榕樹天生於此，二棵不同種的樹木相生相息，枝幹交錯攀爬二樹幹，相依偎形同夫妻故稱夫妻樹。',
        '后里馬場為國內具歷史及規模的公營馬場，為日治時期臺灣總督府，臺灣光復後作為種馬繁殖及國防騎兵之訓練場所。隨著時代轉變，已轉型為具觀光休閒遊憩的馬場。',
    ];

    if (kNum > 5) {
        deleteText();
    } else if (kNum > 4.3) {
        infoElemet.classList.add('open')
        attractionName.textContent = '后里馬場';
        attractionDescription.textContent = attractionText[4];
    } else if (kNum > 3.6) {
        deleteText();
    } else if (kNum > 2.9) {
        infoElemet.classList.add('open')
        attractionName.textContent = '夫妻樹';
        attractionDescription.textContent = attractionText[3];
    } else if (kNum > 2.5) {
        deleteText();
    } else if (kNum > 2) {
        infoElemet.classList.add('open')
        attractionName.textContent = '九號隧道';
        attractionDescription.textContent = attractionText[2];
    } else if (kNum > 1.6) {
        deleteText();
    } else if (kNum > 1) {
        infoElemet.classList.add('open')
        attractionName.textContent = '大甲溪花樑鋼橋';
        attractionDescription.textContent = attractionText[1];
    } else if (kNum > 0.8) {
        deleteText();
    } else if (kNum > 0.4) {
        infoElemet.classList.add('open');
        infoElemet.style.backgroundImage ='url("")'
        attractionName.textContent = '榮町雜貨店';
        attractionDescription.textContent = attractionText[0];
    } else if (kNum <= 0.4) {
        deleteText();
    }


   
})