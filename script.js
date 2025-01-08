function verificar(){
    let prim = document.getElementById('inum1')
    let segun = document.getElementById('inum2')
    let message = document.getElementById('message')

    let num1 = Number(prim.value)
    let num2 = Number(segun.value)

    message.innerHTML = "Verificação:"

    if(num1 > num2){
        message.innerHTML = 'Os números são inválidos. Digite novamente'
        message.style.color = 'red' 
        message.style.display = 'block'
        message.appendChild(message)
    }else{
        message.innerHTML = `Parabéns. Os números são válidos! O número ${num2} é maior que o número ${num1}`
        message.style.color = 'green'
        message.style.display = 'block'
        message.appendChild(message)
    }

}