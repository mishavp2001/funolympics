/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAttendence = /* GraphQL */ `
  query GetAttendence($id: ID!) {
    getAttendence(id: $id) {
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
export const listAttendences = /* GraphQL */ `
  query ListAttendences(
    $filter: ModelAttendenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phone
        email
        paid
        eventID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attendencesByEventID = /* GraphQL */ `
  query AttendencesByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttendenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attendencesByEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        phone
        email
        paid
        eventID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
