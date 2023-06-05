! function(global, factory) {
      if ("function" == typeof define && define.amd) define("/tables/table-dragger", ["jquery", "Site"], factory);
      else if ("undefined" != typeof exports) factory(require("jquery"), require("Site"));
      else {
          var mod = {
              exports: {}
          };
          factory(global.jQuery, global.Site), global.tablesTableDragger = mod.exports
      }
  }(this, function(_jquery, _Site) {
      "use strict";
      var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
          Site = babelHelpers.interopRequireWildcard(_Site);
      (0, _jquery2.default)(document).ready(function($) {
          Site.run(), tableDragger(document.querySelector("#default-table")), tableDragger(document.querySelector("#row-table"), {
              mode: "row"
          }), tableDragger(document.querySelector("#only-body-table"), {
              mode: "row",
              onlyBody: !0
          }), tableDragger(document.querySelector("#handle-table"), {
              dragHandler: ".table-dragger-handle"
          }), tableDragger(document.querySelector("#free-table"), {
              mode: "row",
              onlyBody: !0,
              dragHandler: ".table-dragger-handle"
          }), tableDragger(document.querySelector("#event-table"), {
              mode: "free",
              dragHandler: ".table-dragger-handle",
              onlyBody: !0
          }).on("drag", function() {}).on("drop", function(from, to, el, mode) {}).on("shadowMove", function(from, to, el, mode) {}).on("out", function(el, mode) {})
      })
  });