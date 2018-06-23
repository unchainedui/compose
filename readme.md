# Unchained UI

## Compose

Simple way to build complex components

### Usage

```js
import compose from 'uc-compose'
import { log, LOG_LEVEL } from 'uc-log'

const MyClass = function() {}
MyClass.prototype = compose(
  log,
  {
    logLevel: LOG_LEVEL.DEBUG,
    logName: 'My Class',
    method: function() {
      this.log(LOG_LEVEL.INFO, 'Hello')
    }
  }
)
```
### Methods

#### compose(...args)

This function is just syntax sugar around `Object.assign`. It always returns **new object**. To extent existing object pass `true` as the last argument.

License MIT

© velocityzen

