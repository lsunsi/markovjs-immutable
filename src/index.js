// @flow
import { Map } from 'immutable';

export type MemoryState<A, G, O> = {|
  values: Map<O, Map<A, number>>,
  initial: number,
  observe: G=> O,
|};

const init = <A, G, O>(
  initial: number,
  observe: G=> O,
): MemoryState<A, G, O> => ({
  initial, observe, values: new Map(),
});

const rater = <A, G, O>(
  { initial, observe, values }: MemoryState<A, G, O>,
  game: G,
): (A=> number) => (action: A): number =>
  values.getIn([observe(game), action], initial);

const update = <A, G, O>(
  { initial, observe, values }: MemoryState<A, G, O>,
  game: G,
  action: A,
  updater: number=> number,
): MemoryState<A, G, O> => ({
  initial, observe, values: values.updateIn([observe(game), action], initial, updater),
});

export { init, rater, update };
