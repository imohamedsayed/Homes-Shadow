<script setup lang="ts">
import sidebarItems from './vertical-sidebar/sidebarItem';
import { Menu2Icon, UserPlusIcon, LoginIcon, LogoutIcon, HomeIcon } from 'vue-tabler-icons';
import { useAuthStore } from '#imports';
const sidebarMenu = shallowRef(sidebarItems);

const sDrawer = ref(false);

const user = computed(() => useAuthStore().User)

const logout = () => {
    useAuthStore().logout()
}
</script>

<template>
    <div>
        <!------Sidebar-------->
        <v-navigation-drawer left elevation="0" app class="leftSidebar d-flex d-md-none" v-model="sDrawer">
            <!---Logo part -->
            <div class="pa-5 text-center">
                <img src="~/assets/images/logo.png" width="60px" class="mx-4 mx-auto">
            </div>

            <!-- ---------------------------------------------- -->
            <!---Navigation -->
            <!-- ---------------------------------------------- -->
            <div>
                <perfect-scrollbar class="scrollnavbar">
                    <v-list class="pa-6">
                        <!---Menu Loop -->
                        <template v-for="(item) in sidebarMenu">
                            <!---Item Sub Header -->
                            <WebsiteLayoutFullVerticalSidebarNavGroup :item="item" v-if="item.header"
                                :key="item.title" />

                            <!---Single Item-->
                            <WebsiteLayoutFullVerticalSidebarNavItem :item="item" v-else class="leftPadding" />
                            <!---End Single Item-->
                        </template>
                        <v-list-item to="/login" rounded class="mb-1" active-color="primary" v-if="!user">
                            <!---If icon-->
                            <template v-slot:prepend>
                                <LoginIcon />
                            </template>
                            <v-list-item-title>Login</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/register" rounded class="mb-1" active-color="primary" v-if="!user">
                            <!---If icon-->
                            <template v-slot:prepend>
                                <UserPlusIcon />
                            </template>
                            <v-list-item-title>Signup</v-list-item-title>
                        </v-list-item>
                        <v-list-item rounded class="mb-1" active-color="primary" v-if="user" @click="logout">
                            <!---If icon-->
                            <template v-slot:prepend>
                                <LogoutIcon />
                            </template>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    <div class="pa-4">
                    </div>
                </perfect-scrollbar>
            </div>
        </v-navigation-drawer>

        <!------Header-------->
        <v-app-bar elevation="0" height="70" class="v-header" :app="false">
            <div class="d-flex align-center justify-space-between w-100 px-3">
                <div class="d-flex align-center px-2">
                    <v-btn class=" ms-md-3 ms-sm-5 ms-3 text-muted d-block d-md-none" @click="sDrawer = !sDrawer" icon
                        variant="flat" size="small">
                        <Menu2Icon size="20" stroke-width="1.5" />
                    </v-btn>

                    <HomeIcon size="40" />
                </div>
                <div class="navs d-none d-md-block">
                    <v-list class="d-flex ">
                        <v-list-item to="/" link>Home</v-list-item>
                        <v-list-item to="/about">About</v-list-item>
                        <v-list-item>States</v-list-item>
                        <v-list-item>property management </v-list-item>
                        <v-list-item>our services </v-list-item>
                        <v-list-item>Buy </v-list-item>
                        <v-list-item to='/blogs' link>Blogs </v-list-item>
                        <v-list-item>Contact us </v-list-item>
                    </v-list>
                </div>
                <div>
                    <!--Localization-->
                    <WebsiteLayoutFullVerticalHeaderLanguage />

                    <v-btn class="custom-hover-primary btn-icon ml-2" variant="text" icon to="/wish-list" color="skin">
                        <v-badge color="error" :content="0" max="9">
                            <IconsHeart />
                        </v-badge>
                    </v-btn>

                    <!-- Notification -->
                    <WebsiteLayoutFullVerticalHeaderNotificationDD v-if="user" />
                    <!-- Auth buttons -->
                    <WebsiteLayoutFullVerticalHeaderProfileDD v-if="user" />
                    <v-btn variant="outlined" to="/" class="bg-black ms-4 me-6 " v-else>Login</v-btn>
                </div>
            </div>
        </v-app-bar>


    </div>

</template>

<style lang="scss">
.v-header {

    left: auto !important;
    width: 100% !important;

}
</style>
