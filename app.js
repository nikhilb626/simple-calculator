

function calculate(){
    let x=parseInt(document.getElementById('first').value);
    let y=parseInt(document.getElementById('second').value);
    let z;
    if(document.getElementById('plus').checked){
        z=x+y;
    }
    else if(document.getElementById('minus').checked){
        z=x-y;

    }
    else if(document.getElementById('multiply').checked){
        z=x*y;
    }
    else if(document.getElementById('divide'),checked){
        z=x/y;
    }

    document.getElementById('output').innerHTML="Result : "+String(z);
}

