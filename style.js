function inc (){
    var nav = document.getElementById("nav-bar");
    nav.style.width = "100%";
    nav.style.height = "72%";
    nav.style.borderLeft = "2px solid white";
    nav.style.transitionDuration = "1s";
}


function dec(){
    document.getElementById("nav-bar").style.height = "0px";
}

function showMessage(){
    var mes = document.getElementById("message");
    mes.style.transitionDelay = "2s";
    mes.style.transform = "scale(1)";
    mes.style.transitionDuration = "0.8s";
}

function hideMessage(){
    document.getElementById("message").style.transform = "scale(0)";
    document.getElementById("message").style.transitionDelay = "0s";
}

function showPoet(){
    var poe = document.getElementById("hiddenPoet");
    poe.classList.toggle("ramin");
}

function closeBar(){
    document.getElementById("nav-bar").style.height = "0%";
}

// this belongs to sending comment 

function sendMail(){
    document.getElementById("submit-btn").value = "...در حال ارسال";
    var params = {
        name: document.getElementById("name").value,
        comment: document.getElementById("com").value
    }
    emailjs.send("service_hoagyge" , "template_54oui0l" , params).then(function (res){
    })
}

function rest(){
    document.getElementById("name").value = "";
    document.getElementById("com").value = "";

    document.getElementById("submit-btn").value = "ارسال";
}
   
// 
// var i = 0
// var images = []
// var time = 2000
// images [0] = "./imges/m1.jpg"
// images [1] = "./imges/s1.jpg"
// images [2] = "./imges/a-1259.jpg"
// images [3] = "./imges/ferdawsi.jpg"
// function slideImage(){

//     document.slide.src = "images[i]"

//     if(i < images.length - 1){
//         i++
//     }
//     else {
//         i = 0
//     }
//     setTimeout("slideImage" , time)

// }

var i = 0
                var images = []
                var time = 3000

             images [0] = "./imges/m1.jpg"
images [1] = "./imges/s1.jpg"
images [2] = "./imges/a-1259.jpg"
images [3] = "./imges/ferdawsi.jpg"
                function changeImage(){
                    document.slide.src= images[i]

                    if( i < images.length - 1){
                        i++
                    }
                    else{
                        i = 0
                    }

                     setTimeout('changeImage()' , time)
                }