const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('ok')
})
app.use('/api/trigger', require('./routes/api/trigger'))

const PORT = process.env.PORT || 7000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))