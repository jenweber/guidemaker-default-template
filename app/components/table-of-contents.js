import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  fastboot: service(),
  guidemaker: service(),

  level: '0',
  tagName: 'ol',
  tocLevel: computed('level', function() {
    return `toc-level-${this.level}`;
  }),
  classNameBindings: ['tocLevel'],

  init() {
    this.set('guidemaker.collapseToc', true);
    this._super(...arguments)
  }
});
