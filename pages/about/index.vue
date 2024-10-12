<template>
    <div class="about-page">
        <v-container>
            <v-breadcrumbs :items="items">
                <template v-slot:prepend>
                    <v-btn icon elevation="0" class="bg-background" to="/">
                        <v-icon class="mx-1" size="small" icon="mdi-home" color="black100"></v-icon>
                    </v-btn>
                    <v-icon icon="mdi-chevron-right" v-if="$i18n?.locale === 'EN'"></v-icon>
                    <v-icon icon="mdi-chevron-right" v-else></v-icon>
                </template>
                <template v-slot:divider v-if="$i18n?.locale === 'EN'">
                    <v-icon icon="mdi-chevron-left"></v-icon>
                </template>
                <template v-slot:divider v-else>
                    <v-icon icon="mdi-chevron-left"></v-icon>
                </template>
            </v-breadcrumbs>
            <div class="about-content">
                <h2 class="text-center title">About Us</h2>

                <div class="why mt-16">
                    <v-row class="text-center justify-center">
                        <v-col cols="12" md="4">
                            <div class="why-box up">
                                <img src="~/assets/images/about/house.png" alt="">
                                <p class="title text-orange">Wide range of properties</p>
                                <p class="text text-body-1">We offers expert legal help for all related property items
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div class="why-box up">
                                <img src="~/assets/images/about/home.png" alt="">
                                <p class="title text-orange">Buy or rent homes</p>
                                <p class="text text-body-1">We sell your home at the best market price and very quickly
                                    as well
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div class="why-box up">
                                <img src="~/assets/images/about/security.png" alt="">
                                <p class="title text-orange">Trusted by thousands</p>
                                <p class="text text-body-1">We offer you free consultancy to get a loan for your new
                                    home</p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script setup>
definePageMeta({
    enterClass: 'animate__animated animate__fadeInLeft',
    leaveClass: 'animate__animated animate__fadeOutRight'
})
const items = [
    {
        title: "About",
        disabled: true,
        href: "/about",
    },
];

onMounted(() => {
    animation()
})

const animation = () => {
    useGsap.utils.toArray('.up').forEach((box) => {
        useGsap.from(box, {
            y: 200,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: box,
                start: 'top 80%',
                end: 'bottom 20%',
            }
        });
    });
}
</script>

<style lang="scss" scoped>
.about-page {
    padding: 50px 0;

    h2 {
        &.title {
            font-size: 40px;
            font-weight: 900;
            line-height: 150%;

            @media (max-width: 1200px) {
                font-size: 2.25rem;
            }

            @media (max-width: 992px) {
                font-size: 2rem;
            }

            @media (max-width: 768px) {
                font-size: 1.75rem;
            }

            @media (max-width: 576px) {
                font-size: 1.5rem;
            }

            @media (max-width: 400px) {
                font-size: 1.25rem;
            }
        }
    }

    .about-content {
        .why {
            .why-box {
                img {
                    width: 80px;
                }

                p {
                    &.title {
                        font-size: 1.25rem;
                        font-weight: 700;
                        line-height: 150%;
                        margin-top: 10px;
                    }

                    &.text {
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 150%;
                        margin-top: 10px;
                    }
                }
            }
        }
    }
}
</style>
