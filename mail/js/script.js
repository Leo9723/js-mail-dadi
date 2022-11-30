const array = ['harrypotter@gmail.com', 'frodobaggins@gmail.com', 'sauronsignoredimordor@icloud.com', 'albusparcifalwulfricbryansilente@outlook.com', 'jonsnow@winterfell.we']

let user_mail = prompt('inserisci la tua mail')

let flag = false;
for(let i=0; i<array.length; i++){
    if(array[i] == user_mail){
        flag = true;
    }
}

if(flag){
    alert('la tua mail è presente')
}

else{
    alert('la tua mail non è presente')
}