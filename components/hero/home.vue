<template>
    <div class="hero min-h-screen bg-base-200" id="hero">
        <div class="hero-content flex-col lg:flex-row">
            <nuxt-img src="/truck.jpg" alt="Camion de déménagement" class="max-w-sm rounded-lg shadow-2xl"
                height="512" />
            <div class="flex flex-col justify-center lg:inline">
                <h1 class="text-5xl font-bold">C'est le moment de déménager !</h1>
                <p class="py-6">
                    Un conseil ? Un devis ? Un rendez-vous ? Nous vous déménageons dans la France entière.
                </p>
                <button @click="scrollInto('contact')" class="btn btn-primary flex justify-center my-2 lg:my-0">Contact</button>
            </div>
        </div>
    </div>
</template>