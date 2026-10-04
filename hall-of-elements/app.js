const ringButton=document.querySelector('#bell-button')
const royalMsg=document.querySelector('#royal-message')

function ring(event){

    if(event.target===ringButton)
    royalMsg.textContent='🔔 The Royal Bell is ringing! Codoria has been warned!'
    ringButton.disabled=true
    ringButton.textContent='Bell Activated!'
}



ringButton.addEventListener('click',ring)