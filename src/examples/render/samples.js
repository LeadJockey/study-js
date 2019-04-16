(function(exports) {
  "use strict";

  function View(ctx) {
    this.ctx = ctx || document;
    this.html = "";
  }
  View.prototype.createElement = function(node) {
    if (typeof node === "string") return document.createTextNode(node);
    var _element = document.createElement(node.type);
    Object.entries(node.props).forEach(([k, v]) => _element.setAttribute(k, v));
    node.children
      .map(this.createElement.bind(this))
      .forEach(_element.appendChild.bind(_element));
    this.html = _element;
    return _element;
  };
  View.prototype.render = function(node) {
    console.log('node', node);
    
    var _self = this;
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(component) {
      _self.createElement(component);
    });
    this.ctx.innerHTML = "";
    this.ctx.appendChild(this.html);
  };

  exports.View = View;
})((window.modules = window.modules || {}));
