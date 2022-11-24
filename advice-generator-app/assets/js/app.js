const message = document.getElementById('message');
const spinner = document.getElementById('spinner');
const adviceRequest = document.getElementById('advice-request-button');

async function getAdvice() {

    let adviceJSON = {};
        
    message.classList.toggle('hide');
    spinner.classList.toggle('hide');
    
    do {

        const response = await fetch(
            'https://api.adviceslip.com/advice',
            {
                method: 'GET'            		
            }
        );    
    
        adviceJSON = await response.json();
        

    } while (adviceJSON.slip.advice.length > 75)

    message.innerHTML = `
        <h2>advice #${adviceJSON.slip.id}</h2>

        <p> &ldquo;${adviceJSON.slip.advice}&rdquo; </p>
    `;  

    spinner.classList.toggle('hide');    
    message.classList.toggle('hide');
      
}

adviceRequest.addEventListener('click', () => getAdvice());