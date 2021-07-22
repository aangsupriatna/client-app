import React from 'react';
import gql from 'graphql-tag';

export const PROJECTS_QUERY = gql`
  query {
    projects {
      id
      name
      scope
      location
      assignor
      address
      date
      number
      amount
      joint
      with
      bast
      bastDate
    }
  }
`
export const PROJECT_QUERY = gql`
  query($id: ID!) {
    project(id: $id) {
      id
      name
      scope
      location
      assignor
      address
      date
      number
      amount
      joint
      with
      bast
      bastDate
    }
  }
`

export const ADD_PROJECT_MUTATION = gql`
  mutation(
    $name: String,
    $scope: String,
    $location: String,
    $assignor: String,
    $address: String,
    $date: String,
    $number: String,
    $amount: String,
    $joint: Int,
    $with: String,
    $bastDate: String,
    $bast: String,
    ){
      addProject(input: {
        name: $name,
        scope: $scope,
        location: $location,
        assignor: $assignor,
        address: $address,
        date: $date,
        number: $number,
        amount: $amount,
        joint: $joint,
        with: $with,
        bastDate: $bastDate,
        bast: $bast,
      }){
        id
        name
        scope
        location
        assignor
        address
        date
        number
        amount
        joint
        with
        bast
        bastDate
      }
    }
`

export const UPDATE_PROJECT_MUTATION = gql`
  mutation(
    $id: ID,
    $name: String,
    $scope: String,
    $location: String,
    $assignor: String,
    $address: String,
    $date: String,
    $number: String,
    $amount: String,
    $joint: Int,
    $with: String,
    $bastDate: String,
    $bast: String,
    ){
      updateProject(input: {
        id: $id,
        name: $name,
        scope: $scope,
        location: $location,
        assignor: $assignor,
        address: $address,
        date: $date,
        number: $number,
        amount: $amount,
        joint: $joint,
        with: $with,
        bastDate: $bastDate,
        bast: $bast,
      }){
        id
        name
        scope
        location
        assignor
        address
        date
        number
        amount
        joint
        with
        bast
        bastDate
      }
    }
`

export const DELETE_PROJECT_MUTATION = `
  mutation removeProject($id: ID){
    removeProject(id:$id){
          id
          name
      }
  }
`