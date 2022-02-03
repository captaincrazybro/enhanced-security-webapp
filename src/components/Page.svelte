<script>
    import Header from './Header.svelte'
    import Footer from './Footer.svelte'
</script>

<style>
    .page {
        text-align: center;  
        background-color: #d6d7e2;
        position: absolute;
        height: 100%;
        width: 100%
    }

    .page-content {
        margin: auto;
        text-align: center;
        background-color: white;
        width: 75%;
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>

<div class="page">
    <Header />
    <div class="page-content">
        <slot/>
    </div>
    <Footer />
</div>