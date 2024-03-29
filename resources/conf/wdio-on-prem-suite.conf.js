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
    // services: ['chromedriver'],
    services: ['chromedriver',
        ['browserstack', {
            testObservability: true,
            testObservabilityOptions: {
                user: process.env.BROWSERSTACK_USERNAME,
                key: process.env.BROWSERSTACK_ACCESS_KEY,
                projectName: 'browserstack-examples-cucumber-webdriverio',
                buildName: 'browserstack-examples-cucumber-webdriverio build',
                buildTag: 'WDIO Cucumber'
            },
        }]
    ],
}

exports.config = _.defaultsDeep(overrides, defaults.config)