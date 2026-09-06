import 'cypress-mochawesome-reporter/register';
import './commands';

const { register: registerCypressGrep } = require('@cypress/grep');
registerCypressGrep();