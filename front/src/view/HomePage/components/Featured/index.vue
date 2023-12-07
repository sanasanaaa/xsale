<template>
	<div class="feature_area">
		<div class="container">

            <div class="feature_title">
                <h2 ><img src="img/icon/flag-3.png" alt="">Featured Cars</h2>
            </div>
            <div class="feature_items">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" >
                        <SimpleCard />
                    </el-col>
                    <el-col   :xs="24" :sm="12" :md="12" :lg="8" :xl="8" >
                        <SimpleCard />
                    </el-col>
                    <el-col  :xs="24" :sm="24" :md="8" :lg="8" :xl="8" >
                        <SimpleCard />
                    </el-col>

                </el-row>
                

            </div>
			
        </div>
	</div>
</template>

<script>
 import SimpleCard from '@/components/SimpleCard'
export default {
	name: 'Featured',
	components: {
        SimpleCard
	},
	data: function () { 
		return {
			Brands: [
				{ name: '' },
				{ name: '' },
				{ name: '' },
				{ name: '' },
				{ name: '' },
				{ name: '' },
			]
		}
	}
}


</script>

<style lang="scss">

.feature_area {
    // background: url(../img/car-feature-bg.jpg) no-repeat scroll center center;
    background-size: cover;
    z-index: 2;
    background-color: dimgrey;
    position: relative;
    max-height: 461px;
    padding-top: 115px;

    .feature_title{
        margin-bottom: 60px;
        h2 {
            position: relative;
            z-index: 2;
            margin-bottom: 0px;
            font: bold 44px "Barlow", sans-serif;
            color: #34373b;
        }
    }
}

</style>	