<template>
    <div class="navbar bg-base-300 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-50">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <Icon name="charm:menu-hamburger" alt="hamburger menu" size="36" />
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-64 font-semibold">
                    <li>
                        <div @click="scrollInto('prestation')">Nos Prestations</div>
                    </li>
                    <li>
                        <div @click="scrollInto('tarif')">Nos Tarifs</div>
                    </li>
                    <li>
                        <div @click="scrollInto('contact')">Contact</div>
                    </li>
                </ul>
            </div>
            <div @click="scrollInto('hero')" class="flex items-center px-4 space-x-4 cursor-pointer">
                <nuxt-img src="/logo.png" alt="Logo Website un camion de déménagement" width="50" height="50" />
                <a class="font-semibold normal-case text-xl">Roro Transport</a>
            </div>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 font-semibold space-x-6">
                <li class="hover:bg-primary rounded-lg">
                    <div @click="scrollInto('prestation')">Nos Prestations</div>
                </li>
                <li class="hover:bg-primary rounded-lg">
                    <div @click="scrollInto('tarif')">Nos Tarifs</div>
                </li>
                <li class="hover:bg-primary rounded-lg">
                    <div @click="scrollInto('contact')">Contact</div>
                </li>
            </ul>
        </div>
        <div class="navbar-end" />
    </div>
</template>