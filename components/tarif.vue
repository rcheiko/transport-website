<template>
    <div class="hero py-36" id="tarif">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <nuxt-img src="/full-truck.jpg" alt="Camion de déménagement" class="max-w-sm rounded-lg shadow-2xl" width="400" height="475" />
            <div>
                <h1 class="text-5xl">Nos <span class="font-semibold">Tarifs</span> !</h1>
                <p class="py-6">
                    Déménagez à Lyon à tout petit prix !
                </p>
                <button @click="scrollInto('contact')" class="btn btn-primary">Faire votre devis</button>
            </div>
        </div>
    </div>
</template>