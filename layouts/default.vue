<script setup lang="ts">
import { RouterView } from "vue-router";
const { locale } = useI18n();
console.log(locale.value);
</script>

<template>
    <v-locale-provider>
        <v-app>
            <WebsiteLayoutFullMain />
            <v-main class="v-main">

                <router-view v-slot="{ Component, route }">
                    <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"
                        mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
                <WebsiteLayoutFullFooter />

            </v-main>
        </v-app>
    </v-locale-provider>
</template>
<style lang="scss" scoped>
.v-main {
    margin: 0 !important;
    --v-layout-left: 0px !important;
    --v-layout-top: 70px !important;
}
</style>
