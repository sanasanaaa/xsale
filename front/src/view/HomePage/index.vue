<template>
  <div>
   <Carousel />
   <ServiceCard />
  </div>
</template>
<script>

import Carousel from '../../components/Carousel'
import ServiceCard from '../../components/serviceCard'
export default {
  name: 'home-page',
  components: {
    Carousel,
    ServiceCard
  }

}
</script>

