<script setup>
import SearchIcon from './icons/SearchIcon.vue'
import UserIcon from './icons/UserIcon.vue'
import FavorisIcon from './icons/FavorisIcon.vue'
import PanierIcon from './icons/PanierIcon.vue'
</script>

<template>
    <header class="">
        <div class="grid grid-cols-7 bg-noir1E">
            <div></div>
            <div class="py-2 flex justify-between bg-noir1E text-blanc font-nunito text-sm col-span-5">
                <div class="flex items-center">
                    <img src="../assets/icn/camion-icon.png" alt="Livraison" class="mr-[10px]">
                    <p>Livraison gratuite au-dessus de 100€</p>
                </div>
                <div class="flex">
                    <select class="outline-none border-[0.8px] bg-noir1E border-blanc border-solid border-opacity-10 border-t-0 border-b-0 border-l-0">
                        <option>Français</option>
                        <option>English</option>
                    </select>
                    <select class="ml-5 outline-none border-[0.8px] bg-noir1E border-blanc border-solid border-opacity-10 border-t-0 border-b-0 border-l-0">
                        <option>EUR €</option>
                        <option>USD $</option>
                    </select>
                </div>
            </div>
            <div></div>
        </div>
        <nav class="grid grid-cols-7">
            <div></div>
            <ul class="grid grid-cols-6 py-7 bg-blanc text-noir11 font-nunito col-span-5">
                <div class="flex items-center">
                    <li class="text-4xl font-bold">
                        <RouterLink to="/">TAVUE</RouterLink>
                    </li>
                </div>

                <div class="col-span-4 flex items-center justify-center space-x-10">
                    <li class="text-sm font-bold uppercase">
                        <RouterLink to="/">Accueil</RouterLink>
                    </li>
                    <li class="text-sm font-bold uppercase">
                        <RouterLink to="/configurateur">Personnaliser</RouterLink>
                    </li>
                    <li class="text-sm font-bold uppercase">
                        <RouterLink to="/">Lunettes populaires</RouterLink>
                    </li>
                    <li class="text-sm font-bold uppercase">
                        <RouterLink to="/">Les réductions</RouterLink>
                    </li>
                </div>


                <div class="flex items-center justify-end space-x-4">
                    <li>
                        <RouterLink to="#">
                            <SearchIcon/>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/login">
                            <UserIcon/>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/#">
                            <FavorisIcon class="mb-1" />
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/#">
                            <PanierIcon/>
                        </RouterLink>
                    </li>
                </div>
            </ul>
            <div></div>
        </nav>
    </header>
</template>