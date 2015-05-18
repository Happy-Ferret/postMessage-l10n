function createEntry(node, lang, src) {
  var keys = Object.keys(node);

  // the most common scenario: a simple string with no arguments
  if (typeof node.$v === 'string' && keys.length === 2) {
    return node.$v;
  }

  var attrs;

  /* jshint -W084 */
  for (var i = 0, key; key = keys[i]; i++) {
    // skip $i (id), $v (value), $x (index)
    if (key[0] === '$') {
      continue;
    }

    if (!attrs) {
      attrs = Object.create(null);
    }
    attrs[key] = createAttribute(node[key], lang, src, node.$i + '.' + key);
  }

  return {
    id: node.$i,
    value: node.$v !== undefined ? node.$v : null,
    index: node.$x || null,
    attrs: attrs || null,
    lang: {
      lang: lang,
      src: src
    },
    // the dirty guard prevents cyclic or recursive references
    dirty: false
  };
}

function createAttribute(node, lang, src, id) {
  if (typeof node === 'string') {
    return node;
  }

  return {
    id: id,
    value: node.$v || (node !== undefined ? node : null),
    index: node.$x || null,
    lang: {
      lang: lang,
      src: src
    },
    dirty: false
  };
}

function format(entry) {
  if (typeof entry === 'string') {
    return entry;
  }

  return entry.$v;
}
