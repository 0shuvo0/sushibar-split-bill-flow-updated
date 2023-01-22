<template>
    <div class="page-content footer-page-content">
        <div class="col footer-col main transparent">
            <div class="page-footer">
                <SocialIcons />
                <div class="powered-by-text">Powered by Menulab</div>
            </div>
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

<style lang="scss">
.footer-page-content{
    padding-top: 1em;
}
.footer-col{
    flex-grow: 1;
}
.page-footer{
    margin-top: 0;
    margin-bottom: 1em;
    background-color: #DFE4EA;
    padding: 2em 5em;
    border-radius: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    .powered-by-text{
        font-weight: 700;
        color: var(--color-body);
    }
}
.page-content.footer-page-content{
    height: fit-content !important;
    min-height: auto !important;
    margin-top: auto;
}
</style>