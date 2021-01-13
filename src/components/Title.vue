<template>
  <div class="wrapper">
      <div class="container">
         <h1>{{ msg }}</h1>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Title',
   props: {
      msg: String
   }
}
</script>

<style>
 .wrapper {
      width: 100%;
      background: var(--background-color-title);
      padding: 25px 0;
   }

   .wrapper h1 {
      color: var(--color-title);
      font-weight: bold;
      font-size: 50px;
   }
</style>