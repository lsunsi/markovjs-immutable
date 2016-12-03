# markovjs-immutable

###### npm install markovjs-immutable

[![Release](https://img.shields.io/badge/Release-0.1.0.SNAPSHOT-blue.svg?style=flat-square)](https://github.com/lsunsi/markovjs-immutable/releases)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://github.com/lsunsi/markovjs-immutable/blob/master/LICENSE)

This is a memory implementation for [markovjs](https://github.com/lsunsi/markovjs) based on [immutablejs](https://github.com/facebook/immutable-js/).

It provides an easier way to code the observation function while adding support for immutable data structures, enforcing great design patterns on your game model code.

## Usage
This package exports the required `update` and `rater` functions, alongside an `init` one used for getting the initial value.

```javascript
import markov from 'markovjs'
import * as memory from 'markovjs-immutable'

const m = memory.init(0.0, a => a)
markov().memory(memory, m)
```

The initializer functions has the following signature:
```javascript
// A: action type
// G: game state type
// O: observation type
type Init = <A, G, O>(number, G=> O) => MemoryState<A, G, O>
```
The first parameter is the initial value for all unset memory slots.

The second one is the `observe` function. It maps an `game state type (G)` to an `observation type (O)`.
It serves the purpose as `toString` does in the default memory implementation, but expecting an `immutable value` as the return type instead of a `string`.

This is one of the great things this package provides: a way for you to code your state and agent observation in a higher level letting the package figure how to store the data.

It's important to note that while the `observation value` **needs** to be immutable, your `game state value` do not.
That said, it's encouraged that you code it as an immutable value as well.

## Thanks
[ImmutableJS](https://facebook.github.io/immutable-js/), man.
What an awesome package.
