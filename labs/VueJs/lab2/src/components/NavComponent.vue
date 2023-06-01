<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/user/create">Create</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>

    export default {
        name: "navComponent",
    }
</script>

<style scoped>

</style>