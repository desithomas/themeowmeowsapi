const express = require('express')
const app = express()
const PORT = 8000 
const cors = require('cors')

app.use(cors())

const theMeowMeows = {
    'mustang': {
        'age': 13,
        'name': 'Mustang', 
        'Primary color': 'black',
        'secondary color': 'none',
        'identifiers': 'white patch on lower tummy', 
        'sex': 'male', 
        'status': 'Neutered', 
        'microchipped': 'yes'
    }, 
    'dots': {
        'age': 13,
        'name': 'Dots', 
        'Primary color': 'black',
        'secondary color': 'white',
        'identifiers': 'small white line on lip; white back legs with 2 black circles (dots) on each hind leg', 
        'sex': 'female', 
        'status': 'spayed', 
        'microchipped': 'yes'
    }, 
    'colin': {
        'age': 13,
        'name': 'Colin', 
        'Primary color': 'black',
        'secondary color': 'none',
        'identifiers': 'small white patch on chest. Missing both right side canines.', 
        'sex': 'male', 
        'status': 'neutered', 
        'microchipped': 'yes'
    },
    'big bear': {
        'age': 13,
        'name': 'Big Bear', 
        'Primary color': 'black',
        'secondary color': 'none',
        'identifiers': 'big ol cat, grey lips', 
        'sex': 'male', 
        'status': 'neutered', 
        'microchipped': 'yes'
    },
    'midnight': {
        'age': 13,
        'name': 'Midnight', 
        'Primary color': 'black',
        'secondary color': 'white',
        'identifiers': 'two white stripes on nose bridge; bottom lip is white', 
        'sex': 'female', 
        'status': 'spayed', 
        'microchipped': 'yes'
    }, 
    'dante': {
        'age': 2,
        'name': 'Dante', 
        'Primary color': 'black',
        'secondary color': 'none',
        'identifiers': 'none', 
        'sex': 'male', 
        'status': 'neutered', 
        'microchipped': 'no'
    },
    'unknown': {
        'age': 'unknown', 
        'name': 'unknown', 
        'Primary color': 'unknown',
        'secondary color': 'unknown',
        'identifiers': 'unknown',
        'sex': 'unknown', 
        'status': 'unknown', 
        'microchipped': 'unknown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:kittyName', (request, response) => {
    const kittyName = request.params.kittyName.toLowerCase()
    //response.json(theMeowMeows)
    if(theMeowMeows[kittyName]){
        response.json(theMeowMeows[kittyName])
    }else{
        response.json(theMeowMeows['unknown'])
    }
})



app.listen( process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}, the cats are going to catch it!`)
})