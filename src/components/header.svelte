<script lang="ts">
	import Logo from '../components/logo.svelte';
</script>

<header>
	<div class="inner py-10 flex justify-between">
		<div class="h-12">
			<Logo />
		</div>
		<nav class="flex items-center font-semibold text-md">
			<a href="/product-roadmap">Product Roadmap</a>
			<a href="/early-access" style="color: #6dbfff">Get Early Access</a>
		</nav>
	</div>
</header>

<style>
	header {
		@apply absolute w-full z-10;
	}
	nav a {
		@apply ml-5;
	}
</style>
