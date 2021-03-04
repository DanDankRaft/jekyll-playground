function darkmodestartup()
{
    var body = document.body;
    body.classList.toggle("lightmode");
}

//toggle dark mode through a button
function darkMode()
{
    var body = document.body;
    body.classList.toggle("darkmode");
    body.classList.toggle("lightmode");

}