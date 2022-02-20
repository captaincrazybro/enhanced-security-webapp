<script>
    import Page from '../components/Page.svelte'
    import LoginForm from '../components/LoginForm.svelte'
    import { logged_in } from '../js/login'
    console.log("hi")
</script>

{#if $logged_in }
    <p class="form-status-red">You are already logged in!</p>
{:else}
    <LoginForm />
{/if}