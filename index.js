const vowels = ['a','e','i','o','u','y'];
var noVowelsName = false

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getFirstVowel(name){
    var randomLetter = vowels[getRandomInt(5)];
    var lowerName = name.toString().toLowerCase();
    noVowelsName = false
    for (let i = 0; i < lowerName.length; i++){
       
        if (vowels.includes(lowerName[i])){
            return lowerName[i]
        }
    }
    noVowelsName = true
    return randomLetter
}

function getCoolName(fname, lname){
    fname = fname.toLowerCase()
    lname = lname.toLowerCase()
    var fVowel = getFirstVowel(fname)
    var lVowel = getFirstVowel(lname)
    var coolFname, coolLname

    if (noVowelsName){
        if (fname.length < 2){
            coolFname = fname.toString() + lVowel
        } 
        else {
            coolFname = fname.toString().replace(fname[1], lVowel)
        }
        if (lname.length < 2){
            coolLname = lname.toString() + fVowel
        }
        else {
            coolLname = lname.toString().replace(lname[1], fVowel)
        }
    }
    else {
        coolFname = fname.toString().replace(fVowel, lVowel)
        coolLname = lname.toString().replace(lVowel, fVowel)
    }
    
    coolFname = coolFname[0].toUpperCase() + coolFname.slice(1)
    coolLname = coolLname[0].toUpperCase() + coolLname.slice(1)
    return coolFname + " " + coolLname
}

function coolify(){
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var coolName = getCoolName(fname, lname)
    document.getElementById("coolname").innerHTML = "Cool Name: " + coolName
}

var input = document.getElementById("lname")
input.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault()
        document.getElementById("coolify").click()
    }
})

function toggle(){
    theme = document.getElementById("style")
    text = document.getElementById("toggle")
    if (theme.getAttribute("href") == "style.css"){
        theme.setAttribute("href", "dark.css")
        text.setAttribute("value", "Light")
    } else {
        theme.setAttribute("href", "style.css")
        text.setAttribute("value", "Dark")
    }

}