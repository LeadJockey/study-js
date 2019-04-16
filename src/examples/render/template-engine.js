(function(exports) {
  "use strict";

  exports.Template = Template;

  function Template() {
    this.template = {};
  }

  Template.prototype = {
    add: function(id, template) {
      if (this.template[id]){
        return console.log("해당 아이디로 이미 저장된 template 이 있습니다.");
      }
      this.template[id] = template;
      return this;
    },
    parse: function(node) {
      var _html = "";
      var _self = this;
      var type = node.type || "";
      var attr = node.attr || {};
      var text = node.text || "";
      var children = node.children || [];
      _html = this.create(type, attr, text);
      children.forEach(function(childNode, index) {
        _html.appendChild(_self.parse(childNode));
      });
      return _html;
    },
    create: function(type, attr, text) {
      var _element = document.createElement(type);
      var _textNode = document.createTextNode(text);
      Object.keys(attr).forEach(function(key, index) {
        _element.setAttribute(key, attr[key]);
      });
      _element.appendChild(_textNode);
      return _element;
    },
    render: function(targetElement, id) {
      targetElement.appendChild(this.template[id]);
    }
  };
})(window);
