<script>
  import { Grid, createStyles, theme } from '@svelteuidev/core';   
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
import {onMount}  from 'svelte';
import "../../app.css"
    </script>



<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24">
      <div class = "flex-col w-full items-center justify-center h-svh ">
        <div class="flex flex-col items-center justify-center w-full h-full ">
          
          <form class="flex flex-col items-center justify-center w-full sm:w-full md:w-full  lg:w-8/12 xl:w-6/12 extra:w-6/12 h-4/6 sm:h-3/5 md:h-3/5 lg:h-3/5   bg-[#2C3036] rounded-xl">
            <h1 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#FF830F]">Welcome to Backpackk</h1>
            <p class = "text-sm sm:text-sm md:text-base lg:text-lg  text-white"> Sign in to start creating your itineraries!</p>
            <Input class="w-3/4 h-10 mt-10 p-2 bg-[#2C3036] border-gray-200 " type="text" id="first_name" placeholder="Email" required />   

            <Input class="w-3/4 h-10 mt-5 p-2 bg-[#2C3036] border-gray-200 " type="text" id="first_name" placeholder="Password" required />
            <div class="flex w-3/4 justify-end items-end">
              <button class="text-sm sm:text-sm md:text-base lg:text-lg  text-[#FF830F]"> Forgot your Password? </button>
              </div>
            <div class = "flex w-3/4 justify-start items-start">
              <label class="mt-5 flex items-center space-x-2">
                <input type="checkbox" class=" form-checkbox text-primary-500">
                <span class="text-sm sm:text-sm md:text-base lg:text-lg  text-white">Remember me</span>
            </label>  
            </div>
            <button class="w-1/2 h-10 mt-5 p-2 rounded-xl text-white bg-[#FF830F]">Login</button>
            <div class="flex mt-7 w-3/4 items-center justify-center">
              <p class="text-sm sm:text-sm md:text-base lg:text-lg  text-white">Don't have an account? </p>
              <button class="text-sm sm:text-sm md:text-base lg:text-lg  text-[#FF830F]"> Sign Up!</button>
              </div>
          </form>
        </div>

    
</body>

<footer class="mt-10 mb-3 pt-8 pb-4 w-full h-full rounded-md bg-[#2C3036]">
  <div class=" w-4/4 grid gap-y-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid-rows-2 items-center justify-center align-middle ">
    <div class="w-full flex sm:col-span-1 md:col-span-2 md:items-end md:justify-end sm:items-center sm:justify-center " >
      <Input class="md:w-6/12 h-12 sm:12/12 bg-[#2C3036] border-gray-200 " type="text" id="first_name" placeholder="Enter your Email Address" required />   
  
    </div>

    <div class="w-full col-span-1 flex items-center justify-center sm:items-center sm:justify-center md:items-start md:justify-start lg:items-start lg:justify-start xl:items-start xl:justify-start extra:items-start extra:justify-start ">
      <button class="object-scale-down md:ml-7  bg-[#FF830F] text-white rounded-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-3    text-sm sm:text-sm md:text--base extra:text-xl"> Sign Me Up! </button> 
      </div> 
  </div>
  <div class="w-full ">
    <div class="flex items-center justify-center mt-10">
      <img class="w-10 h-10" src="facebook.png" />
      <img class="w-10 h-10 ml-7" src="x.png" />
      <img class="w-10 h-10 ml-7" src="ins.png" />
      <img class="w-10 h-10 ml-7" src="link.png" />
    </div>  
  </div>
  <div class="w-full ">
    <div class="flex items-center space-x-5 justify-center mt-10">
      <p class="text-white sm:text-sm md:text-base lg:text-lg "> About </p>
      <p class="text-white sm:text-sm md:text-base"> Contact </p>
      <p class="text-white sm:text-sm md:text-base"> Services </p>
      <p class="text-white sm:text-sm md:text-base"> Support </p>
      
    </div>
    </div>
    <div class="w-full ">
      <div class="flex items-center justify-center mt-10">
        <p class="text-[#9CA3AF]"> © 2021 Backpackk. All rights reserved. </p>
      </div>

  </footer>


<style lang="postcss">
    </style>