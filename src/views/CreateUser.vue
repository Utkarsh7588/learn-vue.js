<template>
    <div>
        <h1>Create User</h1>
        <form @submit.prevent="createUser">
            <input type="text" v-model="newUserName">
            <button type="submit">Create User</button>
        </form>
    </div>
    <div v-if="created">
        <h2>
            User Created
        </h2>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data (){
        return{
            created:false,
            newUserName:'',
        };
    },
    methods:{
        createUser(){
            const userData={
                name:this.newUserName,
            };
            axios.post('http://localhost:7001/users',userData)
            .then(()=>{this.created=true})
            .catch(error=>{console.error('Error updating user:', error);
            this.created=false;
        });
        }
    }
};
</script>