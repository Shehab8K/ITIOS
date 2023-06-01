<template>
    <div class="form-container" id="makeMaxWidth">
        <h1>User</h1> 
        <div>ID: {{id}}</div>
        <div>First Name: {{first_name}}</div>
        <div>Last Name: {{last_name}}</div>
        <div>Gender: {{gender}}</div>
    <button @click="back" class="btn btn-dark mt-3">Back</button>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name:"userDetailsComponent",
        data(){
            return{
                id:'',
                first_name:'',
                last_name:'',
                gender:''
            }
        },  
        created(){
            this.getuserById()
        },
          methods:{
                getuserById(){
                this.id = this.$route.params.id;
                console.log(this.id)
                axios.get(` http://localhost:2000/users/${this.id}`)
                .then((res)=>{
                        console.log(res.data)
                        this.id = res.data.id
                        this.first_name = res.data.first_name
                        this.last_name = res.data.last_name
                        this.gender = res.data.gender
                    })
                .catch((err)=>console.log(err))
            },
            back(){
                this.$router.push('/')
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