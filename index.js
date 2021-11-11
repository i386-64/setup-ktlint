const core = require('@actions/core');
const shell = require('shelljs');

function run() {
  try {
    const version = core.getInput('version');

    core.info('Installing Ktlint');
    shell.exec(`
      curl -sSLO https://github.com/pinterest/ktlint/releases/download/${version}/ktlint && \\
      chmod a+x ktlint && \\
      sudo mv ktlint /usr/local/bin/
    `);

    core.setOutput('version', shell.exec('ktlint --version').stdout);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();