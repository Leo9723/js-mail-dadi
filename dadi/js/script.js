let user_number = parseInt(Math.floor(Math.random()*6)+1)

alert('il tuo numero è ' + user_number)

let pc_number = parseInt(Math.floor(Math.random()*6)+1)

alert('il numero del pc è ' + pc_number)

if (user_number > pc_number) {
    alert('hai vinto')
}

else if (user_number == pc_number) {
    alert('hai pareggiato')
}

else {
    alert('hai perso')
}