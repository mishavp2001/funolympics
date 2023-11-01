/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        __typename
      }
      createdAt
      updatedAt
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
        __typename
      }
      createdAt
      updatedAt
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
        __typename
      }
      createdAt
      updatedAt
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
        owner
        __typename
      }
      phone
      email
      paid
      eventID
      createdAt
      updatedAt
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
        owner
        __typename
      }
      phone
      email
      paid
      eventID
      createdAt
      updatedAt
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
        owner
        __typename
      }
      phone
      email
      paid
      eventID
      createdAt
      updatedAt
      __typename
    }
  }
`;
