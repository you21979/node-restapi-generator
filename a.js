const fs = require('fs')
const yaml = require('js-yaml')

const data = yaml.safeLoad(fs.readFileSync("./fixture/test.yml"))

data.apis.map(api => {
console.log(api)
})

