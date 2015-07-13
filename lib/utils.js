function define_getter_setter (obj, prop, default_value) {
  var name = '_' + prop;
  Object.defineProperty(obj, prop, {
    get: function () {
      return this[name] || default_value;
    },
    set: function (value) {
      this[name] = value;
    }
  });
}

function define_section (obj, prop, default_value) {
  var section = '_' + prop;
  Object.defineProperty(obj, prop, {
    value: function (name, value) {
      if (value) {
        this[section][name] = value;
      } else {
        return this[section] || default_value;
      }
    }
  });
}

exports.define_getter_setter = define_getter_setter;
exports.define_section = define_section;
