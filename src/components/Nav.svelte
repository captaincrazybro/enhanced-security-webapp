<script>
	import NavTab from './NavTab.svelte';

</script>

<style>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-align: center;
        display: inline-block;
        height: 100%;
    }

    li {
        float: left;
    }
</style>

<ul>
    <li><NavTab href="/">Home</NavTab></li>
    <li><NavTab href="/login">Login</NavTab></li>
</ul>