const common = {
  require: [
    'src/support/**/*.js',
    'src/steps/**/*.js'
  ],
  format: [
    'progress',
    'html:reports/cucumber-report.html'
  ],
  formatOptions: {
    snippetInterface: 'async-await'
  },
  publishQuiet: true,
  paths: ['features/**/*.feature']
};

module.exports = {
  default: common
};
