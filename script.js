
var elements = []


function create(){
    var task = document.querySelector('.add').value.trim()
    if(task != ""){
        elements.push(task)
       // console.log(elements)
       display()
    }
}

function del(index){
    elements.splice(index, 1)
    display()

}

function display(){
    document.querySelector('ul').innerHTML = "";
    for(var i = 0; i < elements.length; i++){
        console.log(elements[i])
        document.querySelector('ul').innerHTML += "<li><div class='search'><input type='checkbox' name='radio'><input type='text' placeholder= " + elements[i] + " disabled='disabled'><div class='cross-icon' onclick='del("+ i +")'><img src='images/icon-cross.svg'></div></div></li>"
    }

}

