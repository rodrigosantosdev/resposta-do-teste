<template>
  <header class="header">
     <div class="container">
        <nav class="navbar">
            <router-link class="navbar-item" to="/lista">Lista</router-link>
            <router-link class="navbar-item" to="/">Cadastro</router-link>
        </nav>
    </div>
  </header>
</template>

<script>
export default {
   name: 'Header'
}
</script>

<style>
   .header {
      background: var(--header-color);
      height: 60px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
   }

   .navbar {
      display: flex;
      justify-content: flex-end;
   }
   .navbar-item {
      color: var(--color);
      margin-left: 30px;
   }

</style>