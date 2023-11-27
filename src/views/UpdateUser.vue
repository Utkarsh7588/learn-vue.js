<template>
    <div>
      <h1>Update User</h1>
      <form @submit.prevent="updateUser">
        <input type="number" v-model="updateUserId" placeholder="Enter user ID">
        <input type="text" v-model="updateUserName" placeholder="Enter new name">
        <button type="submit">Update User</button>
      </form>
  
      <div v-if="updatedUser">
        <h2>{{ updatedUser }}</h2>
      </div>
  
      <!-- ... existing code for listing users ... -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        // ... existing data properties ...
        updateUserId: '',
        updateUserName: '',
        updatedUser: null
      };
    },
    // ... existing mounted and other methods ...
    methods: {
      // ... existing methods ...
      updateUser() {
        const userData = {
          id: parseInt(this.updateUserId),  
          name: this.updateUserName
        };
        axios.put(`http://localhost:7001/users`, userData)
          .then(response => {
            this.updatedUser = response.data;
          })
          .catch(error => {
            console.error('Error updating user:', error);
            this.updatedUser = null;
          });
      }
    }
  };
  </script>
  
  <style>
  /* ... existing styles ... */
  </style>
  