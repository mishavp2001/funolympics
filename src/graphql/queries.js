/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
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
        createdAt
        updatedAt
        eventAttendenceId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
