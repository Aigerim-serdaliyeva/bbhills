<template lang="pug">

footer.footer#footer
    .footer__wrap
        .footer__contacts
            h2 Контакты
            p(
                v-for="item in contacts"
                :key="item.id"
                
            )


</template>

<script>
export default {
    data() {
        return {
            contacts: require('@/assets/json/footer')
        }
    }
}
</script>
