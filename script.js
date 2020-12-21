var elements = []

window.onload = function(){
    if(JSON.parse(localStorage.getItem("todo-elements")) != null){
        elements = JSON.parse(localStorage.getItem("todo-elements"))
        display()
    }
}

function display(){
    document.querySelector('ul').innerHTML = "";
    for(var i = 0; i < elements.length; i++){
        console.log(elements[i])
        document.querySelector('ul').innerHTML += "<li><div class='display-text'><input type='checkbox' name='radio' onclick='strike("+i+")'><div class='display-text'>"+elements[i]+"</div></div><div class='cross-icon' onclick='del("+i+")'><img src='images/icon-cross.svg'></div></li>"
    }
}

function create(){
    var task = document.querySelector('.add').value.trim()
    if(task != ""){
        elements.push(task)
        localStorage.setItem('todo-elements', JSON.stringify(elements))
        display()
    }
}

function del(index){
    elements.splice(index)
    localStorage.setItem('todo-elements', JSON.stringify(elements))
    display()
}

function strike(index){
    if(elements[index].includes("<strike>") ){
        elements[index] = elements[index].replace("<strike>", "")
        elements[index] = elements[index].replace("</strike>", "")
    }else{
        elements[index] = "<strike>"+elements[index]+"</strike>"
    }
    localStorage.setItem('todo-elements', JSON.stringify(elements))
    display()
}

