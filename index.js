const express = require("express")
const app = express()

app.use(express.static('./public'))

app.all('*', (req, res) => {
    res.status(404).send("<h1>Page not found</h1>")
  })




app.listen(process.env.PORT || 5000, () => {
    console.log("Server is listening on port 5000...")
})