<template>
    <section class=" ai-section">
        <p class="down title text-center">Property Management</p>
        <v-row class="mt-10">
            <v-col cols="12" md="6">
                <div class="d-flex flex-column justify-lg-space-around fill-height left">
                    <p class="mb-3">we help you manage your properties</p>
                    <v-card color="black" prepend-icon="mdi-file-edit-outline" rounded="lg" :title="'service 1'">
                        <v-card-text class="px-14">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ratione id reiciendis
                            omnis tempora iste voluptates minima soluta sunt vel.
                        </v-card-text>
                    </v-card>
                    <v-list style="background: transparent; overflow: hidden">
                        <v-list-item :title="'service 2 '" class="down">
                            <template v-slot:prepend>
                                <v-icon color="skin">mdi-palette</v-icon>
                            </template>
                        </v-list-item>
                        <v-list-item :title="'service3'" class="down">
                            <template v-slot:prepend>
                                <v-icon color="skin">mdi-account-group-outline</v-icon>
                            </template>
                        </v-list-item>
                        <v-list-item :title="'service4'" class="down">
                            <template v-slot:prepend>
                                <v-icon color="skin">mdi-share-variant-outline</v-icon>
                            </template>
                        </v-list-item>
                    </v-list>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <img class="ai-img right rounded-lg" style="width: 100%" src="~/assets/images/landing/about-3.jpeg" />
            </v-col>
        </v-row>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.ai-section {
    margin-top: 200px;

    p {
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
