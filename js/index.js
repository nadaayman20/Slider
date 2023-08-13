var allImages=Array.from(document.querySelectorAll('img'));
var arrowLeft=document.querySelector('.fa-circle-arrow-left');
var arrowRight=document.querySelector('.fa-circle-arrow-right');
var closeBtn=document.querySelector('.fa-circle-xmark');
var myLayer=document.querySelector('.layer');
var mainImage=document.querySelector('.mainImage');
var indexOfClickedImage=0;

for(var i=0 ; i<allImages.length; i++){
    allImages[i].addEventListener('click',function(e){

        indexOfClickedImage=allImages.indexOf(e.target);
        myLayer.classList.remove("d-none")
        
        var clickedImageSource = e.target.getAttribute('src');
        mainImage.style.backgroundImage=`url(${clickedImageSource})`
    
    })
}

function getPrev(){
    indexOfClickedImage--;
    if(indexOfClickedImage == -1){
        indexOfClickedImage=allImages.length -1;
    }

    var currentImage=allImages[indexOfClickedImage];
    var currentImageSource=currentImage.getAttribute('src');
    mainImage.style.backgroundImage=`url(${currentImageSource})` 
}
function getNext(){
    indexOfClickedImage++;
    if(indexOfClickedImage == allImages.length){
        indexOfClickedImage=0;
    }

    var currentImage=allImages[indexOfClickedImage];
    var currentImageSource=currentImage.getAttribute('src');
    mainImage.style.backgroundImage=`url(${currentImageSource})` 
}
function closeLayer(){
    myLayer.classList.add("d-none")
}

arrowLeft.addEventListener('click', getPrev)
arrowRight.addEventListener('click', getNext)
closeBtn.addEventListener('click', closeLayer)

document.addEventListener('keydown',function(e){

    if(e.code == 'ArrowRight'){
        getNext();
    }
    else if(e.code == 'ArrowLeft'){
        getPrev();
    }
    else if(e.code == 'Escape'){
        closeLayer();
    }
})

myLayer.addEventListener('click',function(e){
    if(e.target == myLayer){
        closeLayer();
    }
})