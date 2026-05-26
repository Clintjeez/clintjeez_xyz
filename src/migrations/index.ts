import * as migration_20260525_101205 from './20260525_101205';

export const migrations = [
  {
    up: migration_20260525_101205.up,
    down: migration_20260525_101205.down,
    name: '20260525_101205'
  },
];
