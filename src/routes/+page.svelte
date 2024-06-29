<script>
import { Grid, createStyles, theme } from '@svelteuidev/core';   
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
import {onMount}  from 'svelte';
import "../app.css"


</script>
 
<body class="w-full pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 pt-12  bg-[#1B1B1B]">
  
  <Grid>
   
    
    <Grid.Col  sm={6} md={6} xs={12} lg={6} xl={6}>
      <div class= " w-full h-full align-middle ">
        <div class= " mt-24 ">
          <p class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl extra:text-8xl  text-white text-center sm:text-center md:text-left lg:text-left xl:text-left" > Crafting <br/> Unforgettable <br/> Journeys</p>  
          <p class="text-base sm:text-base md:text-base lg:text-lg xl:text-xl extra:text-3xl text-gray-400 text-center sm:text-center md:text-left lg:text-left xl:text-left mt-7"> Experience the joy of hassle-free travel <br/> planning with our AI itinerary builder.</p>
        </div>
        <div class="flex align-top items-center justify-center sm:flex sm:items-center sm:justify-center md:flex md:items-start md:justify-start">
          <button class="object-scale-down py-3 px-5 sm:sm:px-5 sm:py-3 md:py-3 md:px-6 extra:py-5 extra:px-12 bg-[#FF830F] text-white rounded-xl mt-6 flex  text-sm sm:text-md md:text-lg extra:text-2xl"> Create Now </button>
  
          </div>
        </div>
      
    </Grid.Col>
    <Grid.Col  sm={6} md={6} xs={12} lg={6} xl={6} >
      <div class=" w-full flex-col align-top items-start justify-end visible  md:flex hidden " >
        <img class="image" src="/front.png" />
      </div>  
    </Grid.Col>
  <Grid.Col class ="sm={12} md={12} xs={12} lg={12} xl={12}">
    <div class="flex w-full justify-center">
       <h1 class="mt-32 text-2xl sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl extra:text-5xl font-sans text-white"> Features We Provide </h1>
      </div>
    </Grid.Col>
    <Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}> 
         <div class=" mt-5 w-full  md:h-36 lg:h-40 xl:h-44 extra:h-64 flex items-center align-middle justify-center ">
          <div class=" m-5 ml-0 mr-0 rounded-lg w-full h-full border flex-col align-middle items-center justify-center border-black bg-[#2C3036]">
            <div class="mt-6 flex align-middle items-center justify-center w-full">
              <img class="ml-3 align-middle w-10 extra:size-1/12 md:w-8 " src='budget.png'>
              <h1 class="ml-3 sm:text-md md:text-base lg:text-lg xl:text-xl extra:text-3xl text-white"> 
                Budget Optimized Itineraries 
              </h1>
              </div>
              <div class="mt-3 w-full h-2/4  flex flex-col  items-center align-middle justify-center ">
                
                <h2 class="mb-6 md:text-sm lg:text-base xl:text-lg extra:text-2xl ml-3 mr-3 text-[#9CA3AF] text-center">
                  Personalized travel plans that respect your budget, ensuring an affordable travel experience without compromising on fun.
                  </h2>
                </div>
            
            
            </div>  
            
        </div>
      </Grid.Col>
      <Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}> 
        <div class=" mt-5 w-full  md:h-36 lg:h-40 xl:h-44 extra:h-64 flex items-center align-middle justify-center ">
         <div class=" m-5 ml-0 mr-0 rounded-lg w-full h-full border flex-col align-middle items-center justify-center border-black bg-[#2C3036]">
           <div class="mt-6 flex align-middle items-center justify-center w-full">
             <img class="ml-3 align-middle w-10 extra:size-1/12 md:w-8 " src='time.png'>
             <h1 class="ml-3 sm:text-md md:text-base lg:text-lg xl:text-xl extra:text-3xl text-white"> 
              Time-Optimized Plans
             </h1>
             </div>
             <div class="mt-3 w-full h-2/4  flex flex-col  items-center align-middle justify-center ">
               
               <h2 class="mb-6 md:text-sm lg:text-base xl:text-lg extra:text-2xl ml-3 mr-3 text-[#9CA3AF] text-center">
                Efficient itineraries crafted to make the most of your available time, ensuring a maximized travel experience.                 </h2>
               </div>
           
           
           </div>  
           
       </div>
     </Grid.Col>
     <Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}> 
      <div class=" mt-5 w-full  md:h-36 lg:h-40 xl:h-44 extra:h-64 flex items-center align-middle justify-center ">
       <div class=" m-5 ml-0 mr-0 rounded-lg w-full h-full border flex-col align-middle items-center justify-center border-black bg-[#2C3036]">
         <div class="mt-6 flex align-middle items-center justify-center w-full">
           <img class="ml-3 align-middle w-10 extra:size-1/12 md:w-8 " src='customize.png'>
           <h1 class="ml-3 sm:text-md md:text-base lg:text-lg xl:text-xl extra:text-3xl text-white"> 
            Customizable Travel Plans
           </h1>
           </div>
           <div class="mt-3 w-full h-2/4  flex flex-col  items-center align-middle justify-center ">
             
             <h2 class="mb-6 md:text-sm lg:text-base xl:text-lg extra:text-2xl ml-3 mr-3 text-[#9CA3AF] text-center">
              Tailor your itinerary to match your personal interests and preferences, with the flexibility to adjust as you go.               </h2>
             </div>
         
         
         </div>  
         
     </div>
   </Grid.Col>
   <Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}> 
    <div class=" mt-5 w-full  md:h-36 lg:h-40 xl:h-44 extra:h-64 flex items-center align-middle justify-center ">
     <div class=" m-5 ml-0 mr-0 rounded-lg w-full h-full border flex-col align-middle items-center justify-center border-black bg-[#2C3036]">
       <div class="mt-6 flex align-middle items-center justify-center w-full">
         <img class="ml-3 align-middle w-10 extra:size-1/12 md:w-8 " src='customize.png'>
         <h1 class="ml-3 sm:text-md md:text-base lg:text-lg xl:text-xl extra:text-3xl text-white"> 
          Reliable Recommendations
          </h1>
         </div>
         <div class="mt-3 w-full h-2/4  flex flex-col  items-center align-middle justify-center ">
           
           <h2 class="mb-6 md:text-sm lg:text-base xl:text-lg extra:text-2xl ml-3 mr-3 text-[#9CA3AF] text-center">
            Trustworthy suggestions for accommodations and activities curated by travel experts for a stress-free journey.           </div>
       
       
       </div>  
       
   </div>
 </Grid.Col>
 <Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}> 
  <div class=" mt-5 w-full  md:h-36 lg:h-40 xl:h-44 extra:h-64 flex items-center align-middle justify-center ">
   <div class=" m-5 ml-0 mr-0 rounded-lg w-full h-full border flex-col align-middle items-center justify-center border-black bg-[#2C3036]">
     <div class="mt-6 flex align-middle items-center justify-center w-full">
       <img class="ml-3 align-middle w-10 extra:size-1/12 md:w-8 " src='customize.png'>
       <h1 class="ml-3 sm:text-md md:text-base lg:text-lg xl:text-xl extra:text-3xl text-white"> 
        Interactive Map Integration
       </h1>
       </div>
       <div class="mt-3 w-full h-2/4  flex flex-col  items-center align-middle justify-center ">
         
         <h2 class="mb-6 md:text-sm lg:text-base xl:text-lg extra:text-2xl ml-3 mr-3 text-[#9CA3AF] text-center">
          Visualize your travel plans with interactive maps, explore destinations, and efficiently plan out your adventure.         </div>
     
     
     </div>  
     
 </div>
</Grid.Col>
<Grid.Col xs={12} sm={6} md={6} lg={4} xl={4}> 
  <div class=" mt-5 w-full  md:h-36 lg:h-40 xl:h-44 extra:h-64 flex items-center align-middle justify-center ">
   <div class=" m-5 ml-0 mr-0 rounded-lg w-full h-full border flex-col align-middle items-center justify-center border-black bg-[#2C3036]">
     <div class="mt-6 flex align-middle items-center justify-center w-full">
       <img class="ml-3 align-middle w-10 extra:size-1/12 md:w-8 " src='customize.png'>
       <h1 class="ml-3 sm:text-md md:text-base lg:text-lg xl:text-xl extra:text-3xl text-white"> 
        Multi-Destination Support
        </h1>
       </div>
       <div class="mt-3 w-full h-2/4  flex flex-col  items-center align-middle justify-center ">
         
         <h2 class="mb-6 md:text-sm lg:text-base xl:text-lg extra:text-2xl ml-3 mr-3 text-[#9CA3AF] text-center">
          Plan complex trips with ease, whether you're hopping cities or countries, we've got you covered every step of the way.               </h2>
         </div>
     
     
     </div>  
     
 </div>
</Grid.Col>
<Grid.Col class ="sm={12} md={12} xs={12} lg={12} xl={12}">
  <div class="flex w-full justify-center">
     <h1 class="mt-32 text-2xl sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl extra:text-5xl font-sans text-white"> What Our Users Say </h1>
    </div>
  </Grid.Col>
  <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}> 
    <div class=" mt-5 w-full h-40 md:h-40 lg:h-40 xl:h-36 extra:h-64 flex items-center align-top justify-center ">
     <div class=" m-5 ml-0 mr-0 rounded-lg w-full h-full border flex-col align-middle items-center justify-center border-black bg-[#2C3036]">
       
         <div class=" w-full h-3/4  flex flex-col  items-center align-middle justify-center ">
           
           <h2 class=" md:text-sm lg:text-base xl:text-lg extra:text-3xl ml-4 mr-3 text-[#9CA3AF] text-left">
            Plan complex trips with ease, whether you're hopping cities or countries, we've got you covered every step of the way.               </h2>
           </div>
           <div class=" flex align-top items-start justify-start w-full ">
            <h1 class="ml-4 sm:text-xs md:text-xs lg:text-sm xl:text-sm extra:text-2xl text-[#FF830F]"> 
             Multi-Destination Support
             </h1>
            </div>
       
       
       </div>  
       
   </div>
  </Grid.Col>
  <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}> 
    <div class=" mt-5 w-full h-40 md:h-40 lg:h-40 xl:h-36 extra:h-64 flex items-center align-top justify-center ">
     <div class=" m-5 ml-0 mr-0 rounded-lg w-full h-full border flex-col align-middle items-center justify-center border-black bg-[#2C3036]">
       
         <div class=" w-full h-3/4  flex flex-col  items-center align-middle justify-center ">
           
           <h2 class=" md:text-sm lg:text-base xl:text-lg extra:text-3xl ml-4 mr-3 text-[#9CA3AF] text-left">
            Plan complex trips with ease, whether you're hopping cities or countries, we've got you covered every step of the way.               </h2>
           </div>
           <div class=" flex align-top items-start justify-start w-full ">
            <h1 class="ml-4 sm:text-xs md:text-xs lg:text-sm xl:text-sm extra:text-2xl text-[#FF830F]"> 
             Multi-Destination Support
             </h1>
            </div>
       
       
       </div>  
       
   </div>
  </Grid.Col>
  <Grid.Col class ="sm={12} md={12} xs={12} lg={12} xl={12}">
    <div class="flex w-full justify-center">
       <h1 class="mt-32 text-2xl sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl extra:text-5xl font-sans text-white"> Frequently Asked Questions </h1>
      </div>
    </Grid.Col>
    <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}> 
      <div class=" mt-5 w-full  md:h-36 lg:h-40 xl:h-44 extra:h-64 flex items-center align-middle justify-center ">
       <div class=" m-5 ml-0 mr-0 rounded-lg w-full h-full border flex-col align-middle items-center justify-center border-black bg-[#2C3036]">
         <div class="mt-7 ml-8 mr-8  flex align-middle items-start justify-start w-full ">
         
           <h1 class="text-left sm:text-md md:text-base lg:text-lg xl:text-xl extra:text-3xl text-white"> 
            Interactive Map Integration
           </h1>
           </div>
           <div class=" w-full h-3/4  flex flex-col   items-center align-middle justify-center   ">
             
             <h2 class="  mb-6 ml-8 mr-8 md:text-sm lg:text-base xl:text-lg extra:text-2xl  text-[#9CA3AF] text-left">
              Visualize your travel plans with interactive maps, explore destinations, and efficiently plan out your adventure.         </div>
         
         
         </div>  
         
     </div>
    </Grid.Col>
    <Grid.Col xs={12} sm={6} md={6} lg={6} xl={6}> 
      <div class=" mt-5 w-full  md:h-36 lg:h-40 xl:h-44 extra:h-64 flex items-center align-middle justify-center ">
       <div class=" m-5 ml-0 mr-0 rounded-lg w-full h-full border flex-col align-middle items-center justify-center border-black bg-[#2C3036]">
         <div class="mt-7 ml-8 mr-8  flex align-middle items-start justify-start w-full ">
         
           <h1 class="text-left sm:text-md md:text-base lg:text-lg xl:text-xl extra:text-3xl text-white"> 
            Interactive Map Integration
           </h1>
           </div>
           <div class=" w-full h-3/4  flex flex-col   items-center align-middle justify-center   ">
             
             <h2 class="  mb-6 ml-8 mr-8 md:text-sm lg:text-base xl:text-lg extra:text-2xl  text-[#9CA3AF] text-left">
              Visualize your travel plans with interactive maps, explore destinations, and efficiently plan out your adventure.         </div>
         
         
         </div>  
         
     </div>
    </Grid.Col>
   
    </Grid>

   
    

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
<slot/>