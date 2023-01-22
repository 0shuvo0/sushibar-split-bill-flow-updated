<template>
    <div class="footer-socials">
        <a href="#" target="_blank" class="social-item">
            <i class="bi bi-instagram"></i>
        </a>
        <a href="#" target="_blank" class="social-item">
            <i class="bi bi-twitter"></i>
        </a>
        <a href="#" target="_blank" class="social-item">
            <i class="bi bi-facebook"></i>
        </a>
        <a href="#" target="_blank" class="social-item">
            <i class="bi bi-youtube"></i>
        </a>
    </div>
</template>

<style lang="scss">
.footer-socials{
    display: flex;
    gap: .25em;
    .social-item{
        --size: 35px;
        height: var(--size);
        width: var(--size);
        line-height: var(--size);
        font-size: 1.25em;
        text-align: center;
        border-radius: 50%;
        display: inline-block;
        background-color: var(--color-body);
        color: #FAFAFA;
    }
}
</style>