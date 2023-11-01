/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createAttendence = /* GraphQL */ `
  mutation CreateAttendence(
    $input: CreateAttendenceInput!
    $condition: ModelAttendenceConditionInput
  ) {
    createAttendence(input: $input, condition: $condition) {
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
export const updateAttendence = /* GraphQL */ `
  mutation UpdateAttendence(
    $input: UpdateAttendenceInput!
    $condition: ModelAttendenceConditionInput
  ) {
    updateAttendence(input: $input, condition: $condition) {
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
export const deleteAttendence = /* GraphQL */ `
  mutation DeleteAttendence(
    $input: DeleteAttendenceInput!
    $condition: ModelAttendenceConditionInput
  ) {
    deleteAttendence(input: $input, condition: $condition) {
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
