const app = require('express')()
const ruo = require('ruo')

app.use(ruo.getRestMiddleware())

app.listen(8000, () => {
  console.log('Server listen on http://localhost:8000')
})
