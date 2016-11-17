export default function PromiseProps(obj) {
  var keys = Object.keys(obj);

  let values = keys.reduce((prev, _, i) => {
    prev.push(obj[keys[i]]);
    return prev;
  }, []);

  return Promise.all(values)
    .then(arr => (
      keys.reduce((prev, k, i) => {
        prev[k] = arr[i];
        return prev;
      }, {})
    ));
}
