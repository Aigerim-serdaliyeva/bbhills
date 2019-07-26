<template lang="pug">

-
    var list = ['Чистовая отделка', 'Дизайн интерьера', 'Ландшафтный дизайн']

.home-order.by-white    
    .home-order__wrap.main-container
        .home-order__info
            h2.phen-700 ТАКЖЕ У НАС ВЫ МОЖЕТЕ ЗАКАЗАТЬ:
            .home-order__list.phen-400
                each item,index in list
                    article
                        img(src=`@/assets/images/desktop/home-order-${index + 1}.png`)
                        h3= item

</template>

<script>
export default {};
</script>

<style lang="scss">
.home-order {
    &__wrap {
        text-align: center;
        img {
            display: block;
            margin: 0 auto rem(16);
        }
        h2 {
            font-size: rem(36);
            margin-bottom: rem(40);
        }
        h3 {
            font-size: rem(24);
        }
    }
    &__info {
        width: 100%;
    }
    &__list {
        width: rem(807);
        margin: auto;
        @include flex(space-between, center);
    }
}

@media #{$desktop} {
    .home-order {
        background: url("~@/assets/images/desktop/home-order-bg.jpg");
        @include coverCenter;
        @include sized(rem(750), 100%);
        &__wrap {
            @include sized(100%, 100%);
            @include flex(center, flex-end);
        }
        &__info {
            margin-bottom: rem(50);
        }
    }
}
</style>
