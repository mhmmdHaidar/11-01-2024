const animationTimeLine = () => {
   const textboxChars = document.getElementsByClassName("textbox__chat")[0];

   textboxChars.innerHTML = `<span>${textboxChars.innerHTML
      .split("")
      .join("</span><span>")}</span>`;

   const tl = new TimelineMax();

   tl.to(".container", 0.6, {
      visibility: "visible",
   })
      .from(".one", 0.7, {
         opacity: 0,
         y: 10,
      })
      .from(".two", 0.4, {
         opacity: 0,
         y: 10,
      })
      .to(
         ".one",
         0.7,
         {
            opacity: 0,
            y: 10,
         },
         "+=3"
      )
      .to(
         ".two",
         0.7,
         {
            opacity: 0,
            y: 10,
         },
         "-=1"
      )

      .from(".three", 0.7, {
         opacity: 0,
         y: 10,
      })
      .to(
         ".three",
         0.7,
         {
            opacity: 0,
            y: 10,
         },
         "+=3"
      )
      .from(".four", 0.7, {
         opacity: 0,
         scale: 0.2,
      })
      .from(".fake__button", 0.3, {
         opacity: 0,
         scale: 0.2,
      })
      .staggerTo(
         ".textbox__chat span",
         1.5,
         {
            visibility: "visible",
         },
         0.05
      )
      .to(
         ".fake__button",
         0.1,
         {
            backgroundColor: "rgb(127,206,248)",
         },
         "+=4"
      )
      .to(
         ".four",
         0.5,
         {
            opacity: 0,
            scale: 0.2,
            y: -150,
         },
         "+=1"
      );
};

animationTimeLine();
