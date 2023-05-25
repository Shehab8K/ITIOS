<template> 
        <h1>Admins</h1>

    <div class="container-fluid">
      <div class="row">
        <table class="col-6 offset-3 w-50 mt-5 table table-striped text-center table-bordered">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Delete</th>
              </tr>
          </thead>
          <tbody>
                <tr v-for="admin in admins" :key="admin.id">
                    <td>{{admin.id}}</td>
                    <td>{{admin.name}}</td>
                    <td>{{admin.age}}</td>
                    <td>{{admin.email}}</td>
                    <td><a @click="$emit('delAdmin',admin.id)"><i class="fa-solid fa-trash fa-lg text-dark"></i></a></td>
                </tr>
          </tbody>
        </table>
      </div>


    </div>
</template>

<script>
    export default {
        name: "UsersComponent",
        props: ['admins'],
        data(){
            return{
              
            }
        }
    }
</script>

<style scoped>

</style>