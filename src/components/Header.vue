<template>
  <header class="header">
     <div class="container">
        <nav class="navbar">
            <router-link to="/lista">Lista</router-link>
            <router-link to="/">Cadastro</router-link>
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
      color: var(--color);
   }

</style>