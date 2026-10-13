document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest () {
   const theMeowMeows = document.querySelector('input').value 
   try{
        const response = await fetch(`https://themeowmeowsapi.onrender.com/${kittyName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.name
   }catch(error){
    console.log(error)
   }
}