function format(entry) {
  if (typeof entry === 'string') {
    return entry;
  }

  return entry.$v;
}
