<template>
    <div class="hero min-h-screen bg-base-200" id="hero">
        <div class="hero-content flex-col lg:flex-row">
            <nuxt-img src="/truck.jpg" alt="Camion de Transport" class="lg:max-w-4xl max-w-full rounded-lg shadow-2xl"
                height="512"  data-aos="fade-right" data-aos-duration="1500"/>
            <div class="flex flex-col justify-center lg:inline"  data-aos="fade-left" data-aos-duration="1500">
                <h1 class="text-5xl font-bold">C'est le moment de déménager !</h1>
                <p class="py-6">
                    Un conseil ? Un devis ? Un rendez-vous ? Nous vous déménageons dans la France entière.
                </p>
                <button @click="scrollInto('contact')" class="btn btn-primary flex justify-center my-2 lg:my-0">Contact</button>
            </div>
        </div>
    </div>
</template>