
<!-- inspiration/credits for this website go to https://aether.pm/-->
<!-- inspiration/credits for this website go to https://aether.pm/-->
<!-- inspiration/credits for this website go to https://aether.pm/-->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/imgs/pfp.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="https://lains.life/css1.css">
    <link rel="stylesheet" type="text/css" href="https://lains.life/css2.css">
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
      #overlay {
          display: none;
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
      }

      .modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #1a1a1a;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    z-index: 1000;
    color: #fff;
    font-size: 15px;
}

.modal h2 {
    color: #00bfff;
    font-size: 18px;
}

.modal p {
    margin-bottom: 10px;
    font-size: 15px;
}

.modal button {
    margin-top: 10px;
    background-color: #0a0a0a;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.modal button:hover {
    background-color: #0090e5;
}

.modal p span {
      display: inline-block;
      background-color: #2d2d2d;
      padding: 4px 8px;
      border-radius: 5px;
      margin-right: 8px;
      font-size: 15px;
      width: 400px;
  }

  </style>
  </head>
  </style>
  <body data-sveltekit-preload-data="hover">
    <div style="display: contents"> 
      <div class="overflow-x-hidden">
        <div class="flex min-h-screen flex-col select-none">
          <header class="container z-40 bg-background">
            <div class="flex h-20 items-center justify-between py-6">
              <div class="flex gap-6 md:gap-10">
                <a class="items-center space-x-2 flex" href="/" data-svelte-h="svelte-x8861f">
                  <span class="font-bold inline-block">clust</span>
                </a>
                <nav class="gap-6 flex">
                  <a class="hidden sm:flex items-center text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60" href="#features" data-svelte-h="svelte-1wmqbz9">Features</a>
                  <a class="hidden sm:flex items-center text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing" data-svelte-h="svelte-1w3ppfb">Pricing</a>
                  <a class="hidden sm:flex items-center text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60" href="commands.html" data-svelte-h="svelte-1tkathd">Commands</a>
                </nav>
              </div>
			  <nav>
				<a href="https://discord.com/api/oauth2/authorize?client_id=1107283467655458866&permissions=8&scope=bot"
				   tabindex="0"
				   class="inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 rounded-md px-3 text-xs"
				   data-bits-button-root="">
				  Add to Your Server
				</a>
			  </nav>			  
            </div>
          </header>
          <main class="flex-1">
            <div id="__saos-0.014997553212974912__">
              <div style="animation: fade-in-bottom 0.25s cubic-bezier(0.35, 0.5, 0.65, 0.95) both; ">
                <section class="space-y-6 pb-8 pt-6 md:py-24 lg:py-16" data-svelte-h="svelte-lspgbm">
                  <div class="container flex max-w-[64rem] flex-col md:items-center gap-2 md:text-center items-start text-start">
                    <a class="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium hover:bg-muted/75 transition-colors duration-200" target="_blank" href="https://discord.gg/clust">Join the support server</a>
                    <h1 class="text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">The next generation of Discord bots</h1>
                    <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">clust is a next-generation logging experience for swiping account data and cryptocurrency from victims using military-grade encryption.</p>
                    <div class="relative hidden xl:block xl:col-span-7 xl:row-span-2 mt-16 -mb-32" aria-hidden="true">
                        </div>
                  </div>
                </section>
              </div>
            </div>
            <div id="__saos-0.7039295122848186__">
              <div style="animation: fade-in-bottom 0.25s cubic-bezier(0.35, 0.5, 0.65, 0.95) both; ">
                <section id="features" class="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
                  <div class="mx-auto flex max-w-[58rem] flex-col md:items-center md:space-y-4 md:text-center items-start text-start" data-svelte-h="svelte-wwrmeb">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Features</h2>
                    <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">clust offers advanced logging abilities not seen in any other logging tool.</p>
                  </div>
                  <div class="mx-auto grid justify-center gap-4 md:grid-cols-2 md:max-w-[64rem]" id="cards">
					<div class="relative overflow-hidden rounded-lg border bg-background p-2 col-span-1 svelte-hud6ym" id="card">
						<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-10 w-10 border-2 border-card bg-card text-white" stroke-width="12.5">
								<path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" fill="white"/>
							</svg>							
						  <div class="space-y-2">
							<h3 class="font-bold">Moderation</h3>
							<p class="text-sm text-muted-foreground">Advanced Moderation, with a variety of features.</p>
						  </div>
						</div>
					  </div>																	  
                    <div class="relative overflow-hidden rounded-lg border bg-background p-2 col-span-1 svelte-hud6ym" id="card" data-svelte-h="svelte-ww3n0u">
                      <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-webhook h-10 w-10 border-2 border-card bg-card">
							<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
							<path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
							<path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
						</svg>
                        <div class="space-y-2">
								<h3 class="font-bold">Reskin</h3>
								<p class="text-sm text-muted-foreground">Customize the design of clust&#x27;s profile via webhooks.</p>
							</div>
						</div>
					</div>
					<div class="relative overflow-hidden rounded-lg border bg-background p-2 col-span-1" id="card">
						<div class="flex h-[150px] flex-col justify-between rounded-md p-6">
							<div class="flex flex-row items-center -space-x-4">
							</div>
							<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-10 w-10 border-2 border-card bg-card" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
								<path d="M225.8 367.1l-18.8-51s-30.5 34-76.2 34c-40.5 0-69.2-35.2-69.2-91.5 0-72.1 36.4-97.9 72.1-97.9 66.5 0 74.8 53.3 100.9 134.9 18.8 56.9 54 102.6 155.4 102.6 72.7 0 122-22.3 122-80.9 0-72.9-62.7-80.6-115-92.1-25.8-5.9-33.4-16.4-33.4-34 0-19.9 15.8-31.7 41.6-31.7 28.2 0 43.4 10.6 45.7 35.8l58.6-7c-4.7-52.8-41.1-74.5-100.9-74.5-52.8 0-104.4 19.9-104.4 83.9 0 39.9 19.4 65.1 68 76.8 44.9 10.6 79.8 13.8 79.8 45.7 0 21.7-21.1 30.5-61 30.5-59.2 0-83.9-31.1-97.9-73.9-32-96.8-43.6-163-161.3-163C45.7 113.8 0 168.3 0 261c0 89.1 45.7 137.2 127.9 137.2 66.2 0 97.9-31.1 97.9-31.1z"></path>
							</svg>
                        <div class="space-y-2" data-svelte-h="svelte-pbwvi2">
								<h3 class="font-bold">Last.fm Integration</h3>
								<p class="text-sm text-muted-foreground">Show off your music statistics from Last.fm.</p>
                        </div>
                      </div>
                    </div>
                    <div class="relative overflow-hidden rounded-lg border bg-background p-2 col-span-1 svelte-hud6ym" id="card">
                      <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-ring h-10 w-10 border-2 border-card bg-card">
							<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
							<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
							<path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
							<path d="M22 8c0-2.3-.8-4.3-2-6"></path>
						</svg>
                        <div class="space-y-2" data-svelte-h="svelte-16d4qhm">
                          <h3 class="font-bold">Socials Reposting</h3>
                          <p class="text-sm text-muted-foreground">Fine tune reposters which can be used in your server.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div id="__saos-0.7957869155119639__">
              <div style="animation: fade-in-bottom 0.25s cubic-bezier(0.35, 0.5, 0.65, 0.95) both; ">
                <section id="pricing" class="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
                  <div class="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]" data-svelte-h="svelte-6o2t7z">
                    <h2 class="text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">Simple, transparent pricing</h2>
                    <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">A one-time payment per server for all available features with no hidden fees.</p>
                  </div>
                  <div class="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
                    <div class="grid gap-6">
                      <h3 class="text-xl font-bold sm:text-2xl" data-svelte-h="svelte-rd8m52">What&#39;s included</h3>
                      <ul class="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-check w-4 h-4 mr-2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg> Customer role in our Discord server
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-check w-4 h-4 mr-2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg> Access to all available features
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-check w-4 h-4 mr-2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg> Two free server transfers
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-check w-4 h-4 mr-2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg> 24/7 uptime and support
                        </li>
                        <li class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-check w-4 h-4 mr-2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg> Full technical support
                        </li>
                        <li class="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-check w-4 h-4 mr-2">
							 <polyline points="20 6 9 17 4 12"></polyline>
							</svg> Exclusive access to premium features
						  </li>
                      </ul>
                    </div>
                    <div class="flex flex-col gap-4 text-center">
                      <div data-svelte-h="svelte-6d8fxe">
                        <h4 class="text-7xl font-bold">$5</h4>
                        <p class="text-sm font-medium text-muted-foreground">per server</p>
                      </div>
                      <button onclick="openModal()" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" type="button">
                        <svg width="25" height="25" class="text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
                        </svg>
                        Subscribe
                      </button>
                      <div id="myModal" class="modal">
                        <h3>
                          After sending your payment, please make a ticket in our <a href="https://discord.gg/clust" target="_blank" style="color: #cfc2fc63;">support server</a> and provide proof of payment along with your server ID.
                        </h3> 
                        <p>
                            BTC: <span id="btcAddress">bc1qy2dx64xq6mxyvup098z3hk82teqy6cy6q7zqs9</span>
                            <button onclick="copyToClipboard('btcAddress')">Copy</button>
                        </p>
                        <p>
                            ETH: <span id="ethAddress">0x1bbed1a48dEf83EC7D78a4662831E017d47E7c8b</span>
                            <button onclick="copyToClipboard('ethAddress')">Copy</button>
                        </p>
                        <p>
                          LTC: <span id="ltcAddress">Lg1aL3haSfEBSUf5dSd6eiT8Qb4FuTdYVP</span>
                          <button onclick="copyToClipboard('ltcAddress')">Copy</button>
                      </p>
                        <div id="copyNotification" style="display:none;">Copied to clipboard. You can now paste the address into your wallet.</div>
                    </div>
                  </div>
              </div>
                  <div class="mx-auto flex w-full max-w-[58rem] flex-col gap-2">
                    <p class="leading-normal text-muted-foreground sm:text-base sm:leading-7 text-center" data-svelte-h="svelte-x4wiwe">clust is only equiped to be purchased with certain cryptocurrencies due to our proprietary payment system.</p>
					<div class="flex flex-row justify-center gap-2 mt-2">
						<img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M16%2032C7.163%2032%200%2024.837%200%2016S7.163%200%2016%200s16%207.163%2016%2016-7.163%2016-16%2016zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69%202.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596%206l-.708%202.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46%201.846s1.283.294%201.256.312c.7.175.826.638.805%201.006l-.806%203.235c.048.012.11.03.18.057l-.183-.045-1.13%204.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858%201.978%202.25.561c.418.105.828.215%201.231.318l-.715%202.872%201.727.43.708-2.84c.472.127.93.245%201.378.357l-.706%202.828%201.728.43.715-2.866c2.948.558%205.164.333%206.097-2.333.752-2.146-.037-3.385-1.588-4.192%201.13-.26%201.98-1.003%202.207-2.538zm-3.95%205.538c-.533%202.147-4.148.986-5.32.695l.95-3.805c1.172.293%204.929.872%204.37%203.11zm.535-5.569c-.487%201.953-3.495.96-4.47.717l.86-3.45c.975.243%204.118.696%203.61%202.733z'/%3e%3c/svg%3e" alt="crypto icon" class="h-6 w-6 brightness-50 hover:brightness-100 transition-all duration-200 hover:scale-110">
						<img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3e%3cg%20fill='%23FFF'%20fill-rule='evenodd'%3e%3cpath%20d='M16%2032C7.163%2032%200%2024.837%200%2016S7.163%200%2016%200s16%207.163%2016%2016-7.163%2016-16%2016zm7.994-15.781L16.498%204%209%2016.22l7.498%204.353%207.496-4.354zM24%2017.616l-7.502%204.351L9%2017.617l7.498%2010.378L24%2017.616z'/%3e%3cg%20fill-rule='nonzero'%3e%3cpath%20fill-opacity='.5'%20d='M16.498%204v8.87l7.497%203.35z'/%3e%3cpath%20opacity='.8'%20d='M16.498%204L9%2016.22l7.498-3.35z'/%3e%3cpath%20fill-opacity='.5'%20d='M16.498%2021.968v6.027L24%2017.616z'/%3e%3cpath%20opacity='.796'%20d='M16.498%2027.995v-6.028L9%2017.616z'/%3e%3cpath%20fill-opacity='.5'%20d='M9%2016.22l7.498%204.353v-7.701z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="crypto icon" class="h-6 w-6 brightness-50 hover:brightness-100 transition-all duration-200 hover:scale-110">
						<img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M16%2032C7.163%2032%200%2024.837%200%2016S7.163%200%2016%200s16%207.163%2016%2016-7.163%2016-16%2016zm-5.573-12.786L9.252%2024h12.875L23%2020.429h-7.722l.848-3.483%201.427-.571.68-2.75-1.41.571L18.342%208h-5.129l-2.081%208.429-1.444.58L9%2019.768l1.427-.554z'/%3e%3c/svg%3e" alt="crypto icon" class="h-6 w-6 brightness-50 hover:brightness-100 transition-all duration-200 hover:scale-110">
						<img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M16%2032C7.163%2032%200%2024.837%200%2016S7.163%200%2016%200s16%207.163%2016%2016-7.163%2016-16%2016zm-.03-26.765A10.816%2010.816%200%20005.148%2016.059c0%201.202.205%202.346.557%203.432h3.227v-9.094l7.04%207.04%207.04-7.04v9.094h3.226a11.07%2011.07%200%2000.558-3.432c0-5.984-4.84-10.824-10.824-10.824zM14.358%2019.02l-3.08-3.08v5.72H6.731c1.906%203.11%205.338%205.192%209.24%205.192%203.901%200%207.362-2.082%209.24-5.192h-4.547v-5.72l-3.05%203.08L16%2020.635l-1.643-1.614z'/%3e%3c/svg%3e" alt="crypto icon" class="h-6 w-6 brightness-50 hover:brightness-100 transition-all duration-200 hover:scale-110">
					</div> 
                  </div>
                </section>
              </div>
            </div>
          </main>
          <footer>
            <div class="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
              <div class="flex flex-col items-start justify-center" data-svelte-h="svelte-f58wd9">
                <a href="https://discord.gg/clust" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 text-sm font-mono text-muted-foreground underline hover:text-secondary-foreground">@discord</a>
                </a>
              </div>
              <div class="flex flex-col items-start px-8 md:px-0">
                <p class="text-center md:text-start text-sm leading-snug text-muted-foreground font-mono"></p>
              </div>
              <script>
                function copyToClipboard(elementId) {
                  var range = document.createRange();
                  var element = document.getElementById(elementId);
                  range.selectNode(element);
                  window.getSelection().removeAllRanges();
                  window.getSelection().addRange(range);
                  document.execCommand('copy');
                  window.getSelection().removeAllRanges();
                  var copyNotification = document.getElementById('copyNotification');
                  copyNotification.style.display = 'block';
                  setTimeout(function () {
                    copyNotification.style.display = 'none';
                  }, 4000);
                }
                function openModal() {
                  var modal = document.getElementById('myModal');
                  modal.style.display = 'block';
                }
                function closeModal() {
                  var modal = document.getElementById('myModal');
                  modal.style.display = 'none';
                }
                window.onclick = function (event) {
                  var modal = document.getElementById('myModal');
                  if (event.target === modal) {
                    modal.style.display = 'none';
                  }
                };
              </script>
<script>
  function copyToClipboard(elementId) {
      var copyText = document.getElementById(elementId);
      var textArea = document.createElement("textarea");
      textArea.value = copyText.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      var notification = document.getElementById("copyNotification");
      notification.style.display = "block";
      setTimeout(function () {
          notification.style.display = "none";
      }, 4000);
  }
</script>   
  </body>
</html>
