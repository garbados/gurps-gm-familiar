function _get_or_set (name, default_value) {
  if (name[0] !== '_') {
    name = ['_', name].join('');
  }

  return (function (value) {
    if (value) {
      this[name] = value;
    }

    return this[name] || default_value;
  }).bind(this);
}

function _group_get_or_set (section, default_value) {
  if (section[0] !== '_') {
    section = ['_', section].join('');
  }
  this[section] = {};

  return (function (name, value) {
    if (value) {
      this[section][name] = value;
    }

    return this[section][name] || default_value;
  }).bind(this);
}

exports._get_or_set = _get_or_set;
exports._group_get_or_set = _group_get_or_set;
