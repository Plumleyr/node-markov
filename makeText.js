/** Command-line tool to generate Markov text. */
const MarkovMachine = require('./markov')
const axios = require('axios')
const fs = require('fs')

function generateText(text){
    let mm = new MarkovMachine(text)
    console.log(mm.makeText())
}

function makeFileText(path){
    fs.readFile(path, 'utf8', (error, data) => {
        if(error){
            console.error('Error:', error)
            process.exit(1)
        }
        generateText(data)
    })
}

async function makeUrlText(url){
    try{
       axios.get(url).then(resp =>{generateText(resp.data)})
    } catch (error){
        console.error('Error:', error)
        process.exit(1)
    }
}

if(process.argv[2] === 'file'){
    makeFileText(process.argv[3])
}else{
    makeUrlText(process.argv[3])
}