function darkmodestartup()
{
    var body = document.body;
    //cookie functionality - if there are no cookies for this page, add one to include dark mode

    body.classList.toggle("lightmode");
}

//toggle dark mode through a button
function darkMode()
{
    var body = document.body;
    body.classList.toggle("darkmode");
    body.classList.toggle("lightmode");

}