let counter  = 0;
document.getElementById('counter').innerHTML = counter;

function count(clicked_id){
    let id = clicked_id;

    if(id == "increase"){
        counter += 1;
        document.getElementById('counter').innerHTML = counter;

    }
    else if(id == "decrease"){
        counter -= 1;
        document.getElementById('counter').innerHTML = counter;

    }
    else if(id == "reset"){
        counter = 0;
        document.getElementById('counter').innerHTML = counter;

    }

}