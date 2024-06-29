<script>
	import { Grid, createStyles, theme } from '@svelteuidev/core';   
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
import {onMount}  from 'svelte';
import "../app.css"
</script>

<Navbar let:NavContainer color="dark"   class ="w-full bg-black-800 dark:bg-gray-900 "fluid={true} >
	<NavContainer>
  
	<h1 class="text-lg sm:text-lg lg:text-3xl xl:text-4xl extra:text-5xl  ">
	  <span class="color1">Back</span><span class="color2">packk</span>
	</h1>  
	<NavHamburger  class= "justify-end items-end " />
	<NavUl >
	  <NavLi class="text-lg lg:text-base xl:text-xl extra:2xl text-white " href="/">Home</NavLi>
	  <NavLi class="text-lg lg:text-base xl:text-xl extra:2xle text-white" href="/login">About</NavLi>
	  <NavLi class="text-lg lg:text-base xl:text-xl extra:2xl text-white" href="/docs/components/navbar">Navbar</NavLi>
	  <NavLi class="text-lg lg:text-base xl:text-xl extra:2xl text-white" href="/pricing">Pricing</NavLi>
	  <NavLi class="text-lg lg:text-base xl:text-xl extra:2xl text-white" href="/contact">Contact</NavLi>
	</NavUl>
  </NavContainer>
  </Navbar>  

<slot></slot>

<style lang="postcss">



	.color1 {
		color: white;
	  }
	  .color3 {
		color: #9CA3AF;
		font-family: Roboto;
	  }
	  .color2 {
		color: orange;
	  }
	
	  .button {
		background-color: #FF830F;
		color: black;
		font-size: 1.3vw;
		
		max-width: 250px;
		max-height: 150px;
		padding: 1vw 3vw;
		border-radius: 10px;
		margin-top: 35px;
		cursor: pointer;
		transition: 0.5s;
		border: none;
	  }
	  .button:hover {
		background-color: transparent;
		border: 1px solid;
		border-color: #FF830F;
		font-size: 1.3vw;
		padding: 1vw 3vw;
		border-radius: 10px;
		margin-top: 30px;
		transition: 0.5s;
		cursor: pointer;
		color: white;
	  } 
	  .button:active{
		background-color: #FF830F;
		color: black;
		font-size: 1.3vw;
		padding: 1vw 3vw;
		border-radius: 10px;
		margin-top: 30px;
		cursor: pointer;
		transition: 0.5s;
		border: none;
	  }
	</style>
