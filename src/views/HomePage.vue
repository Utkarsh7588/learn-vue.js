<template>
  <h1>Home</h1>
  <div class="button-container">
    <button @click="goToListUsers" class="btn">List Users</button>
    <button @click="goToFindUser" class="btn">Find User</button>
    <button @click="goToUpdateUser" class="btn">Update User</button>
    <button @click="goToDeleteUser" class="btn">Delete User</button>
    <button @click="goToCreateUser" class="btn">Create User</button>
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

.btn:hover {
  background-color: white;
  color: black;
  border: 10px solid white;
  
}
</style>
