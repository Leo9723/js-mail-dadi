const button = document.getElementById('button')

button.addEventListener('click', function(){

    let user_mail = document.getElementById('user_mail').value

    const array = ['harrypotter@gmail.com', 'frodobaggins@gmail.com', 'sauronsignoredimordor@icloud.com', 'albusparcifalwulfricbryansilente@outlook.com', 'jonsnow@winterfell.we']

    let flag = false;
    for(let i=0; i<array.length; i++){
        if(array[i] == user_mail){
            flag = true;
        }
    }
    
    if(flag){
        document.getElementById('esit').innerHTML = 'la tua mail è presente tra le mail autorizzate'
    }
    
    else{
        document.getElementById('esit').innerHTML = 'la tua mail non è presente tra le mail autorizzate'
    }
})
