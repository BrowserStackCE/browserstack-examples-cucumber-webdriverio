const fs = require("fs");
const wdioParallel = require("wdio-cucumber-parallel-execution");
const sourceSpecDirectory = `./resources/features/**`;
const parallelExecutionReportDirectory = `${process.cwd()}/reports`;

(async () => {
  tmpSpecDirectory = `./.generatedScenarios`;
  await wdioParallel.performSetup({
    sourceSpecDirectory: sourceSpecDirectory,
    tmpSpecDirectory: tmpSpecDirectory,
    cleanTmpSpecDirectory: true,
  });

  if (fs.existsSync(parallelExecutionReportDirectory)) {
    fs.rmSync(parallelExecutionReportDirectory, {
      recursive: true,
      force: true,
    });
  }
  fs.mkdirSync(parallelExecutionReportDirectory);
})();
