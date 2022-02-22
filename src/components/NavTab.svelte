<script>
    export let href, active
    console.log(active)
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

    .nav-tab.active {
        background-color: #244b99;
    }

    .nav-tab a {
        color: white;
        text-decoration: none;
    }
</style>

<div class="nav-tab" class:active="{active}">
    <a href={href}><slot /></a>
</div>