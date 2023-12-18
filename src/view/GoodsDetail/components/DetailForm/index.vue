<template>
    <div class="goods_detail_form">
        <ul class="nav">
            <li class="nav_item" v-for="(item,index) in navList" :key="index" >
                <a>
                    <i></i>
                    {{item.title}}
                    <span>
                        {{item.value}}
                    </span>
                </a>
            </li>
           
        </ul>
    </div>
</template>

<script>
export default {
    name: 'goodsform',
    
    data:function() {
        return {
            aaa:'',
            navList: [
                {
                    icon: '',
                    title: '商品详情',
                    value:'123456',
                },
                {
                    icon: '',
                    title: '商品详情',
                    value:'123456',
                },
                {
                    icon: '',
                    title: '商品详情',
                    value:'123456',
                },
                {
                    icon: '',
                    title: '商品详情',
                    value:'123456',
                },
                {
                    icon: '',
                    title: '商品详情',
                    value:'123456',
                },
                {
                    icon: '',
                    title: '商品详情',
                    value:'123456',
                },
                {
                    icon: '',
                    title: '商品详情',
                    value:'123456',
                },
                {
                    icon: '',
                    title: '商品详情',
                    value:'123456',
                },
                {
                    icon: '',
                    title: '商品详情',
                    value:'123456',
                }
                
            ]
        }
    }
}
</script>

<style lang="scss">
    .goods_detail_form{
         
        .nav{
            flex-direction: column;
            display: flex;
            list-style: none;
            background: #f5f7f7;
            padding: 0px 30px;
            padding-top: 3px;
            li a{
                line-height: 60px;
                display: block;
                border-bottom: 1px solid #dddddd;
                color: #777777;
                cursor: auto;

                span {
                    float: right;
                    color: #34373b;
                    font-weight: bold;
                }
            }

            li:last-child a {
                    border: none;
            }

        }
    }
</style>