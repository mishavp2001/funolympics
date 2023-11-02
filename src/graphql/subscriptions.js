/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChampion = /* GraphQL */ `
  subscription OnCreateChampion(
    $filter: ModelSubscriptionChampionFilterInput
    $owner: String
  ) {
    onCreateChampion(filter: $filter, owner: $owner) {
      id
      name
      address
      records
      phone
      summary
      img
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
export const onUpdateChampion = /* GraphQL */ `
  subscription OnUpdateChampion(
    $filter: ModelSubscriptionChampionFilterInput
    $owner: String
  ) {
    onUpdateChampion(filter: $filter, owner: $owner) {
      id
      name
      address
      records
      phone
      summary
      img
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
export const onDeleteChampion = /* GraphQL */ `
  subscription OnDeleteChampion(
    $filter: ModelSubscriptionChampionFilterInput
    $owner: String
  ) {
    onDeleteChampion(filter: $filter, owner: $owner) {
      id
      name
      address
      records
      phone
      summary
      img
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onCreateEvent(filter: $filter, owner: $owner) {
      id
      zip
      theme
      summary
      phone
      email
      attendence {
        nextToken
        startedAt
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onUpdateEvent(filter: $filter, owner: $owner) {
      id
      zip
      theme
      summary
      phone
      email
      attendence {
        nextToken
        startedAt
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onDeleteEvent(filter: $filter, owner: $owner) {
      id
      zip
      theme
      summary
      phone
      email
      attendence {
        nextToken
        startedAt
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
export const onCreateAttendence = /* GraphQL */ `
  subscription OnCreateAttendence(
    $filter: ModelSubscriptionAttendenceFilterInput
  ) {
    onCreateAttendence(filter: $filter) {
      id
      attendence {
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
      phone
      email
      paid
      eventID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAttendence = /* GraphQL */ `
  subscription OnUpdateAttendence(
    $filter: ModelSubscriptionAttendenceFilterInput
  ) {
    onUpdateAttendence(filter: $filter) {
      id
      attendence {
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
      phone
      email
      paid
      eventID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAttendence = /* GraphQL */ `
  subscription OnDeleteAttendence(
    $filter: ModelSubscriptionAttendenceFilterInput
  ) {
    onDeleteAttendence(filter: $filter) {
      id
      attendence {
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
      phone
      email
      paid
      eventID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
