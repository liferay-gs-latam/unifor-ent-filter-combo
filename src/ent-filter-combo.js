;(function (AUI, $) {
  'use strict'

  const DEFAULT_OPTIONS = {}

  function initSelect2 () {
    return this.$element.select2(this.options)
  }

  function addResetListener () {
    var $field = this.$element,
        $form = this.$element.closest('form'),
        defaultValue  = $field.val()

    $form.on('reset', function() {
      $field.val(defaultValue).trigger('change')
    })
  }

  class FilterCombo {
    constructor (userOptions = {}) {
      if (!$ || !$.prototype.select2) throw new Error('Dependencies "jquery" or "select2" not found!')
      if (!userOptions.selector) throw new Error('Option "selector" Required!')

      this.options = $.extend({}, DEFAULT_OPTIONS, userOptions)

      this.$element = $(this.options.selector)
      this.$instance = initSelect2.call(this)

      addResetListener.call(this)
    }
  }

  AUI.add('ent-filter-combo', function (A) {
    A.FilterCombo = FilterCombo
  }, '1.0.7', {
    'requires': []
  })

})(window.AUI || window.YUI, window.$)
