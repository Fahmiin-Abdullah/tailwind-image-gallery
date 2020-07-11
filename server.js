const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, 'build')

app.use(cors())
app.use(express.static(publicPath))

app.get('*', (req, res) => res.sendFile(path.join(publicPath, 'index.html')))

app.listen(port, () => console.log(`Server started on posrt ${port}...`))
