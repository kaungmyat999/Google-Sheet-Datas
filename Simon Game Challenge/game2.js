var array1 =["green","red","yellow","blue"];
var random_output_keeping_Array =[];
var userinput_Array =[];

var start =false;
var level = 0;

$(document).keypress(function(){
    if(!start){
        $("#level-title").text("Level " + level);
        randomfunc();
        start =true;
    }
})

//user click input on btn
$(".btn").click(function(){
    
    var colorname_from_userinput= $(this).attr("id"); //color name from userinput;
    userinput_Array.push(colorname_from_userinput);
    
    
    //animation 
    animationfunc(colorname_from_userinput);
    //sound
    sound(colorname_from_userinput);

    //check
    checkAnswer(userinput_Array.length-1);
     //output current level
   
});

// random number function
function randomfunc() {
    userinput_Array=[];
    level++
    $("#level-title").text("Level "+ level);
    var outputrandom =Math.floor(Math.random()*4); // 0 1 2 3 
    var color_output_from_random = array1[outputrandom]; //color names
    random_output_keeping_Array.push(color_output_from_random);

    $('#'+ color_output_from_random).addClass("pressed");
    setTimeout(function(){
        $('#'+ color_output_from_random).removeClass("pressed");
    },100)

    sound(color_output_from_random);

}

//creating check function
// function checkAnswer(current_level) {
//     console.log(random_output_keeping_Array[current_level] === userinput_Array[current_level]);
//     if(random_output_keeping_Array[current_level] === userinput_Array[current_level]){
//         if(random_output_keeping_Array.length ===userinput_Array.length){
//             setTimeout(function(){
//                 randomfunc();
//             },1000)
//         }
//     }else 
//         sound("wrong");
//         $("#level-title").text("Game Over, Press Any Key to Restart");
//         $("body").addClass("game-over");
//         setTimeout(function(){
//             $("body").removeClass("game-over");
//         },200)
//         startOver();
// }


function checkAnswer(current_level) {
    
    if(random_output_keeping_Array[current_level] === userinput_Array[current_level]){
        if(random_output_keeping_Array.length ===userinput_Array.length){ setTimeout(function(){
            randomfunc();
        },1000)}

    }else{
        sound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        startOver();
    }
    
}

//animation function
function animationfunc(colorname) {
    $('#'+ colorname).addClass("pressed");
    setTimeout(function(){
        $('#'+ colorname).removeClass("pressed");
    },100)
}

//sound producing func
function sound(name){
    var audio =new Audio( "sounds/" + name +".mp3");
    audio.play();

}

function startOver(params) {
    level =0;
    random_output_keeping_Array =[];
    start =false;
}