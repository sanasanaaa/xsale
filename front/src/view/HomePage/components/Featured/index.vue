<template>
	<div class="feature_area">
		<div class="container">

            <div class="feature_title">
                <h2 ><img src="img/icon/flag-3.png" alt="">Featured Cars</h2>
            </div>
            <div class="feature_items">
                <SimpleCard />

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