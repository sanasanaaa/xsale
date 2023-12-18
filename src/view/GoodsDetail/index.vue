<template>
    <div class="goods_detail_area">
		<RouterCard title="Goods Detail" />
		<div class="p_100">
			<div class="container">
			
					<el-row >
						<el-col  :xs="24" :sm="16" :md="16" :lg="16" :xl="16" >
							<div class="goods_detail_area_left">
								<Detailheader />
								<DetailImg />
							</div>
							
						</el-col>
						<el-col  :xs="24" :sm="8" :md="8" :lg="8" :xl="8" >
							<div class="goods_detail_area_right">
								<MoreBt />
								<DetailForm />
							</div>
						
						</el-col>
					</el-row>
					<OverView/>
			</div>

		</div>
    </div>
  </template>
  
  <script>
  
  import RouterCard from '@/components/RouterCard'
	import Detailheader from './components/DetailHeader'
	import DetailImg from './components/DetailImg'
	import DetailForm from './components/DetailForm'
	import MoreBt from './components/More'
	import OverView from './components/OverView'
  export default {
    name: 'about',
    components: {
			RouterCard,
			Detailheader,
			DetailImg,
			DetailForm,
			MoreBt,
			OverView
    },
   
    mounted() {
      console.log(this.$route.params.id)
    },
  }
  </script>
  
<style lang="scss">
 .goods_detail_area{

	.goods_detail_area_left,.goods_detail_area_right{
		padding-left: 15px;
		padding-right: 15px;
	}

 }

</style>
  