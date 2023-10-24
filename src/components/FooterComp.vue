<script setup>
import AmexIcon from './icons/payment/AmexIcon.vue'
import DiscoverIcon from './icons/payment/DiscoverIcon.vue'
import MasterCardIcon from './icons/payment/MasterCardIcon.vue'
import OtherIcon from './icons/payment/OtherIcon.vue'
import PayPalIcon from './icons/payment/PayPalIcon.vue'
import VisaIcon from './icons/payment/VisaIcon.vue'
</script>

<template>
    <footer>
        <div class="grid grid-cols-7 bg-noir11">
            <div></div>
            <div class="col-span-5">
                <div class="grid grid-cols-4 pt-[86px] pb-28">
                    <div>
                        <h4 class="font-josefin text-[22px] text-blanc mb-12">
                            Nous contacter
                        </h4>
                        <p class="font-nunito text-sm text-grisAA">
                            507 - Avenue Des Champs Élysées
                        </p>
                        <p class="font-nunito text-sm text-grisAA mt-3">
                            95000, Paris
                        </p>
                        <p class="font-nunito text-sm text-grisAA mt-3">
                            France
                        </p>
                        <p class="font-nunito text-sm text-grisAA mt-3">
                            TaVue@gmail.com
                        </p>
                        <p class="font-nunito text-sm text-grisAA mt-3">
                            06 39 25 15 49
                        </p>
                    </div>
                    <div>
                        <h4 class="font-josefin text-[22px] text-blanc mb-12">
                            Informations
                        </h4>
                        <p class="font-nunito text-sm text-grisAA">
                            <RouterLink to="#">
                                Politique de Confidentialité
                            </RouterLink>
                        </p>
                        <p class="font-nunito text-sm text-grisAA mt-3">
                            <RouterLink to="#">
                                Politique de Remboursement
                            </RouterLink>
                        </p>
                        <p class="font-nunito text-sm text-grisAA mt-3">
                            <RouterLink to="#">
                                Politique d'envoi
                            </RouterLink>
                        </p>
                        <p class="font-nunito text-sm text-grisAA mt-3">
                            <RouterLink to="#">
                                Conditions d'utilisation
                            </RouterLink>
                        </p>
                    </div>
                    <div>
                        <h4 class="font-josefin text-[22px] text-blanc mb-12">
                            Compte
                        </h4>
                        <p class="font-nunito text-sm text-grisAA">
                            <RouterLink to="#">
                                À propos
                            </RouterLink>
                        </p>
                        <p class="font-nunito text-sm text-grisAA mt-3">
                            <RouterLink to="#">
                                FAQ
                            </RouterLink>
                        </p>
                        <p class="font-nunito text-sm text-grisAA mt-3">
                            <RouterLink to="#">
                                Contact
                            </RouterLink>
                        </p>
                    </div>
                    <div>
                        <h4 class="font-josefin text-[22px] text-blanc mb-12">
                            Inscrivez‑vous à la Newsletter
                        </h4>
                        <p class="font-nunito text-sm text-grisAA">
                            Bénéficiez directement de 10% de réduction en vous inscrivant à la Newsletter.
                        </p>
                        <div class="mt-6 flex items-center justify-end">
                            <input type="text" placeholder="Votre Email" class="outline-none bg-blanc text-gris88 font-nunito py-2 pl-4 w-full">
                            <button class="absolute bg-blanc">
                                <img src="../assets/icn/envoyer.png" alt="Envoyer" class="h-6 mx-3">
                            </button>
                        </div>
                        <p class="font-nunito text-xs text-grisAA mt-1">
                            Vous pouvez vous désinscrire à tout moment.
                        </p>
                    </div>
                </div>
                <div class="py-6 flex items-center justify-between border-solid border-t-[1px] border-blanc border-opacity-10 border-x-0 border-b-0">
                    <div>
                        <p class="text-grisAA text font-nunito text-sm">
                            © 2023, TaVue - Tous droits réservés
                        </p>
                    </div>
                    <div class="flex">
                        <VisaIcon />
                        <MasterCardIcon />
                        <AmexIcon />
                        <PayPalIcon />
                        <OtherIcon />
                        <DiscoverIcon />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </footer>
</template>