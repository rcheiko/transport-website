<template>
    <div class="py-8 sm:py-16 lg:py-48" id="contact">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <!-- text - start -->
            <div class="mb-10 md:mb-24" data-aos="fade-up" data-aos-duration="2000">
                <h2 class="text-2xl lg:text-5xl font-bold text-center mb-4 md:mb-10">Contact</h2>

                <p class="max-w-screen-md md:text-lg text-center mx-auto">
                    Pour bénéficier d'une estimation rapide et efficace, veuillez nous transmettre les informations
                    ci-dessous en composant le numéro
                    <NuxtLink to="tel:33647993425" class="font-bold text-secondary hover:opacity-90 cursor-pointer">
                        06 47 99 34 25
                    </NuxtLink>
                </p>
            </div>
            <!-- text - end -->

            <h2 class="mb-10 md:mb-24 text-2xl font-semibold text-center" data-aos="fade-up" data-aos-duration="2000">
                Comment est calculé le devis ?
            </h2>


            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16" data-aos="fade-up"
                data-aos-duration="2000">
                <!-- question - start -->
                <div>
                    <h3 class="text-lg md:text-xl font-bold mb-2">Distance</h3>
                    <p>
                        La distance parcourue est calculée en fonction de l'adresse de départ et d'arrivée.
                    </p>
                </div>
                <!-- question - end -->

                <!-- question - start -->
                <div>
                    <h3 class="text-lg md:text-xl font-bold mb-2">Appartement / Maison</h3>
                    <p>
                        Nous prenons en compte la position du logement, notamment la présence d'un ascenseur et/ou les
                        étages. Nous prenons donc en compte le nombre d'étages.
                    </p>
                </div>
                <!-- question - end -->

                <!-- question - start -->
                <div>
                    <h3 class="text-lg md:text-xl font-bold mb-2">Quantite / Mains D'oeuvre</h3>
                    <p>
                        La quantité à déménager est prise en compte, et le nombre de personnes nécessaire pour le
                        déménagement.
                    </p>
                </div>
                <!-- question - end -->
            </div>
        </div>
    </div>
</template>