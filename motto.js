let mottos = [
    "Orange is the new red",
    "On a whooshing strike",
    "Bernie for SG president!",
    "\"The best clown show since The Mercury!\"",
    "Trans rights are Comet rights!",
    "By Antifa supersoldiers, for Antifa supersoldiers",
    "Gay, but not just for Temoc",
    "Exploring the Tobor-Lunch dialectic",
    "AMP but biased",
    "JSOM is literally 1984",
    "ATEC is literally Vuvuzuela",
    "Bisexual Enarc",
    "Socialism is when SG actually does stuff",
    "Jason Smith is awesome!",
    "Want to advertise here? Too fucking bad!",
    "Are you based and good at writing? submit an op-ed today!",
    ];


var index = Math.floor(Math.random() * mottos.length);
document.getElementById("motto").innerHTML = mottos[index];