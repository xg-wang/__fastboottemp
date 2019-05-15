import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    this._super(...arguments);
    return fetch('/robots.txt').then(res => res.text());
  }
});
