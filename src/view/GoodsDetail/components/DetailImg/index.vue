<template>
    <div class="carImg">
        <div class="magnify" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <!-- <div class="magnify-glass"></div> -->
            <div class="magnify-image" style="background-image: url('http://60.204.242.148/img/product/product-details-1.jpg');">
                <!-- <img src="http://60.204.242.148/img/product/product-details-1.jpg"/> -->
            </div>
        </div>
    </div>
    <agile ref="carousel" class="detailImageList" :slides-to-show="3" autoplay :navButtons="false" :dots="false">
    <div class="slide" @click="cc">
        <div style="background-image:url('http://60.204.242.148/img/product/product-details-1.jpg') ;"></div>

    </div>
    <div class="slide">
        <div style="background-image:url('http://60.204.242.148/img/product/product-details-1.jpg') ;"></div>

    </div>
    <div class="slide">
        <div style="background-image:url('http://60.204.242.148/img/product/product-details-1.jpg') ;"></div>
    </div>
    <div class="slide">
        <div style="background-image:url('http://60.204.242.148/img/product/product-details-1.jpg') ;"></div>

    </div>
    <div class="slide">
        <div style="background-image:url('http://60.204.242.148/img/product/product-details-1.jpg') ;"></div>

    </div>
  </agile>
</template>


<script>
import { VueAgile } from 'vue-agile'
export default {
    name: 'magnify',
    components: {
        agile: VueAgile
    },
    data() { 

    },
    methods: {
        onMouseMove(e) { 
            const magnify = document.querySelector('.magnify');
            const image = document.querySelector('.magnify-image');
            const { offsetX, offsetY } = e;
            const { width, height } = magnify.getBoundingClientRect();
            const x = (offsetX / width) * width;
            const y = (offsetY / height) * height;
            const zoomFactor = 2;
            const backgroundX = -x * (zoomFactor - 1);
            const backgroundY = -y * (zoomFactor - 1);
            image.style.backgroundSize = `${zoomFactor * 100}% ${zoomFactor * 100}%`;
            image.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;
        },
        onMouseLeave() { 
            const image = document.querySelector('.magnify-image');
            image.style.backgroundSize = 'cover';
            image.style.backgroundSize = '100% 100%'
            image.style.backgroundPosition = '0 0';
            
        },
        //设置激活图片
        setActiveImage(index) { 
            this.$refs.carousel.goTo(index)
        }
    },
}

</script>

<style lang="scss" scoped>
.carImg{
    width: 100%;
 
    position: relative;
    left: 0px;
    top: 0px;
    margin-top: 10px;
    z-index: 999;
    opacity: 1;
    .magnify{
        width: 100%; /* 设置 div 宽度为容器的宽度 */
        padding-top:72.57%; /* 设置 padding-top 为宽度的百分比，以保持 4:3 的宽高比例 */
        position: relative;
    }
    
    .magnify-image{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    
}

.detailImageList{
    padding-top: 20px;
    margin-left: -10px;
    margin-right: -10px;
    position: relative;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;

}
.slide{
    padding: 10px;
    div{
    width: 100%; /* 设置 div 宽度为容器的宽度 */
    padding-top:72.57%; /* 设置 padding-top 为宽度的百分比，以保持 4:3 的宽高比例 */
    position: relative;
    background-size: 100% 100%;
    
    }
    }
</style>