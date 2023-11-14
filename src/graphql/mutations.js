/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      summary
      tags
      rules
      examples
      likes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      summary
      tags
      rules
      examples
      likes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      summary
      tags
      rules
      examples
      likes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createChampion = /* GraphQL */ `
  mutation CreateChampion(
    $input: CreateChampionInput!
    $condition: ModelChampionConditionInput
  ) {
    createChampion(input: $input, condition: $condition) {
      id
      name
      address
      records
      phone
      summary
      img {
        bucket
        region
        key
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateChampion = /* GraphQL */ `
  mutation UpdateChampion(
    $input: UpdateChampionInput!
    $condition: ModelChampionConditionInput
  ) {
    updateChampion(input: $input, condition: $condition) {
      id
      name
      address
      records
      phone
      summary
      img {
        bucket
        region
        key
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteChampion = /* GraphQL */ `
  mutation DeleteChampion(
    $input: DeleteChampionInput!
    $condition: ModelChampionConditionInput
  ) {
    deleteChampion(input: $input, condition: $condition) {
      id
      name
      address
      records
      phone
      summary
      img {
        bucket
        region
        key
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      zip
      theme
      summary
      phone
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      zip
      theme
      summary
      phone
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      zip
      theme
      summary
      phone
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
