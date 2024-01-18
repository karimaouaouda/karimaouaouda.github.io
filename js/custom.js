window.onload = () => {
    new WOW().init();
}


function autoCarousel(data) {
    let i = 0;


    let m = setInterval(function () {
        if(data.current == data.count){
            data.current = 0;
        }
        data.current++;
    }, 3000)
}


function backToTop(){
    console.log('clikced')
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
    console.log("clocked")
}