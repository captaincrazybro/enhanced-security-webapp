<script>
    import LoginForm from '../components/LoginForm.svelte'
    import { logged_in } from '../js/login'

    let is_logged_in = $logged_in
</script>

{#if is_logged_in }
    <p class="form-status-red">You are already logged in!</p>
{:else}
    <LoginForm />
{/if}