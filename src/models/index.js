// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Champion, Event, Attendence } = initSchema(schema);

export {
  Champion,
  Event,
  Attendence
};