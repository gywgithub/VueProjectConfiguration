<template>
  <div class="body" style="padding-top:100px">
    <img src="../assets/images/skin.svg" alt="wewo Logo" />
  <h1>
    404
  </h1>
  <div class="container">
    <h3>The page you're looking for could not be found.</h3>
    <hr />
    <p>Make sure the address is correct and that the page hasn't moved.</p>
    <a href="javascript:history.back()" class="js-go-back go-back">Go back</a>
  </div>
  <div class="svg-container">
    <svg jsname="BUfzDd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 810" preserveAspectRatio="xMinYMin slice" aria-hidden="true">
      <path fill="#efefee" d="M592.66 0c-15 64.092-30.7 125.285-46.598 183.777C634.056 325.56 748.348 550.932 819.642 809.5h419.672C1184.518 593.727 1083.124 290.064 902.637 0H592.66z"></path>
      <path fill="#f4f4f4" d="M545.962 183.777c-53.796 196.576-111.592 361.156-163.49 490.74 11.7 44.494 22.8 89.49 33.1 134.883h404.07c-71.294-258.468-185.586-483.84-273.68-625.623z"></path>
      <path fill="#f7f7f7" d="M153.89 0c74.094 180.678 161.088 417.448 228.483 674.517C449.67 506.337 527.063 279.465 592.56 0H153.89z"></path>
      <path fill="#fbfbfc" d="M153.89 0H0v809.5h415.57C345.477 500.938 240.884 211.874 153.89 0z"></path>
      <path fill="#ebebec" d="M1144.22 501.538c52.596-134.583 101.492-290.964 134.09-463.343 1.2-6.1 2.3-12.298 3.4-18.497 0-.2.1-.4.1-.6 1.1-6.3 2.3-12.7 3.4-19.098H902.536c105.293 169.28 183.688 343.158 241.684 501.638v-.1z"></path>
      <path fill="#e1e1e1" d="M1285.31 0c-2.2 12.798-4.5 25.597-6.9 38.195C1321.507 86.39 1379.603 158.98 1440 257.168V0h-154.69z"></path>
      <path fill="#e7e7e7" d="M1278.31,38.196C1245.81,209.874 1197.22,365.556 1144.82,499.838L1144.82,503.638C1185.82,615.924 1216.41,720.211 1239.11,809.6L1439.7,810L1439.7,256.768C1379.4,158.78 1321.41,86.288 1278.31,38.195L1278.31,38.196z"></path></svg>
  </div>
  </div>
</template>

<style scoped="true">
   .body {
     color: #666;
     text-align: center;
     font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
     margin: auto;
     font-size: 14px;
   }

   h1 {
     font-size: 56px;
     line-height: 100px;
     font-weight: normal;
     color: #456;
   }

   h2 {
     font-size: 24px;
     color: #666;
     line-height: 1.5em;
   }

   h3 {
     color: #456;
     font-size: 20px;
     font-weight: normal;
     line-height: 28px;
   }

   hr {
     max-width: 800px;
     margin: 18px auto;
     border: 0;
     border-top: 1px solid #EEE;
     border-bottom: 1px solid white;
   }

   img {
     width: 100px;
     max-width: 40vw;
     display: block;
     margin: 0 auto;
   }

   a {
     line-height: 60px;
     font-weight: normal;
     color: #4A8BEE;
     font-size: 18px;
     text-decoration: none;
   }

   .container {
     margin: auto 20px;
   }

   .svg-container {
     overflow: hidden;
     position: fixed;
     right: 0;
     top: 0;
     bottom: 0;
     left: 0;
     z-index: -1;
   }

   .svg-container svg {
     height: 100%;
     position: relative;
     width: 100%;
   }
 </style>
