const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

let phrasalVerbs = {
    'lookforward' : {
    'meaning' : 'esperar con ilusion',
    'example' : "I'm looking forward to my holiday"
},
'pickup' : {
    'meaning' : 'recoger',
    'example' : "Pick up your books"
},
'putupwith' : {
    'meaning' : 'aguantar',
    'example' : "I can't put up with the hot weather"
}
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:phrasal', (request, response) => {
    const phrasal = request.params.phrasal
    if(phrasalVerbs[phrasal])  
    response.json(phrasalVerbs[phrasal])
    else
    response(phrasalVerbs(pickup))
})


app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})