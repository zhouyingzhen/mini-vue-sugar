let { deltFor, deltBind } = require('../../modules/directive')
let { normalize } = require('../../modules/normalize')
let { deltElement } = require('../../modules/element')

let fs = require('fs')

let template = fs.readFileSync('./index.vue', 'utf-8')

fs.writeFileSync('./index.wxml', deltElement(deltBind(deltFor(normalize(template)))))