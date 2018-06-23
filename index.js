export default function compose(...args) {
  let newObject = true;

  if (args[args.length - 1] === true) {
    args.pop();
    newObject = false;
  }

  newObject && args.unshift({});
  return Object.assign.apply(Object, args);
}
