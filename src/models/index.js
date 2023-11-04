// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Sports = {
  "SOCCER": "SOCCER",
  "BASKETBALL": "BASKETBALL",
  "VOLLEYBALL": "VOLLEYBALL",
  "FOOTBALL": "FOOTBALL",
  "RUNNING": "RUNNING"
};

const { Game, Champion, Event } = initSchema(schema);

export {
  Game,
  Champion,
  Event,
  Sports
};