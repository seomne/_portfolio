gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#main .section01",
      start: "bottom 100%",
      end: "bottom 0",
      scrub: 1,
    },
  })
  .fromTo(
    "#main .section01 .title",
    { y: "0%" },
    { y: "90vh", ease: "none", duration: 10 },
    0
  )
  .fromTo(
    "#header .header_wrap .menu_btn span",
    { backgroundColor: "#fff" },
    { backgroundColor: "#000", ease: "none", duration: 1 },
    0
  )
  .fromTo(
    "#main .section01 #scroll_down",
    { opacity: 1 },
    { opacity: 0, ease: "none", duration: 3 },
    0
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#main .section02",
      start: "top 50%",
      end: "top -=3000",
      scrub: 1,
    },
  })
  .to(
    "#header .header_wrap .logo",
    { color: "#000", ease: "none", duration: 0 },
    0
  )
  .to(
    "#header .header_wrap .menu_btn span",
    { backgroundColor: "#000", ease: "none", duration: 0 },
    0
  )
  .fromTo(
    "#main .section02 .text .text_1",
    { x: "16%" },
    { x: "-100%", ease: "none", duration: 10 },
    0
  )
  .fromTo(
    "#main .section02 .text .text_2",
    { x: "-16%" },
    { x: "100%", ease: "none", duration: 10 },
    0
  )
  .fromTo(
    "#main .section02 .text .text_3",
    { x: "20%", y: "-1vw" },
    { x: "-80%", y: "-1vw", ease: "none", duration: 10 },
    0
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#main .section03 .cont_wrap",
      start: "top",
      end: "+=3000",
      scrub: 1,
      pin: true,
    },
  })
  .fromTo(
    "#main .section03",
    { backgroundColor: "#fff" },
    { backgroundColor: "#000", ease: "none", duration: 1 },
    0
  )
  .fromTo(
    "#main .section03 .title h1",
    { color: "#000000" },
    { color: "#fff", ease: "none", duration: 1 },
    0
  )
  .fromTo(
    "#header .header_wrap .logo",
    { color: "#000" },
    { color: "#fff", ease: "none", duration: 1 },
    0
  )
  .fromTo(
    "#header .header_wrap .menu_btn span",
    { backgroundColor: "#000" },
    { backgroundColor: "#fff", ease: "none", duration: 1 },
    0
  )
  .fromTo(
    "#main .section03 .work_wrap",
    { y: "25%" },
    { y: "-120%", ease: "none", duration: 10 },
    0
  )
  .fromTo(
    "#main .section03 .cont_wrap .title .more_btn",
    { opacity: 0, y: "100%" },
    { opacity: 1, y: "0%", ease: "none", duration: 1 },
    8
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#main .section04",
      start: "top",
      end: "top 20%",
      scrub: 1,
    },
  })
  .fromTo(
    "#header .header_wrap .logo",
    { color: "#fff" },
    { color: "#000", ease: "none", duration: 1 },
    0
  )
  .fromTo(
    "#header .header_wrap .menu_btn span",
    { backgroundColor: "#fff" },
    { backgroundColor: "#000", ease: "none", duration: 1 },
    0
  );
