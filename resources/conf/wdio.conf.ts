const fs = require("fs");
const wdioParallel = require("wdio-cucumber-parallel-execution");
const reporter = require("cucumber-html-reporter");
const currentTime = new Date().toJSON().replace(/:/g, "-");
const parallelExecutionReportDirectory = `${process.cwd()}/reports`;

exports.config = {
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "cucumber",
  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        useCucumberStepReporter: true,
      },
    ],
    [
      "cucumberjs-json",
      {
        jsonFolder: `./reports`,
        language: "en",
      },
    ],
  ],
  cucumberOpts: {
    require: ["./src/stepdefs/*.steps.ts"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    format: ["pretty"],
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: async () => {},

  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: async () => {
    try {
      let consolidatedJsonArray = await wdioParallel.getConsolidatedData({
        parallelExecutionReportDirectory: parallelExecutionReportDirectory,
      });

      let jsonFile = `${parallelExecutionReportDirectory}/report.json`;
      fs.writeFileSync(jsonFile, JSON.stringify(consolidatedJsonArray));

      var options = {
        theme: "bootstrap",
        jsonFile: jsonFile,
        output: `./reports/report-${currentTime}.html`,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        ignoreBadJsonFile: true,
      };

      await reporter.generate(options);
    } catch (err) {
      console.log("err", err);
    }
  },
};
