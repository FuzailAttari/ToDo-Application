var ol= document.getElementById("Ol")

function todo(){
    var getinp = document.getElementById("inp")
    var li= document.createElement("li")
    var litext= document.createTextNode(getinp.value)
    li.appendChild(litext)
    ol.appendChild(li)
    getinp.value= ""

}
function Del(){
        ol.innerHTML=""
}