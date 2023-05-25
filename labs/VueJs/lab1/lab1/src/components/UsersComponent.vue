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
                  <th>Delete <i class="fa-solid fa-trashfa-lg text-dark"></i></th>
              </tr>
          </thead>
          <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.age}}</td>
                    <td>{{user.email}}</td>
                    <td><a  @click="$emit('delUser',user.id)"><i class="fa-solid fa-trash fa-lg text-dark"></i></a></td>
                </tr>
          </tbody>
        </table>
      </div>

    </div>
</template>

<script>

    export default {
        name: "UsersComponent",
        props: ['users'],
        data(){
            return{
       
            }
        }
    }
</script>

<style scoped>

</style>