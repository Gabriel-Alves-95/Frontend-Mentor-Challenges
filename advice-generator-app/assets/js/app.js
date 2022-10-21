const adviceDisplay = document.getElementById('advice-display');
const adviceRequest = document.getElementById('advice-request-button');

async function getAdvice() {

    let adviceJSON = {};    

    adviceDisplay.innerHTML = `
        <div id="spinner">
            <img src="./assets/img/circle-notch-solid.svg" alt="spinner"/>
         </div>
    `;
    
    do {

        const response = await fetch(
            'https://api.adviceslip.com/advice',
            {
                method: 'GET'            		
            }
        );    
    
        adviceJSON = await response.json();
        

    } while (adviceJSON.slip.advice.length > 75)
    
    
    adviceDisplay.innerHTML = `
        <h2>advice #${adviceJSON.slip.id}</h2>

        <p> &ldquo;${adviceJSON.slip.advice}&rdquo; </p>
    `;  

}

adviceRequest.addEventListener('click', () => getAdvice());