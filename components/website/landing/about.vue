<template>
    <section class="about">
        <v-row>
            <v-col cols="12" md="6" class="d-none d-md-block">
                <v-img src="~/assets/images/landing/about-1.jpeg" class="rounded-lg left"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column">
                <p class="title pt-4 up">About Us</p>
                <p class="text-muted mt-6 up">
                    we are committed to guide you through the complexities of the property market with precision and
                    expertise. inspired by the brilliance and clarity of our namesake star. we strive to illuminate your
                    path to find the perfect property
                </p>
                <v-spacer></v-spacer>
                <v-img src="~/assets/images/landing/about-3.jpeg" height="300px" cover class="rounded-lg right"></v-img>
            </v-col>
        </v-row>
    </section>
</template>
<script setup>
onMounted(() => {

})
</script>

<style lang="scss" scoped>
.about {
    margin-top: 100px;

    p {
        &.title {
            font-size: 30px;
            font-weight: bold;
        }
    }
}
</style>
