const defaults = require("./wdio.conf.js");
const _ = require("lodash");

const overrides = {
  hostname: "localhost",
  port: 4444,
  path: "/wd/hu",
  specs: ["../features/*/*.feature"],
  maxInstances: 5,
  capabilities: [
    {
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],
  baseUrl: "https://bstackdemo.com/",
  services: [
    "docker",
    [
      "browserstack",
      {
        testObservability: true,
        testObservabilityOptions: {
          user: process.env.BROWSERSTACK_USERNAME,
          key: process.env.BROWSERSTACK_ACCESS_KEY,
          projectName: "browserstack-examples-cucumber-webdriverio",
          buildName: "browserstack-examples-cucumber-webdriverio build",
          buildTag: "WDIO Cucumber",
        },
      },
    ],
  ],
  dockerOptions: {
    image: "selenium/standalone-chrome",
    healthCheck: "http://localhost:4444",
    startDelay: 2000,
    options: {
      p: ["4444:4444"],
      shmSize: "2g",
    },
  },
};

exports.config = _.defaultsDeep(overrides, defaults.config);
