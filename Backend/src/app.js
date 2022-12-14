const fs = require('fs')
const exec = require('child_process').exec

const express = require('express')
const cors = require('cors')
const app = express()

app.set('port', process.env.PORT || 8000)

app.use(express.json())
app.use(cors())

const port = app.get('port')

// POST method route

app.post('/api', (req, res) => {
  const { data } = req.body

  fs.writeFile('PeriodicoDatos.dzn', data, (err) => {
    if (!err)
      console.log("PeriodicoDatos.dzn written successfully\n")
      const command = `minizinc --solver Gecode PeriodicoGenerico.mzn PeriodicoDatos.dzn --search-complete-msg "" --soln-sep ""`;
      
      exec(command, (error, stdout, stderr) => {
        if (error !== null) {
          console.log('exec error: ' + error)
          res.json(stderr)
        } else {
          res.json(stdout)
        }
      })
  })
})

// Listening
app.listen(port, () => console.log(`Minizinc server listening on port ${port}`))



