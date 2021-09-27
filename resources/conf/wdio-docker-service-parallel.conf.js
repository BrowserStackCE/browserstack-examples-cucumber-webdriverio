const defaults = require("./wdio.conf.js")
const _ = require("lodash")

const overrides = {
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hu',
    specs: [
        './resources/features/*.feature'
    ],
    maxInstances: 5,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    baseUrl: 'https://bstackdemo.com/',
    services: ['docker'],
    dockerOptions: {
        image: 'selenium/standalone-chrome',
        healthCheck: 'http://localhost:4444',
        startDelay: 2000,
        options: {
            p: ['4444:4444'],
            shmSize: '2g'
        }
    }
}

exports.config = _.defaultsDeep(overrides, defaults.config)
