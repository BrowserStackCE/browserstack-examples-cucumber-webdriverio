const defaults = require("./wdio.conf.js")
const _ = require("lodash")
const timeStamp = new Date().getTime()
var path = require('path');

const overrides = {
    user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',
    specs: [
        `${path.resolve(__dirname)}/../../.generatedScenarios/*.feature`
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
    baseUrl: 'https://bstackdemo.com/',
    services: [
        ['browserstack', {
            testObservability: true,
            testObservabilityOptions: {
                'projectName': 'browserstack-examples-cucumber-webdriverio',
                'buildName': 'browserstack-examples-cucumber-webdriverio build',
                'buildTag': 'WDIO Cucumber'
            },
        }]
    ],
    afterScenario: async (world, result) => {
        if (!result.passed) {
            await browser.takeScreenshot()
        }
    }
}
exports.config = _.defaultsDeep(overrides, defaults.config)