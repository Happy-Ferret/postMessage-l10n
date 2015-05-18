function format(entry) {
  if (typeof entry === 'string') {
    return {
      value: entry,
      attrs: null,
      overlay: false
    };
  }

  return {
    value: entry.$v,
    attrs: null,
    overlay: false
  };
}
