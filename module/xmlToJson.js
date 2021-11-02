const fs = require('fs')
const parser = require('xml2json')

const xmlToJson = (file) => {
    fs.readFile(file, (err, data) => {
        const json = parser.toJson(data)
        return json
    })
}

module.exports = xmlToJson(file)