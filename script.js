const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const computer = document.querySelector('.computer img');
const purchase = document.querySelector('.purchase button');
const discription = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving animation event
container.addEventListener('mousemove', (e) =>{
    let xAxis =(window.innerWidth / 2 - e.pageX ) / 25;
    let yAxis =(window.innerHeight / 2 - e.pageY ) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animation In
container.addEventListener('mouseenter', (e)=>{
    card.style.transition = 'none';
    //popout
    title.style.transform = "translateZ(150px)";
    computer.style.transform = "translateZ(200px) rotateZ(-15deg)";
    discription.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";

})

//Animate out
container.addEventListener('mouseleave', (e)=>{
    card.style.transition = 'all 0.5sec ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(-140px)"
    computer.style.transform = "translateZ(0px) rotateZ(0deg)";
    discription.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";

})