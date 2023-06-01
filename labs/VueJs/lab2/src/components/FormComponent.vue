<template>
    <div class="form-container" id="makeMaxWidth">
        <h1>Register</h1>
  <form @submit.prevent="createUser">
    <input type="text"  class="form-control mt-3" placeholder="First Name" v-model.trim.lazy="formValues.first_name"/>
    <input type="text"  class="form-control mt-3" placeholder="Last Name" v-model.trim.lazy="formValues.last_name"/>

    <select id="role"  class="form-select mt-3" v-model="formValues.gender">
        <option disabled value="">Select Gender</option>
        <option  value="male">Male</option>
        <option  value="female">Female</option>
    </select>
    <button type="submit" class="btn btn-dark mt-3">Create</button>
  </form>

   

</div>
</template>

<script>
import axios from 'axios'
export default {
    name:"mainPage",
    data(){
        return {
            current: "form",
            formValues: {
                first_name: "",
                last_name: "",
                gender: ""
            },
        }
    },
    methods: {
      createUser(){
                // let user = {
                //    first_name: this.formValues.first_name,
                //    last_name: this.formValues.last_name,
                //    gender: this.formValues.gender,
                // }
               axios.post("http://localhost:2000/users", this.formValues)
               .then((res)=>{
                console.log(res);
                this.formValues.first_name = "";
                this.formValues.last_name = "";
                this.formValues.gender = "";
                this.$router.push("/");
               })
               .catch((err)=>{console.log(err)})
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