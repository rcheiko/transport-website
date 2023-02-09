<template>
    <div>
        <footer class="footer items-center p-4 bg-neutral text-neutral-content">
            <div class="items-center grid-flow-col">
                <nuxt-img src="/favicon-32x32.png" alt="Logo Website un camion de déménagement" />
                <p>
                    2023 © Made with
                    <Icon name="arcticons:hearth" size="16" />
                    by
                    <NuxtLink class="hover:text-secondary" to="https://github.com/rcheiko" target="_blank">
                        Romain
                    </NuxtLink>
                    . All rights reserved.
                </p>
            </div>
            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <NuxtLink to="https://www.facebook.com/roland.lelouard.9" target="_blank">
                    <Icon name="ci:facebook" alt="Facebook Icone" size="26" />
                </NuxtLink>
            </div>
        </footer>
    </div>
</template>