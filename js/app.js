(function() {
    //Select the input element
    const form = document.querySelector('#message-form')
    //Set up Submit Button
    form.addEventListener('submit', function(e){
        // prevent the form's default submission action
        e.preventDefault()
        //Get user's input from from
        const mensagem = document.querySelector('#message')
        const feedback = document.querySelector('.feedback')
        const visualizar = document.querySelector('.message-content')
    
        if (mensagem.value === ''){
            feedback.classList.add('show')
            setTimeout(function(){
            feedback.classList.remove('show')
            }, 2000)
        } else {
            //Change message content and clear the message input
            visualizar.textContent = mensagem.value
            mensagem.value = ''
        }
    })
    })()
    
    