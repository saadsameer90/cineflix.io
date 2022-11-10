$(document).ready(function(){

    $('#searchclick').click(function(){
    $('.hide').toggle("slow")
    });


   
 }); 



 const slider = document.querySelector('.slider-inner');
const progressbar = document.querySelector('.prog-bar-inner');

let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', (e) => {
    progressbar.style.width  = `${getScrollPercentage()}%`
})


slider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider.addEventListener('mousemove', (e) => {
    if(sliderGrabbed){
        slider.parentElement.scrollLeft -= e.movementX;
    }
})

slider.addEventListener('wheel', (e) =>{
    e.preventDefault()
    slider.parentElement.scrollLeft += e.deltaY;
})

function getScrollPercentage(){
   return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
}




const slider1 = document.querySelector('.slider-inner1');
const progressbar1 = document.querySelector('.prog-bar-inner1');

let slider1Grabbed = false;

slider1.parentElement.addEventListener('scroll', (e) => {
    progressbar1.style.width  = `${getScrollPercentage()}%`
})


slider1.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider1.style.cursor = 'grabbing';
})

slider1.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider1.style.cursor = 'grab';
})

slider1.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider1.addEventListener('mousemove', (e) => {
    if(sliderGrabbed){
        slider1.parentElement.scrollLeft -= e.movementX;
    }
})

slider1.addEventListener('wheel', (e) =>{
    e.preventDefault()
    slider1.parentElement.scrollLeft += e.deltaY;
})

function getScrollPercentage(){
   return ((slider1.parentElement.scrollLeft / (slider1.parentElement.scrollWidth - slider1.parentElement.clientWidth) ) * 100);
}



const slider2 = document.querySelector('.slider-inner2');
const progressbar2 = document.querySelector('.prog-bar-inner2');

let slider2Grabbed = false;

slider2.parentElement.addEventListener('scroll', (e) => {
    progressbar2.style.width  = `${getScrollPercentage()}%`
})


slider2.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider2.style.cursor = 'grabbing';
})

slider2.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider2.style.cursor = 'grab';
})

slider2.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider2.addEventListener('mousemove', (e) => {
    if(sliderGrabbed){
        slider2.parentElement.scrollLeft -= e.movementX;
    }
})

slider2.addEventListener('wheel', (e) =>{
    e.preventDefault()
    slider2.parentElement.scrollLeft += e.deltaY;
})

function getScrollPercentage(){
   return ((slider2.parentElement.scrollLeft / (slider2.parentElement.scrollWidth - slider2.parentElement.clientWidth) ) * 100);
}




const slider3 = document.querySelector('.slider-inner3');
const progressbar3 = document.querySelector('.prog-bar-inner3');

let slider3Grabbed = false;

slider3.parentElement.addEventListener('scroll', (e) => {
    progressbar3.style.width  = `${getScrollPercentage()}%`
})


slider3.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider3.style.cursor = 'grabbing';
})

slider3.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider3.style.cursor = 'grab';
})

slider3.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider3.addEventListener('mousemove', (e) => {
    if(sliderGrabbed){
        slider3.parentElement.scrollLeft -= e.movementX;
    }
})

slider3.addEventListener('wheel', (e) =>{
    e.preventDefault()
    slider3.parentElement.scrollLeft += e.deltaY;
})

function getScrollPercentage(){
   return ((slider3.parentElement.scrollLeft / (slider3.parentElement.scrollWidth - slider3.parentElement.clientWidth) ) * 100);
}