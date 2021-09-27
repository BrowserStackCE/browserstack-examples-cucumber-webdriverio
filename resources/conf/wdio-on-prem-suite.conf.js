const defaults = require("./wdio.conf.js")
const _ = require("lodash")

const overrides = {
    specs: [
        './resources/features/*.feature'
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    baseUrl: 'https://bstackdemo.com/',
    services: ['chromedriver']
}

exports.config = _.defaultsDeep(overrides, defaults.config)