import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Sports {
  SOCCER = "SOCCER",
  BASKETBALL = "BASKETBALL",
  VOLLEYBALL = "VOLLEYBALL",
  FOOTBALL = "FOOTBALL",
  RUNNING = "RUNNING"
}

type EagerS3Object = {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
}

type LazyS3Object = {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
}

export declare type S3Object = LazyLoading extends LazyLoadingDisabled ? EagerS3Object : LazyS3Object

export declare const S3Object: (new (init: ModelInit<S3Object>) => S3Object)

type EagerGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly summary?: string | null;
  readonly tags: Sports[] | Array<keyof typeof Sports>;
  readonly rules: string[];
  readonly examples?: (string | null)[] | null;
  readonly likes?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly summary?: string | null;
  readonly tags: Sports[] | Array<keyof typeof Sports>;
  readonly rules: string[];
  readonly examples?: (string | null)[] | null;
  readonly likes?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Game = LazyLoading extends LazyLoadingDisabled ? EagerGame : LazyGame

export declare const Game: (new (init: ModelInit<Game>) => Game) & {
  copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

type EagerChampion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Champion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly records?: (string | null)[] | null;
  readonly phone?: string | null;
  readonly summary?: string | null;
  readonly imgS3?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChampion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Champion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly records?: (string | null)[] | null;
  readonly phone?: string | null;
  readonly summary?: string | null;
  readonly imgS3?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Champion = LazyLoading extends LazyLoadingDisabled ? EagerChampion : LazyChampion

export declare const Champion: (new (init: ModelInit<Champion>) => Champion) & {
  copyOf(source: Champion, mutator: (draft: MutableModel<Champion>) => MutableModel<Champion> | void): Champion;
}

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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}