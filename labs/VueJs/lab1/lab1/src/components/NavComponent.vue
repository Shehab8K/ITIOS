<template>
    <div>
        <button @click="$emit('nav',users)"  class="btn btn-outline-dark mt-4">Users</button>
        <button @click="$emit('nav',admins)" class="btn btn-outline-dark ms-3 mt-4">Admins</button>
        <button @click="$emit('nav',form)" class="btn btn-outline-dark ms-3 mt-4">Back</button>
    </div>
</template>

<script>

    export default {
        name: "NavComponent",
        emits: ['nav'],
        data(){
            return{
            users:"users",
            admins:"admins",
            form:"form"
            // current :"form",
            // goUsers(){
            //     this.current = "users";
            //     this.$emit('nav',this.current)
            // },
            // goAdmins(){
            //     this.current = "admins";
            //     this.$emit('nav',this.current)
            // },
            // goForm(){
            //     this.current = "form";
            //     this.$emit('nav',this.current)
            // }
            }
        }
    }
</script>

<style scoped>

</style>