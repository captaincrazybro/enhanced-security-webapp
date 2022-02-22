<script>
	import { goto } from '@roxi/routify';
    import { login } from '../js/login'

    let username, password, login_status

    function handleSubmit() {
        login_status = login(username, password)
        $goto("/")
    }
</script>

<style>
    .form-container {
        width: 30%;
        margin: auto;
        text-align: center;
    }

    .form-submit {
        text-align: right;
        margin: auto;
    }

    .submit-container {
        text-align: right;
    }

    :global(.form-status-red) {
        color: red;
    }

    :global(.form-status-green) {
        color: green;
    }

    label {
        text-align: left;
    }

    input {
        width: 100%;
    }
</style>

{#if login_status === true }
<p class="form-status-green">You have successfully logged in!</p>
{:else if login_status === null }
 <p class="form-status-red">Username does not exist!</p>
{:else if login_status === false }
 <p class="form-status-red">Password is incorrect!</p>
{/if}
<div class="form-container">
 <form on:submit|preventDefault={handleSubmit}>
     <label for="username">Username</label>
     <input type="text" name="username" bind:value={username} />
     <br />
     <label for="password">Password</label>
     <input type="password" name="password" bind:value={password} />
     <br />
     <div class="submit-container">
         <button type="submit" class="form-submit">Login</button>
     </div>
 </form>
</div>