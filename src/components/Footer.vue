<template>
  <footer class="footer">
     <div class="container">
         <p>Rodrigo Teixeira Santos 2021</p>
     </div>
  </footer>
</template>

<script>
export default {
   name: "Footer"
}
</script>

<style scoped>
   footer {
      width: 100%;
      background: var(--color-primary);
      height: 80px;
      color: var(--color);
      font-weight: bold;
      line-height: 80px;
      margin-top: 20px;
   }

    @media screen and (min-width: 768px) {
      .container {
         max-width: 768px;
         margin: auto;
      }   
   }
</style>