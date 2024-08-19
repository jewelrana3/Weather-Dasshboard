function getTimedFormed(value, type, inMs) {
  if (!type) return value;

  if (!inMs) {
    value = value * 1000;
  }

  const date = new Date(value);

  let options;
  if (type === "date") {
    options = {
      weekday: "long",
      day: "numeric",
      year: "numeric",
      month: "long",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }
  return new Intl.DateTimeFormat("en-us", options).format(date);
}

export { getTimedFormed };
