<template>
    <div class="intro ">
        <div class="overlay "></div>
        <v-container class="content">
            <v-row class="mb-15">
                <v-col cols="6"></v-col>
                <v-col cols="12" lg="6">
                    <h1 class="text-white mb-7 animate__animated animate__fadeInDown"> Own Your Luxury Property
                        Now !</h1>
                    <v-btn variant="outlined" color="white" size="large"
                        class="animate__animated animate__fadeInDown">Explore Now</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <div class="social-links mb-5 animate__animated animate__fadeInRight">
                        <v-btn icon="mdi-facebook" variant="outlined" elevation="0"
                            class="bg-transparent text-white me-1"></v-btn>
                        <v-btn icon="mdi-instagram" variant="outlined" elevation="0"
                            class="bg-transparent text-white mx-2"></v-btn>
                        <v-btn icon="mdi-twitter" variant="outlined" elevation="0"
                            class="bg-transparent text-white mx-2"></v-btn>
                        <v-btn icon="mdi-youtube" variant="outlined" elevation="0"
                            class="bg-transparent text-white ms-1"></v-btn>
                    </div>
                    <p class=" mb-5 text-grey-lighten-2 animate__animated animate__fadeInRight">discover a range of
                        luxury and bank-owned properties
                        available for
                        purchase.
                        these listings
                        offers unique opportunities</p>

                </v-col>
                <v-col cols="12" md="6">


                    <v-row>
                        <v-col cols="4">
                            <div class="img">
                                <v-img cover src="~/assets/images/landing/1.jpeg" height="150px" class="rounded-md">
                                    <template v-slot:placeholder>
                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-progress-circular color="grey-lighten-4"
                                                indeterminate></v-progress-circular>
                                        </div>
                                    </template></v-img>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <div class="img">
                                <v-img cover src="~/assets/images/landing/2.jpeg" height="150px" class="rounded-md">
                                    <template v-slot:placeholder>
                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-progress-circular color="grey-lighten-4"
                                                indeterminate></v-progress-circular>
                                        </div>
                                    </template></v-img>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <div class="img">
                                <v-img cover src="~/assets/images/landing/3.jpeg" height="150px" class="rounded-md">
                                    <template v-slot:placeholder>
                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-progress-circular color="grey-lighten-4"
                                                indeterminate></v-progress-circular>
                                        </div>
                                    </template></v-img>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style lang="scss" scoped>
.intro {
    position: relative;
    background-image: url('~/assets/images/landing/intro.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vh - 70px);
    width: 100%;
    display: flex;
    align-items: center;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    .content {
        position: relative;
        z-index: 2;

        h1 {
            font-size: 42px;
            font-weight: 700;
        }
    }
}
</style>
