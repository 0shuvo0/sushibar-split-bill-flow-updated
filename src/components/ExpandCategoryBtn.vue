<template>
    <span @click="toggleExpand" class="expand-category-btn">
        <svg v-if="!expanded" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1031_7982)">
        <g opacity="0.2">
        <rect x="1.15842" y="1.61801" width="8.33823" height="8.33823" rx="1.85294" stroke="#425466" stroke-width="1.38971" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="1.15866" y="14.3569" width="8.33823" height="8.33823" rx="1.85294" stroke="#425466" stroke-width="1.38971" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="12.9711" y1="1.61792" x2="23.1623" y2="1.61792" stroke="#425466" stroke-width="1.38971" stroke-linecap="round"/>
        <line x1="12.9711" y1="8.56647" x2="23.1623" y2="8.56647" stroke="#425466" stroke-width="1.38971" stroke-linecap="round"/>
        <line x1="12.9711" y1="15.515" x2="23.1623" y2="15.515" stroke="#425466" stroke-width="1.38971" stroke-linecap="round"/>
        <line x1="12.9711" y1="22.4635" x2="23.1623" y2="22.4635" stroke="#425466" stroke-width="1.38971" stroke-linecap="round"/>
        </g>
        <path d="M19.7753 19.701L15.6442 15.6361C16.726 14.4608 17.3907 12.9065 17.3907 11.1961C17.3902 7.53718 14.3764 4.5715 10.6585 4.5715C6.94052 4.5715 3.92676 7.53718 3.92676 11.1961C3.92676 14.8549 6.94052 17.8206 10.6585 17.8206C12.2649 17.8206 13.7382 17.265 14.8956 16.3413L19.0426 20.4222C19.2447 20.6213 19.5727 20.6213 19.7748 20.4222C19.9773 20.2232 19.9773 19.9001 19.7753 19.701ZM10.6585 16.8014C7.51268 16.8014 4.96253 14.2918 4.96253 11.1961C4.96253 8.10031 7.51268 5.59073 10.6585 5.59073C13.8043 5.59073 16.3544 8.10031 16.3544 11.1961C16.3544 14.2918 13.8043 16.8014 10.6585 16.8014Z" fill="#425466"/>
        <path d="M10.6585 16.8014C7.51268 16.8014 4.96253 14.2918 4.96253 11.1961C4.96253 8.10031 7.51268 5.59073 10.6585 5.59073C13.8043 5.59073 16.3544 8.10031 16.3544 11.1961C16.3544 14.2918 13.8043 16.8014 10.6585 16.8014Z" fill="#FAFAFA"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5733 8.37402V7.69144L10.2082 7.69144V8.37402V10.3937L7.88973 10.3937L7.20715 10.3937L7.20715 11.7589H7.88973H10.2082V14.2147V14.8973H11.5733V14.2147V11.7589H13.7305H14.413V10.3937H13.7305L11.5733 10.3937V8.37402Z" fill="#425466"/>
        </g>
        <defs>
        <clipPath id="clip0_1031_7982">
        <rect width="24" height="23.0769" fill="white" transform="translate(0 0.923065)"/>
        </clipPath>
        </defs>
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.15842" y="1.61792" width="8.33823" height="8.33823" rx="1.85294" stroke="#425466" stroke-width="1.38971" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="1.15866" y="14.3569" width="8.33823" height="8.33823" rx="1.85294" stroke="#425466" stroke-width="1.38971" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="12.9711" y1="2.77606" x2="23.1623" y2="2.77606" stroke="#425466" stroke-width="1.38971" stroke-linecap="round"/>
        <line x1="12.9711" y1="8.5665" x2="23.1623" y2="8.5665" stroke="#425466" stroke-width="1.38971" stroke-linecap="round"/>
        <line x1="12.9711" y1="15.515" x2="23.1623" y2="15.515" stroke="#425466" stroke-width="1.38971" stroke-linecap="round"/>
        <line x1="12.9711" y1="21.3055" x2="23.1623" y2="21.3055" stroke="#425466" stroke-width="1.38971" stroke-linecap="round"/>
        </svg>
    </span>
</template>

<script>
export default {
    // data(){
    //     return {
    //         expanded: false
    //     }
    // },
    computed: {
        expanded: {
            get(){
                return this.$store.state.menuItemExpanded
            },
            set(val){
                this.$store.state.menuItemExpanded = val
            }
        }
    },
    methods: {
        toggleExpand(){
            this.expanded = !this.expanded
            // document.body.style.fontSize = this.expanded ? '20px' : '16px'
            document.documentElement.style.setProperty('--menuitem-minheight', this.expanded ? '8.875em' : '6.25em')
        }
    }
}
</script>

<style lang="scss">
.expand-category-btn{
    cursor: pointer;
}
</style>