$(document).ready(function()
{
    $(".change-clr").hover(function(e)
    {
        var randomClass = getRandomClass();
        $(e.target).attr("class", randomClass);
    });
});

function getRandomClass()
{
    //Store available css classes
    var classes = new Array("green", "purple", "teal", "violet", "pink", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k");
    
    //Give a random number from 0 to 5
    var randomNumber = Math.floor(Math.random()*16);
    
    return classes[randomNumber];
}
