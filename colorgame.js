var numSquares=6;
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var colorDisplay=document.querySelector("#colorDisplay");
var newcolor=document.querySelector("#newcolors");
var heading=document.querySelector("h1");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
numSquares=3;
hard.classList.remove("selected");
easy.classList.add("selected");
colors=generaterandomcolors(numSquares);
pickedcolor=pickcolor();
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
if(colors[i])
squares[i].style.backgroundColor=colors[i];
else
squares[i].style.display = "none";
}
});

hard.addEventListener("click",function(){
numSquares=6;
hard.classList.add("selected");
easy.classList.remove("selected");  
colors=generaterandomcolors(numSquares);
pickedcolor=pickcolor();
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
squares[i].style.backgroundColor=colors[i];
squares[i].style.display = "block";
}
    
});

//Generating random colors array
var colors=generaterandomcolors(numSquares);var rgb;
function generaterandomcolors(num){
    var arr=[];
    for(var i=0;i<num;i++){
       rgb= generatecolor();
       arr.push(rgb);
        
    }
    return arr;
}
//Generating a random color for the array
function generatecolor(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    var rgbcolor="rgb("+r+", "+g+", "+b+")";
    return rgbcolor;
}
    
    var pickedcolor=pickcolor();
    function pickcolor()
    {
        var num=Math.floor(Math.random() * colors.length);
        return colors[num];
    }
    colorDisplay.textContent=pickedcolor;
    
    newcolor.addEventListener("click", function(){
     message.textContent="";
     this.textContent="NEW COLORS";
     colors=generaterandomcolors(numSquares);
     pickedcolor=pickcolor();
     colorDisplay.textContent=pickedcolor;
     for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        //add click listeners to square
        squares[i].addEventListener("click",function(){
            var clickedcolor=this.style.backgroundColor;
            if(clickedcolor === pickedcolor){
                message.textContent="Correct!!";
                changecolors(pickedcolor);
                heading.style.backgroundColor=pickedcolor;
                newcolor.textContent="Play Again?";
            }
            else{
                this.style.backgroundColor = "#232323";
                message.textContent="Try Again!";
            }
        });
    }
     heading.style.backgroundColor = "steelblue";
    });
    
    //Add initial colors to sqaure
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        //add click listeners to square
        squares[i].addEventListener("click",function(){
            var clickedcolor=this.style.backgroundColor;
            if(clickedcolor === pickedcolor){
                message.textContent="Correct!!";
                changecolors(pickedcolor);
                heading.style.backgroundColor=pickedcolor;
                newcolor.textContent="Play Again?";
            }
            else{
                this.style.backgroundColor = "#232323";
                message.textContent="Try Again!";
            }
        });
    }
    function changecolors(color){
      for(var i=0;i<squares.length;i++)
      squares[i].style.backgroundColor=color;
    }
   
 
    