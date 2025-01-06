function verificar(){
    let prim = document.getElementById('inum1')
    let segun = document.getElementById('inum2')
    let message = document.getElementById('message')

    message.innerHTML = "Verificação:"

    if(prim.value > segun.value){
        message.innerHTML = 'Os números são inválidos. Digite novamente'
        message.style.color = 'red' 
        message.style.display = 'block'
        message.appendChild(message)
    }else{
        message.innerHTML = `Parabéns. Os números são válidos! O número ${segun.value} é maior que o número ${prim.value}`
        message.style.color = 'green'
        message.style.display = 'block'
        message.appendChild(message)
    }

}