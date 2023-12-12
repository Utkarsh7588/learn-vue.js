<template>
  <h1>Home</h1>
  <div class="button-container">
    <v-btn @click="goToListUsers" class="btn" color="green">List Users</v-btn>
    <v-btn @click="goToFindUser" class="btn" color="green">Find User</v-btn>
    <v-btn @click="goToUpdateUser" class="btn" color="green">Update User</v-btn>
    <v-btn @click="goToDeleteUser" class="btn" color="green">Delete User</v-btn>
    <v-btn @click="goToCreateUser" class="btn" color="green">Create User</v-btn>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goToListUsers = () => {
      router.push({ name: 'ListUsers' });
    };
    const goToFindUser = () => {
      router.push({ name: 'FindUser' });
    };
    const goToUpdateUser = () => {
      router.push({ name: 'UpdateUser' });
    };
    const goToDeleteUser = () => {
      router.push({ name: 'DeleteUser' });
    };
    const goToCreateUser=()=>{
      router.push({name:'CreateUser'});
    };

    return { goToListUsers, goToFindUser, goToUpdateUser, goToDeleteUser,goToCreateUser };
  }
}
</script>

<style>
body {
  background-color: grey;
}
.button-container {
  text-align: center;
  padding: 20px;
}

.btn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}


</style>
