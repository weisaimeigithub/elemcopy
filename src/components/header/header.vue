<template>
    <header id=head_top>
        <slot  name="logo"></slot>
        <slot  name="search"></slot>
        <section class="head_goback">
            <svg width="100%"  height="100%" xmlns='http://www.w3.org/2000/svg'  version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
    </header>
</template>
<script>
import {mapState,mapActions}  from 'vuex'
export default {
    
}
</script>

// <style lang="scss" scoped>
   
   
//     #head_top{
//         background-color: $blue;
//         position: fixed;
//         z-index: 100;
//         left: 0;
//         top: 0;
//         @include wh(100%, 1.95rem);
//     }
//     .head_goback{
//         left: 0.4rem;
//         @include wh(0.6rem, 1rem);
//         line-height: 2.2rem;
//         margin-left: .4rem;
//     }
// </style>