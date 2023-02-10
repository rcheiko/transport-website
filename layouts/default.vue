<template>
    <div ref="el">
        <navigation-navbar />
        <slot />
        <navigation-footer />
        <Transition>
            <div v-if="y <= -800" @click="scrollTop()"
                class="hidden lg:inline fixed bottom-0 left-96 cursor-pointer h-10 w-10 bg-primary rounded-lg hover:bg-secondary"
                style="left: 95%; bottom: 4%">
                <Icon name="material-symbols:keyboard-arrow-up-rounded" size="40" />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
const el = ref(null)
const { y } = useElementBounding(el)
const scrollTop = () => {
    window.scrollTo(0, 0)
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>