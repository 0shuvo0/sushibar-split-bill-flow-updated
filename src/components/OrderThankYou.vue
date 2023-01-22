<template>
    <div class="col container-px container-py side-col-section">
        <div class="side-col-section__content-lg">
            <p class="title-text">Thanks for your order!</p>
            <p class="subtitle-text mt-05">Follow us and be the first one to know about exclusive offers.</p>
            <p class="mt-2">
                <SocialIcons />
            </p>
        </div>
    </div>
</template>

<script>
import SocialIcons from '@/components/SocialIcons.vue'

export default {
    components: {
        SocialIcons
    }
}
</script>