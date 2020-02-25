<template>
  <!-- Content -->
  <div class="content">
    <!-- Profile -->
    <img class="content__profile" src="/img/profile.jpg">
    <article class="content__article content__article--center content__article--margin-16">
      <p class="content__article-title content__article-title--large">
        Jon Malave
      </p>
      <p class="content__article-subtitle">
        Web Developer based in Miami.
      </p>
      <p class="content__article-links">
        <a href="/docs/resume.pdf" target="_blank">
          <i class="far fa-file-alt content__article-link"/>
        </a>
        <a href="https://github.com/jonmalave" target="_blank">
          <i class="fab fa-github content__article-link"/>
        </a>
        <a href="https://linkedin.com/in/jonmalave" target="_blank">
          <i class="fab fa-linkedin-in content__article-link"/>    
        </a>
        <a href="https://twitter.com/jonmalave" target="_blank">
          <i class="fab fa-twitter content__article-link"/>      
        </a>
        <a href="mailto:jonmalave@gmail.com" target="_blank">
          <i class="far fa-envelope content__article-link"/>        
        </a>
      </p>              
    </article>

    <!-- About Me -->
    <article class="content__article content__article--margin-16">
      <p class="content__article-details">
        I am a professional full-stack web developer with a passion for responsive web design, and single-page application development. Currently a big fan of <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, and going serverless with <a href="https://cloud.google.com/" target="_blank">Google Cloud Platform</a>.
        <br><br>
        I'm comfortable building applications from the ground up for Software as a Service business models, and multi-user environments.
        <br><br>        
        Please do <a href="mailto:jonmalave@gmail.com">contact</a> me! I'm open to explore new opportunities that will challenge my current skill set, and offer long term growth potential.
      </p>      
    </article>

    <!-- Projects -->
    <article class="content__article content__article--margin-24">
      <p class="content__article-title content__article-title--medium">
        <i class="fa fa-briefcase"/> Projects
      </p>     
      <hr>
    </article>

    <!-- Project[1] -->
    <article class="content__article content__article--margin-8">
      <!-- Title -->       
      <p class="content__article-title content__article-title">
        xPortal
      </p>

      <!-- Details --> 
      <p class="content__article-details content__article--margin-8">
        A Game Portal Platform inspired by Google's YouTube Video-sharing platform. <br> 
        <span class="content__article-metadata">
          <b><i class="fa fa-code"/> Technology:</b> Nuxt.js, xStorage Plugin, Cloud Firestore, Firebase Authentication, Netlify 
        </span>  
      </p>   

      <!-- Preview -->   
      <a href="https://xportal.netlify.com" target="_blank">
        <img src="/img/xPortal.jpg" class="content__article-preview">
      </a> 

      <!-- Links --> 
      <p class="content__article-details">
        -- <br>        
        <a href="https://xportal.netlify.com" target="_blank">Demo</a> | <a href="https://github.com/jonmalave/xPortal" target="_blank">View on Github</a>
      </p>   
      <hr>
    </article>  

    <!-- Project[2] -->
    <article class="content__article content__article--margin-8">
      <!-- Title -->       
      <p class="content__article-title content__article-title">
        xChat
      </p>

      <!-- Details --> 
      <p class="content__article-details content__article--margin-8">
        A Firebase + Nuxt.js Chat App inspired by Discord chat software.<br> 
        <span class="content__article-metadata">
          <b><i class="fa fa-code"/> Technology:</b> Nuxt.js, xStorage Plugin, Cloud Firestore, Firebase Authentication, Netlify 
        </span>  
      </p>   

      <!-- Preview -->   
      <a href="https://xchat.netlify.com" target="_blank">
        <img src="/img/xChat.jpg" class="content__article-preview"> 
      </a>

      <!-- Links --> 
      <p class="content__article-details">
        -- <br>        
        <a href="https://xchat.netlify.com" target="_blank">Demo</a> | <a href="https://github.com/jonmalave/xChat" target="_blank">View on Github</a>
      </p>   
      <hr>
    </article>

    <!-- Project[3] -->
    <article class="content__article content__article--margin-8">
      <!-- Title -->       
      <p class="content__article-title content__article-title">
        xStorage
      </p>

      <!-- Details --> 
      <p class="content__article-details content__article--margin-8">
        Browser Storage Plugin for Nuxt.js. Easily save and persist user session data.<br> 
        <span class="content__article-metadata">
          <b><i class="fa fa-code"/> Technology:</b> Nuxt.js, Web API localStorage
        </span>  
      </p>   

      <!-- Preview -->   
      <a href="https://github.com/jonmalave/xStorage" target="_blank">
        <img src="/img/xStorage.jpg" class="content__article-preview"> 
      </a>

      <!-- Links --> 
      <p class="content__article-details">
        -- <br>        
        <a href="https://github.com/jonmalave/xStorage" target="_blank">View on Github</a>
      </p>   
      <hr>
    </article>

    <!-- Project[4] -->
    <article class="content__article content__article--margin-8">
      <!-- Title -->       
      <p class="content__article-title content__article-title">
        xFolio
      </p>

      <!-- Details --> 
      <p class="content__article-details content__article--margin-8">
        Clean, minimalistic, responsive Nuxt.js developer portfolio template.<br> 
        <span class="content__article-metadata">
          <b><i class="fa fa-code"/> Technology:</b> Nuxt.js, Netlify
        </span>  
      </p>   

      <!-- Preview -->   
      <a href="https://xfolio.netlify.com/" target="_blank">
        <img src="/img/xFolio.jpg" class="content__article-preview"> 
      </a>

      <!-- Links --> 
      <p class="content__article-details">
        -- <br>        
        <a href="https://xfolio.netlify.com/" target="_blank">Demo</a> | <a href="https://github.com/jonmalave/xFolio" target="_blank">View on Github</a>
      </p>   
      <hr>
    </article>    

    <!-- Project[5] -->
    <article class="content__article content__article--margin-8">
      <!-- Title -->       
      <p class="content__article-title content__article-title">
        xPlate
      </p>

      <!-- Details --> 
      <p class="content__article-details content__article--margin-8">
        A Nuxt.js Boilerplate Project. Quickly start building a responsive static site or single-page application.<br> 
        <span class="content__article-metadata">
          <b><i class="fa fa-code"/> Technology:</b> Nuxt.js, Netlify
        </span>  
      </p>   

      <!-- Preview -->   
      <a href="https://xplate.netlify.com/" target="_blank">
        <img src="/img/xPlate.jpg" class="content__article-preview"> 
      </a>

      <!-- Links --> 
      <p class="content__article-details">
        -- <br>        
        <a href="https://xplate.netlify.com/" target="_blank">Demo</a> | <a href="https://github.com/jonmalave/xPlate" target="_blank">View on Github</a>
      </p>   
      <hr>
    </article>         
  </div>
</template>

<style>
/* Block Elements */
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 4;
}
.content__profile {
  height: 180px;
  width: 180px;
  border: solid white 4px;
  border-radius: 50%;
  box-shadow: 2px 2px 8px #494b4b;
}
.content__article {
  width: 100%;
}
.content__article-title {
  font-size: 22px;
  font-weight: bold;
  color: #3a4145;
}
.content__article-subtitle {
  font-size: 22px;
  font-weight: bold;  
  color: #a9a9a9;
}
.content__article-details {
  font-size: 16px;
}
.content__article-metadata {
  font-size: 13px;
}
.content__article-links {
  margin: 8px 0;
}
.content__article-link {
  font-size: 22px;
  margin: 0 8px;   
}
.content__article-preview {
  width: 100%;
  max-width: 800px;
  margin-top: 16px;
}

/* Modifiers */
.content__article-title--medium {
  font-size: 32px;
  font-weight: bold;
}
.content__article-title--large {
  font-size: 40px;
  font-weight: bold;
}
.content__article--center {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.content__article--margin-8 {
  margin-top: 8px;
}
.content__article--margin-16 {
  margin-top: 16px;
}
.content__article--margin-24 {
  margin-top: 24px;
}

@media only screen and (min-width: 800px) {
  .content {
    width: 800px;
  }
}
</style>
