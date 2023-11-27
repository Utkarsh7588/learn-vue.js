<template>
    <div>
      <h1>Delete User</h1>
      <form @submit.prevent="deleteUser">
        <input type="number" v-model="userId" placeholder="Enter user ID">
        <button type="submit">Delete</button>
      </form>
      <div v-if="deleted">
        <h2>Deleted</h2>
      </div>
    </div>

  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data(){
      return{
        deleted:false,
        userId:'',
      }
    },
    methods:{
        deleteUser(){
            axios.delete(`http://localhost:7001/users/${this.userId}`)
            .then(()=>{this.deleted=true;})
            .catch(error=>{
                console.error('Error finding user:', error);
                this.deleted=false;
        })
        }
    }
  }
  </script>
  