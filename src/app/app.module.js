import 'bootstrap-css-only';

import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './componets/components';

angular.module('app', [
  ComponentsModule.name
]).component('app', appComponent);
