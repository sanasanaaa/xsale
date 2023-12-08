<template>
    <div class="servicecard_item">
        <div class="icon">
            {{itemData.icon}}
        </div>
        <a href="">
            <h4>{{itemData.title}}</h4>
        </a>
        <p>{{itemData.description}}</p>
    </div>
</template>

<script>

export default {
    name: "service_card_item",
    props: {
        itemData: Object,
    },
    setup(props) { 
        console.log(props)
    },
    mounted: function () { 

    }
}

</script>

<style lang="scss">
    .servicecard_item{

        .icon{
            position: relative;
            height: 91px;
            width: 91px;
            text-align: center;
            line-height: 90px;
            margin-bottom: 20px;

        }

        a {
            text-decoration: none;
            transition: all 0.3s linear;

            h4{
                font: bold 24px "Barlow", sans-serif;
                margin-bottom: 13px;
                color: #fff;
                transition: color 0.2s linear;
            }

            

        }
        p {
            display: block;
            color: #fff;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
               
        }
    }
</style>