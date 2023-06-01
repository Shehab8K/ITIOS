<template>
    <div>
<h1>methodsApp</h1>
<h2>{{ num }}</h2>
<button @click="counter"> inc</button>
<br>
fname: <input type="text" v-model.lazy="fname">
lname: <input type="text" v-model.lazy="lname">
<h1>{{ fullName }}</h1>
    </div>
</template>

<script>
import { ref,watch,computed } from 'vue';
    export default {
        name:'methodsApp',
        setup(){
            let num = ref(0);
            let fname = ref('');
            let lname = ref('')
            var counter = function(){
                return ++num.value
            }
            watch([num],(newValue)=>{
                if(newValue>4){
                    alert("danger")
                }
            })
            let fullName =  computed(function(){
                return `the fullname is ${fname.value} ${lname.value}`
            })
            return{
              num,
              counter,
              fname,
              lname,
              fullName
            }
        }
    }
</script>

<style scoped>

</style>