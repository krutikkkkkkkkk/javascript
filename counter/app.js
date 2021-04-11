let counter  = 0;

function count(clicked_id){
    let id = clicked_id;

    if(id == "increase"){
        counter ++;
        document.getElementById('counter').innerHTML = counter;

    }
    else if(id == "decrease"){
        counter --;
        document.getElementById('counter').innerHTML = counter;

    }
    else if(id == "reset"){
        counter = 0;
        document.getElementById('counter').innerHTML = counter;

    }
    countColor()

}

function countColor(){
    
    if( counter > 0) {
        document.getElementsByTagName('p')[0].style.color = "green";
    }
    else if( counter < 0) {
        document.getElementsByTagName('p')[0].style.color = "red";
    }
    else {
        document.getElementsByTagName('p')[0].style.color = "black";
    }
}