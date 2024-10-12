<template>
    <section class="discover-section">
        <div class="overlay"></div>
        <div class="content">
            <h1>Discover a place you love to live</h1>
            <button class="explore-button">Explore properties</button>
        </div>
    </section>
</template>

<style scoped>
.discover-section {
    height: 80vh;
    background-image: url('~/assets/images/landing/banner.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
}

.content {
    position: relative;
    text-align: center;
    color: #ffffff;
    z-index: 1;
}

h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #ffffff;
}

.explore-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background-color: #FF6314;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s ease;
}

.explore-button:hover {
    transform: skew(0, -2deg)
}
</style>
