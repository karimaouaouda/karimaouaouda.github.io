

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




async function getPics(t){
    let d = await fetch("./js/info.json", {
        method : "GET"
    }).then(res => res.json())
    .then(js => js);

    console.log(d[t]['pics'])



    return d[t]['pics']
}

async function initmain(data){
    return (await getPics(data))[0]
}

async function getDescription(t){
    let d = await fetch("./js/info.json", {
        method : "GET"
    }).then(res => res.json())
    .then(js => js);


    return d[t]['description']
}