<template>
  <div>
    <v-text-field label="User ID" v-model="userId"></v-text-field>
    <v-btn color="grey" margin="5px" @click="findUser">Find User</v-btn>

    
        
        <div v-if="foundUser">
          <h2>Found User</h2>
          <p >ID: {{ foundUser.id }}</p>
          <p >Name: {{ foundUser.name }}</p></div>
        <div v-else>
          <h1 >
            Enter some user ID
          </h1>
        </div>
        
      
    
  
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userId: '',
      foundUser: null,
      bottomSheetVisible: false,
    };
  },
  methods: {
    findUser() {
      if(this.userId){
      axios.get(`http://localhost:7001/users/${this.userId}`)
        .then(response => {
          this.foundUser = response.data;
          this.bottomSheetVisible = true;
        })
        .catch(error => {
          console.error('Error finding user:', error);
          this.foundUser = null;
          this.bottomSheetVisible = false;
        });}

    }
  }
};
</script>
