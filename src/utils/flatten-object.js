export default function flattenObject(obj, separator = ".", prefix = "") {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + separator : "";
    if (typeof obj[k] === "object")
      Object.assign(acc, flattenObject(obj[k], separator, pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
}
