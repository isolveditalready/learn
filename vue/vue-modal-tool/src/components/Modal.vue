<template>
    <div class="modal-bg">
        <div class="content">
            <h2>modal</h2>
        </div>
    </div>
</template>
<style scoped>
    .modal-bg {
        background-color: rgba(0,0,0, 0.4);
        position: fixed;
        left: 0;
        top:0;
        height: 100vh;
        width: 100vw;
        display: none;
        z-index: 1;
    }

    .content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 20%;
    }

</style>