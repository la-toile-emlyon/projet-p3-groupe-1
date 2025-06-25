gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray("#horizontal .content");

gsap.to("#horizontal", {
  xPercent: -100 * (contents.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#horizontal",
    pin: true,
    scrub: true,
    snap: 1 / 2,
  },
});
