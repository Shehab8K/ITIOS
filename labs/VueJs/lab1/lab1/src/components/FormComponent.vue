<template>
    <div class="form-container" id="makeMaxWidth" v-if="current === 'form'">
        <h1>Register</h1>
  <form @submit.prevent="formHandle">
    <input type="text"  class="form-control mt-3" placeholder="Name" v-model.trim.lazy="formValues.name"/>

    <input type="text"  class="form-control mt-3" placeholder="Age" v-model.trim.number.lazy="formValues.age"/>

    <input type="text"  class="form-control mt-3" placeholder="Email" v-model.trim.lazy="formValues.email"/>

    <select id="role"  class="form-select mt-3" v-model="formValues.role">
        <option disabled value="">Select Role</option>
        <option  value="admin">Admin</option>
        <option  value="user">User</option>
    </select>
    <button type="submit" class="btn btn-dark mt-3">ADD</button>
  </form>

   

</div>

<div v-if="current === 'users'">
    <UsersComponent :users="users" @delUser="deleteUser"/>
</div>

<div v-if="current === 'admins'">
    <AdminsComponent :admins="admins" @delAdmin="deleteAdmin"/>
</div>
  <NavComponent @nav="changeCurrent"/>

</template>

<script>
import UsersComponent from './UsersComponent.vue';
import AdminsComponent from './AdminsComponent.vue';
import NavComponent from './NavComponent.vue';
export default {
    name:"mainPage",
    components:{
        UsersComponent,
        AdminsComponent,
        NavComponent
    },
    data(){
        return {
            current: "form",
            formValues: {
                name: "",
                age: null,
                email: "",
                role: ""
            },
            admins:[
                {"id":1, "name":"shehab", "email":"shehab@gmail.com", "age":22 , "role":"user"},
                {"id":2, "name":"mariam", "email":"mariam@gmail.com", "age":22 , "role":"user"},
                {"id":3, "name":"mostafa", "email":"mostafa@gmail.com", "age":22 , "role":"user"},
                {"id":4, "name":"ziad", "email":"ziad@gmail.com", "age":22 , "role":"user"},
                {"id":5, "name":"ahmed", "email":"ahmed@gmail.com", "age":22 , "role":"user"},
            ],
            users:[
                {"id":1, "name":"shehab", "email":"shehab@gmail.com", "age":22 , "role":"user"},
                {"id":2, "name":"mariam", "email":"mariam@gmail.com", "age":22 , "role":"user"},
                {"id":3, "name":"mostafa", "email":"mostafa@gmail.com", "age":22 , "role":"user"},
                {"id":4, "name":"ziad", "email":"ziad@gmail.com", "age":22 , "role":"user"},
                {"id":5, "name":"ahmed", "email":"ahmed@gmail.com", "age":22 , "role":"user"},
            ],
            id: 6,
        }
    },
    methods: {
      formHandle(event){
                let user = {
                   id: this.id,
                   name: this.formValues.name,
                   email: this.formValues.email,
                   age: this.formValues.age,
                   role: this.formValues.role
                }
                this.id++;
                if(user.role === 'admin')
                {
                    this.admins.push(user);
                }else{
                    this.users.push(user);
                }
                event.target.reset();
                this.formValues.name = this.formValues.email = this.formValues.age = this.formValues.role = "";
                console.log("Admins : "+this.admins);
                console.log("Users : "+this.users);
                console.log(this.users);
            },
      changeCurrent(data){
              console.log("Data : "+data);
              console.log("Form : "+this.current);
              this.current = data;
            },
      deleteUser(data){
        const index = this.users.findIndex((user)=>user.id == data)
        if(index > -1){
          this.users.splice(index,1);
        }
      },
      deleteAdmin(data){
        const index = this.admins.findIndex((admin)=>admin.id == data)
        if(index > -1){
          this.admins.splice(index,1);
        }
      }
    }
}
</script>


<style scoped>
html,body{
  margin: 0;
}
.form-container{
  padding: 3em 5em;
  border-radius: 25px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  width: 35em;
  margin: calc(100%/60) auto 0;
}

.btn{
  margin-left: 0;
  width: 5em;
  transition: margin-left;
}

.green{
  box-shadow: 1px 1px 8px 2px rgba(12, 141, 12, 0.8);
  border: none !important;
}

.no  .btn:hover{
  margin-left: 20em !important;
}

.red{
  box-shadow: 1px 1px 8px 2px rgba(183, 12, 12, 0.8);
  border: none !important;
}
@media screen and (max-width: 700px) {
  #makeMaxWidth{
      width: 90% !important;
  }
}
</style>