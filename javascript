
 var crsr=document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    
     
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#nav",
      start: "top top", // Start when the top of the nav hits the top of the viewport
      end: "bottom top", // Keep the background color until the nav is fully out of view
      scrub: true, // Smoothly transition with scrolling
      toggleActions: "play none none reverse" // Ensures the color reverts when scrolling back up
    }
  });


  var h4Elements = document.querySelectorAll("#nav h4");

  h4Elements.forEach(function(element) {
      element.addEventListener("mouseenter", function() {
          crsr.style.transform = "scale(3)";
          crsr.style.border = "1px solid #fff";
          crsr.style.backgroundColor = "transparent";
      });
      
  });


  gsap.from("#about-us, #about", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",          // Ensure you're using the correct scroller, might be "html, body"
      markers: true,             // Optional: Set to false if you don't need debugging markers
      start: "top 60%",
      end: "top 58%",
      scrub: 3,
    }
  });

  gsap.from(".card", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",          // Ensure you're using the correct scroller, might be "html, body"
      markers: true,             // Optional: Set to false if you don't need debugging markers
      start: "top 60%",
      end: "top 58%",
      scrub: 3,
    }
  });
  

  gsap.from(".green-div, #page3", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".green-div",     // Choose one element for the trigger
      scroller: "body",          // Ensure you're using the correct scroller, might be "html, body"
      markers: true,             // Optional: Set to false if you don't need debugging markers
      start: "top 60%",
      end: "top 58%",
      scrub: 3,
    }
  });

  gsap.from("#page4", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: "#page4",     // Choose one element for the trigger
      scroller: "body",          // Ensure you're using the correct scroller, might be "html, body"
      markers: true,             // Optional: Set to false if you don't need debugging markers
      start: "top 60%",
      end: "top 58%",
      scrub: 3,
    }
  });
  

  gsap.from("#footer", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: "#page4",     // Choose one element for the trigger
      scroller: "body",          // Ensure you're using the correct scroller, might be "html, body"
      markers: true,             // Optional: Set to false if you don't need debugging markers
      start: "top 60%",
      end: "top 58%",
      scrub: 3,
    }
  });
  
  
  
  
  
  


  
  
  
  
