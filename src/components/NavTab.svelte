<script>
    export let href
</script>

<style>
    .nav-tab {
        background-color: #4775d4;
        color: lightgray;
        padding: 9px 15px;
    }

    .nav-tab:hover {
        background-color: #2954ac;
    }

    .nav-tab a {
        color: white;
        text-decoration: none;
    }
</style>

<div class="nav-tab">
    <a href={href}><slot /></a>
</div>