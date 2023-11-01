// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, Attendence } = initSchema(schema);

export {
  Event,
  Attendence
};