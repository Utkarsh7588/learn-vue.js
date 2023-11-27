<template>
    <div>
      <h1>Find</h1>
      <form @submit.prevent="findUser">
        <input type="number" v-model="userId" placeholder="Enter user ID">
        <button type="submit">Find User</button>
      </form>
  
      <div v-if="foundUser">
        <h2>Found User</h2>
        <p>ID: {{ foundUser.id }}</p>
        <p>Name: {{ foundUser.name }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],
        userId: '',
        foundUser: null
      };
    },
    methods: {
      findUser() {
        axios.get(`http://localhost:7001/users/${this.userId}`)
          .then(response => {
            this.foundUser = response.data;
          })
          .catch(error => {
            console.error('Error finding user:', error);
            this.foundUser = null;
          });
      }
    }
  };
  </script>

  