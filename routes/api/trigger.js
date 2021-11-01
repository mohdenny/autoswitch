const express = require('express')
const router = express.Router()
const fs = require('fs')
const parser = require('xml2json')

// @route GET api/playlist
// @desc Get all playlist
// @access Private

router.get('/xml', async (req,res) => {
    try {
        fs.readFile('./source/xml/METROTV_20211101_001_BACKUP.xml', (err, data) => {
            const json = parser.toJson(data)

            res.send(json)
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route GET api/playlist
// @desc Get all playlist
// @access Private

router.get('/txt', async (req,res) => {
    try {
        fs.readFile('./source/txt/test.txt', 'utf8', (err, data) => {
            const chunk = data.toString()
            res.send(chunk)
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router