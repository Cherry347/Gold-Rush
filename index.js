for(var i=0; i<=2; i++){
    var x= document.querySelectorAll(".click")[i];
    console.log(x);
    x.addEventListener("click", function(){
        this.innerHTML= this.contentEditable="true";
    });
}