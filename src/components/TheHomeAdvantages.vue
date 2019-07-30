<template lang="pug">

-
    var info = {
        title: 'Преимущества',
        list: ['Экологически чистый район', 'Панорамный вид на город', 'Чистый воздух', 'Элитное соседство', 'Свободная планировка', 'Гараж на 2 автомобиля', 'Терасса на крыше', 'Личный участок земли', 'Автономная отопительная система', 'Центральная канализация и водоснабжение', 'Высокий уровень сейсмостойкости', 'Инфраструктура (детская игровая площадка, зоны отдыха, зона барбекю, мини-маркет)', 'Круглосуточно охраняемая территория комплекса, пропускная система, видеонаблюдение']
    }

.home-advantages#home-advantages.by-white.by-0-mob
    .home-advantages__img.mob.mob-def-img.by-white
    .home-advantages__wrap.mob-container
        .home-advantages__part
        .home-advantages__part.phen-400
            article
                h2.phen-700= info.title
                each item in info.list
                    h3 • !{item}

</template>

<style lang="scss">
.home-advantages {
    &__wrap {
        h2 {
            font-size: rem(48);
            text-transform: uppercase;
        }
        h3 {
            @include fonted(rem(24), rem(39));
        }
    }
}

@media #{$desktop} {
    .home-advantages {
        padding: rem(50) 0;
        background: url("~@/assets/images/desktop/home-advantages-bg.jpg");
        @include coverCenter;
        &__wrap {
            display: flex;
            article {
                padding-left: rem(80);
                h2 {
                    margin-bottom: rem(10);
                }
                h3 {
                    width: rem(435);
                }
            }
        }
        &__part {
            flex: 1;
        }
    }
}

@media #{$mobile} {
    .home-advantages {
        &__wrap {
            padding-top: rem(50);
            padding-bottom: rem(50);
        }
        &__img {
            background: url("~@/assets/images/mobile/home-advantages-img.jpg");
        }
    }
}
</style>
