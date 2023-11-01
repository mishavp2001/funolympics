import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly zip: string;
  readonly theme: string;
  readonly summary: string;
  readonly phone: string;
  readonly email: string;
  readonly attendence?: (Attendence | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly zip: string;
  readonly theme: string;
  readonly summary: string;
  readonly phone: string;
  readonly email: string;
  readonly attendence: AsyncCollection<Attendence>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerAttendence = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attendence, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly attendence?: Event | null;
  readonly phone: string;
  readonly email: string;
  readonly paid: boolean;
  readonly eventID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventAttendenceId?: string | null;
}

type LazyAttendence = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attendence, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly attendence: AsyncItem<Event | undefined>;
  readonly phone: string;
  readonly email: string;
  readonly paid: boolean;
  readonly eventID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventAttendenceId?: string | null;
}

export declare type Attendence = LazyLoading extends LazyLoadingDisabled ? EagerAttendence : LazyAttendence

export declare const Attendence: (new (init: ModelInit<Attendence>) => Attendence) & {
  copyOf(source: Attendence, mutator: (draft: MutableModel<Attendence>) => MutableModel<Attendence> | void): Attendence;
}