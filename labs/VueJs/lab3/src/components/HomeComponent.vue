<template> 
        <h1>Users</h1>

    <div class="container-fluid">
      <div class="row">
        <table class="col-6 offset-3 w-50 mt-5 table table-striped text-center table-bordered">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.first_name}}</td>
                    <td>{{user.last_name}}</td>
                    <td>{{user.gender}}</td>
                    <td><a><router-link :to="`/users/${user.id}`"><i class="fa-solid fa-eye fa-lg text-dark"></i></router-link></a>
                    <!-- <a><router-link :to="`/users/update/${user.id}`"><i class="fa-solid fa-pen-to-square ms-4 fa-lg text-dark"></i></router-link></a> -->
                    <!-- <a  @click="deleteUser(user.id)"><i class="fa-solid fa-trash fa-lg text-dark ms-4"></i></a> -->
                    </td>
                </tr>
          </tbody>
        </table>
      </div>

    </div>
</template>

<script>
import axios from 'axios';
import { ref } from "vue";

export default {
  name: 'homeComponent',
  setup() {

    const users=ref([])


      const getAllUsers = () => {
        axios
          .get("http://localhost:2000/users")
          .then((res) => {
            console.log(res.data);
            users.value = res.data;
          })
          .catch((err) => console.log(err));
      };
  
    //   onMounted(() => {
        getAllUsers();
    //   });

    return {
      users
    };
  },
};
</script>



<style scoped>

</style>