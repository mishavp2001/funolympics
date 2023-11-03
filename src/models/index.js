// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Champion, Event } = initSchema(schema);

export {
  Champion,
  Event
};