<template>
  <div>
   <Carousel />
   <ServiceCard />
   <LatestCollection />
   <PopularBrands />
   <Featured />
  </div>
</template>
<script>

import Carousel from '../../components/Carousel'
import ServiceCard from '../../components/ServiceCard'
import  LatestCollection  from './components/LatestCollection'
import  PopularBrands  from './components/PopularBrands'
import  Featured  from './components/Featured'
export default {
  name: 'home-page',
  components: {
    Carousel,
    ServiceCard,
    LatestCollection,
    PopularBrands,
    Featured
  }

}
</script>

