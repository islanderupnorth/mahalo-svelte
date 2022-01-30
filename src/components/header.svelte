<script lang="ts">
	import Logo from '../components/logo.svelte';
</script>

<header>
	<div class="inner py-10 flex justify-between">
		<div class="h-12 relative">
			<Logo />
			<div class="alpha-label">Alpha 0.1.0</div>
		</div>
		<nav class="flex items-center font-semibold text-md uppercase">
			<a
				href="https://airtable.com/shr5zMoQ5rFQYi5kF?fbclid=IwAR1bLoDoiUxxAjIr2QcWKMsEYg4l9qaHajV9AiBmOBoqB3IoWvR1Kjs9-qY"
				target="_blank"
				rel="noreferrer"
				style="color: #6dbfff">Get Early Access</a
			>
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
	.alpha-label {
		@apply bg-yellow-300 inline-block px-1 uppercase text-sm text-black font-bold absolute left-0;
	}
</style>
