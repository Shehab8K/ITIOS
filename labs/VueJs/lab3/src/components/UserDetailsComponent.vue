<template>
    <div class="form-container" id="makeMaxWidth">
        <h1>User</h1> 
        <div>ID: {{id}}</div>
        <div v-theme="'primary'">First Name: {{first_name}}</div>
        <div v-theme="'warning'">Last Name: {{last_name}}</div>
        <div v-theme="">Gender: {{gender}}</div>
    <button @click="back" class="btn btn-dark mt-3">Back</button>
    </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { reactive, toRefs} from "vue";
    export default {
        name:"userDetailsComponent",
        methods:{
            back(){
                this.$router.push('/')
                }
        }, 
        setup(){
                let user = reactive({
                  id: '',
                  first_name: '',
                  last_name: '',
                  gender: '',
                });
                const route = useRoute();
                const id = route.params.id;
                const getuserById = ()=>{
                axios.get(` http://localhost:2000/users/${id}`)
                .then((res)=>{
                        user.id = res.data.id
                        user.first_name = res.data.first_name
                        user.last_name = res.data.last_name
                        user.gender = res.data.gender

                    })
                .catch((err)=>console.log(err))
            };

            getuserById();
          return{
                ...toRefs(user)
            };
        },

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