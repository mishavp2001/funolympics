/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
      __typename
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
      __typename
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
        __typename
      }
      phone
      email
      paid
      createdAt
      updatedAt
      eventAttendenceId
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
        __typename
      }
      phone
      email
      paid
      createdAt
      updatedAt
      eventAttendenceId
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
        __typename
      }
      phone
      email
      paid
      createdAt
      updatedAt
      eventAttendenceId
      __typename
    }
  }
`;
