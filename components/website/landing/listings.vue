<template>
    <div class="listings" dir="ltr">
        <v-container style="font-family: lora;">
            <h2 class="font-weight-bold">Featured Listings</h2>
        </v-container>
        <div class="property-slider uk-slider"
            uk-slider="sets: true; autoplay: true; autoplay-interval: 3000; tabindex:-1; role:region; aria-roledescription:carousel; center: true">
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                <ul class="uk-slider-items uk-grid uk-grid-small">
                    <li v-for="i in 10" :key="i" class="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-width-1-4@l">
                        <div class="property-card">
                            <img src="~/assets/images/landing/about-2.jpeg" class="property-image">

                            <div class="details">
                                <h2>wdqdqwd qwidj {{ i }}</h2>
                                <p>lorem+q qwdqwdqw qwdqwdq </p>
                            </div>


                            <div class="property-info">
                                <v-row>
                                    <v-col cols="6">
                                        <v-icon>mdi-home</v-icon> 200
                                    </v-col>
                                    <v-col cols="6">
                                        <v-icon>mdi-home</v-icon> 200
                                    </v-col>
                                    <v-col cols="6">
                                        <v-icon>mdi-home</v-icon> 200
                                    </v-col>
                                    <v-col cols="6">
                                        <v-icon>mdi-home</v-icon> 200
                                    </v-col>
                                </v-row>
                            </div>

                        </div>
                    </li>
                </ul>

                <!-- Navigation buttons -->
                <a class="uk-position-center-left uk-position-small uk-hidden-hover text-black" href="#"
                    uk-slidenav-previous uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover text-black" href="#"
                    uk-slidenav-next uk-slider-item="next"></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Load UIkit CSS and JS dynamically
onMounted(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.16/css/uikit.min.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.16/js/uikit.min.js'
    script.defer = true
    document.body.appendChild(script)

    const iconsScript = document.createElement('script')
    iconsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.16/js/uikit-icons.min.js'
    iconsScript.defer = true
    document.body.appendChild(iconsScript)
})
</script>

<style scoped>
.listings {
    margin-top: 200px;
    direction: ltr !important;
    height: 550px;
}

.property-slider {
    width: 100%;
    margin: 2rem 0;
}

.property-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    margin: 5px;
    width: 100%;
    height: 500px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease
}

.property-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}



.property-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100000;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    padding: 1rem;
    transform: translateY(200px);
    transition: all 0.5s ease
}

.details {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100000;
    backdrop-filter: blur(4px);
    padding: 1rem;
    transform: translateY(0);
    transition: all 0.5s ease
}

.property-card:hover {
    transform: scale(1.05)
}

.property-card:hover .property-info {
    transform: translateY(0);
}

.property-card:hover .details {
    transform: translateY(-100px);
}


.property-info h3 {
    margin-bottom: 0.5rem;
}

.property-info ul {
    list-style-type: none;
    padding: 0;
}

.property-info li {
    margin-bottom: 0.25rem;
}

.property-info i {
    margin-right: 0.5rem;
}

/* Navigation buttons styling */
.uk-position-center-left,
.uk-position-center-right {
    color: #000;
}
</style>
