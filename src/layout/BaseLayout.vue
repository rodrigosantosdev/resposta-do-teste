<template>
   <div>
      <Header />
         <slot />
      <Footer />
   </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
   name: 'BaseLayout',
   components: { 
      Header,
      Footer
},

}
</script>

<style>

</style>