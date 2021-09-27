const defaults = require("./wdio.conf.js")
const _ = require("lodash")
const timeStamp = new Date().getTime()

const overrides = {
    user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',
    specs: [
        './resources/features/*.feature'
    ],
    maxInstances: 5,
    capabilities: [{
        'bstack:options': {
            'projectName': 'BrowserStack',
            'buildName': process.env.BROWSERSTACK_BUILD_NAME || 'browserstack-examples-webdriverio - ' + timeStamp,
            'debug': true,
            'networkLogs': true,
            'video': true,
            'maskCommands': 'setValues, getValues, setCookies, getCookies',
            'os': 'Windows',
            'osVersion': '10'
        },
        browserName: 'Chrome',
        browserVersion: 'latest',
        acceptInsecureCerts: true
    }],
    baseUrl: 'http://localhost:3000/',
    services: [
        ['browserstack', {
            browserstackLocal: true
        }]
    ],
    afterScenario: async (world, result) => {
        if (!result.passed) {
            await browser.takeScreenshot()
        }
    }
}

exports.config = _.defaultsDeep(overrides, defaults.config)