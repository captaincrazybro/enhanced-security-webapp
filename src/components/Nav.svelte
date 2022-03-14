<script>
	import { isActive, url } from '@roxi/routify';
	import NavTab from './NavTab.svelte';

    const tabs = [
        {name:   "Home", link: "./index"},
        {name: "Login", link: "./login"}
    ]
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
    {#each tabs as tab}
        <li><NavTab href={$url(tab.link)} active={$isActive(tab.link)}>{tab.name}</NavTab></li>
    {/each}
</ul>