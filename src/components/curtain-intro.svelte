<script>
	// let clearCurtains = false;

	// setTimeout(() => {
	// 	clearCurtains = true;
	// }, 2000);

	// $: console.log(clearCurtains);
</script>

<!-- on:click={() => alert('CLICKED')}
class:skip-intro={clearCurtains && 'skip-intro'} -->

<div class="curtain">
	<ul class="left">
		<li class="netflix">
			<div class="inner h-full">
				<img class="poster-image" src="/curtain/NETFLIX_IMAGE-min.png" alt="netflix" />
				<div class="relative">
					<img class="logo" src="/curtain/NETFLIX_LOGO-min.png" alt="netflix logo" />
				</div>
			</div>
		</li>
		<li class="disney">
			<div class="inner h-full">
				<img class="poster-image" src="/curtain/DISNEY_IMAGE-min.png" alt="disney" />
				<div class="relative">
					<img class="logo" src="/curtain/DISNEY_LOGO-min.png" alt="disney logo" />
				</div>
			</div>
		</li>
		<li class="prime">
			<div class="inner h-full">
				<img class="poster-image" src="/curtain/PRIME_IMAGE-min.png" alt="amazone prime" />
				<div class="relative">
					<img class="logo" src="/curtain/PRIME_LOGO-min.png" alt="disney logo" />
				</div>
			</div>
		</li>
	</ul>
	<ul class="right">
		<li class="hbo">
			<div class="inner h-full">
				<img class="poster-image" src="/curtain/HBO_IMAGE-min.png" alt="hbo max" />
				<div class="relative">
					<img class="logo" src="/curtain/HBO_LOGO-min.png" alt="disney logo" />
				</div>
			</div>
		</li>
		<li class="bb">
			<div class="inner h-full">
				<img class="poster-image" src="/curtain/BLOCKBUSTER_IMAGE-min.png" alt="blockbuster" />
				<div class="relative">
					<img class="logo" src="/curtain/BLOCKBUSTER_LOGO-min.png" alt="disney logo" />
				</div>
			</div>
		</li>
		<li class="apple">
			<div class="inner h-full">
				<img class="poster-image" src="/curtain/APPLE_IMAGE-min.png" alt="apple tv" />
				<div class="relative">
					<img class="logo" src="/curtain/APPLE_LOGO-min.png" alt="disney logo" />
				</div>
			</div>
		</li>
	</ul>
</div>

<style>
	.curtain {
		@apply fixed inset-0 z-50 h-screen w-screen flex bg-[#00000099];
		animation: introFadeIn 1000ms ease-in 2600ms forwards;
	}

	@keyframes introFadeIn {
		0% {
			background-color: #00000099;
		}
		100% {
			background-color: #00000000;
			pointer-events: none;
		}
	}

	ul {
		width: 60vw;
		@apply relative;
	}

	li {
		position: absolute;
		height: 100vh;
		width: 100%;
		width: 26vw;
	}

	.poster-image {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	.logo {
		position: absolute;
		z-index: 99999;
		bottom: 40px;
		left: 41%;
		transform: translateX(-50%);
		width: 180px;
	}

	.prime .logo {
		left: 50%;
	}

	.skip-intro {
		pointer-events: none;
	}

	.left .inner,
	.skip-intro .left .inner {
		animation: slideOutLeft 1000ms ease-in 0s forwards;
	}
	.right .inner,
	.skip-intro .right .inner {
		animation: slideOutRight 1000ms ease-in 0s forwards;
	}

	.prime {
		left: -7vw;
	}
	.netflix {
		left: 28vw;
	}
	.disney {
		left: 10vw;
	}
	.skip-intro .netflix .inner,
	.skip-intro .hbo .inner,
	.skip-intro .disney .inner,
	.skip-intro .bb .inner,
	.skip-intro .prime .inner,
	.skip-intro .apple .inner {
		animation-delay: 0;
	}

	.netflix .inner,
	.hbo .inner {
		animation-delay: 2333ms;
	}
	.disney .inner,
	.bb .inner {
		animation-delay: 2467ms;
	}
	.prime .inner,
	.apple .inner {
		animation-delay: 2650ms;
	}

	.hbo {
		z-index: -1;
		right: 28vw;
	}
	.bb {
		right: 10vw;
	}
	.apple {
		right: -7vw;
	}

	@keyframes slideOutLeft {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-200vh);
		}
	}

	@keyframes slideOutRight {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(200vh);
		}
	}
</style>
