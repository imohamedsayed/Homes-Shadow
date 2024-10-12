<template>
    <div class="blogs-page">

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
            <div class="blogs">
                <h2 class="text-center title">Thoughts & Insights</h2>
                <v-row class="mt-16">
                    <v-col cols="12" md="6" lg="4" class="mb-5 left">
                        <v-card elevation="0">
                            <v-img src="~/assets/images/blogs/1.jpeg" height="400" cover></v-img>
                            <v-card-body>
                                <v-list-item-subtitle class="text-muted mt-3">___ May 15, 2024</v-list-item-subtitle>
                                <h3 class="mt-2">Unlock financial clarity with a monthly payment
                                    calculator</h3>
                            </v-card-body>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6" lg="8" class="mb-5 right">
                        <v-card elevation="0">
                            <v-img src="~/assets/images/blogs/2.jpeg" height="400" cover></v-img>
                            <v-card-body>
                                <v-list-item-subtitle class="text-muted mt-3">___ May 15, 2024</v-list-item-subtitle>
                                <h3 class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid
                                    quisquam
                                    dolor, perferendis ipsum consequatur porro animi optio nam eveniet.</h3>
                            </v-card-body>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6" lg="8" class="mb-5 left">
                        <v-card elevation="0">
                            <v-img src="~/assets/images/blogs/3.jpeg" height="400" cover></v-img>
                            <v-card-body>
                                <v-list-item-subtitle class="text-muted mt-3">___ May 15, 2024</v-list-item-subtitle>
                                <h3 class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid
                                    quisquam
                                    dolor, perferendis ipsum consequatur porro animi optio nam eveniet.</h3>
                            </v-card-body>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" class="mb-5 right">
                        <v-card elevation="0">
                            <v-img src="~/assets/images/blogs/4.jpeg" height="400" cover></v-img>
                            <v-card-body>
                                <v-list-item-subtitle class="text-muted mt-3">___ May 15, 2024</v-list-item-subtitle>
                                <h3 class="mt-2">Unlock financial clarity with a monthly payment
                                    calculator</h3>
                            </v-card-body>
                        </v-card>
                    </v-col>
                </v-row>
                <v-pagination class="mt-15" dir="ltr" v-model="page" :length="pagination?.last_page || 10" color="black"
                    @update:model-value="fetchData"></v-pagination>
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
        title: "Blogs",
        disabled: true,
        href: "/blogs",
    },
];

const page = ref(1)

onMounted(() => {
    animations()
});



const animations = () => {
    useGsap.utils.toArray('.right').forEach((box) => {
        useGsap.from(box, {
            x: 200,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: box,
                start: 'top 80%',
                end: 'bottom 20%',
            }
        });
    });
    useGsap.utils.toArray('.left').forEach((box) => {
        useGsap.from(box, {
            x: -200,
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
.blogs-page {
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
}
</style>
