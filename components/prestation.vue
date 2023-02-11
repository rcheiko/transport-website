<template>
    <div class="flex flex-col space-y-12 justify-center items-center py-36 lg:px-48 bg-base-300" id="prestation">
        <h1 class="text-4xl font-semibold" data-aos="fade-up" data-aos-duration="2000">Nos Prestations</h1>
        <div class="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-28" data-aos="fade-up"
            data-aos-duration="2000">
            <div class="w-1/2 lg:w-1/4">
                <Icon name="mdi:house-city-outline" size="64" />
                <h1 class="mb-2 text-lg font-semibold">Déménagement</h1>
                <p>
                    Notre équipe expérimentée est équipée pour assurer le transport de vos biens en toute sécurité et
                    efficacité.
                </p>
            </div>

            <div class="w-1/2 lg:w-1/4">
                <Icon name="mdi:human-hand-truck" size="64" />
                <h1 class="mb-2 text-lg font-semibold">Retrait de marchandise</h1>
                <p>
                    Nous offrons des services de retrait de marchandises pour les entreprises et les particuliers.
                    Retrait en magasin, Ikea, but, électro dépôt, etc.
                </p>
            </div>
        </div>

        <div class="flex flex-wrap justify-center gap-28 pt-10 lg:pt-0" data-aos="fade-up" data-aos-duration="2000">
            <div class="w-1/2 lg:w-1/4">
                <Icon name="mdi:home-attic" size="64" />
                <h1 class="mb-2 text-lg font-semibold">Vide grenier</h1>
                <p>
                    Nous proposons des services de vide-grenier pour vous aider à vous débarrasser des objets dont vous
                    n'avez plus besoin.
                </p>
            </div>

            <div class="w-1/2 lg:w-1/4">
                <Icon name="mdi:truck-fast-outline" size="64" />
                <h1 class="mb-2 text-lg font-semibold">Débarras de locaux</h1>
                <p>
                    Nous pouvons vider tous types de locaux, du bureau à l'entrepôt, en passant par la maison ou
                    l'appartement.
                </p>
            </div>
        </div>

    </div>
</template>