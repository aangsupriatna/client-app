import gql from 'graphql-tag';
import React from 'react';

export const ME_QUERY = gql`
  query Me{
    me {
      id
      username
      isAdmin
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation($email: String!, $password: String!, $expire: Boolean) {
    login(input:{email: $email, password: $password, expire: $expire}){
      accessToken
      refreshToken
      user {
        id
        username
        isAdmin
      }
    }
  }
`

export const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    addUser(input: {username: $username, email: $email, password: $password }){
      accessToken
      refreshToken
      user {
        id
        username
        email
        isAdmin
      }
    }
  }
`

export const REFRESH_LOGIN_MUTATION = gql`
    mutation($refreshToken: String){
      refreshLogin(refreshToken: $refreshToken){
        accessToken
        refreshToken
      }
    }
  `