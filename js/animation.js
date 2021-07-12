document.addEventListener('DOMContentLoaded', () => {
    var t1 = gsap.timeline();

    t1
      .from('.menu-1', {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: 0.5
      })
      .from('.menu-2', {
          duration: 1,
          y: 50,
          opacity: 0,
      }, '-=0.8')
      .from('.menu-3', {
          duration: 1,
          opacity: 0,
          y: 50,
      }, '-=0.8')
      .from('.menu-4', {
          duration: 1,
          opacity: 0,
          y: 50,
      }, '-=0.8')
      .from('.menu-5', {
          duration: 1,
          opacity: 0,
          y: 50,
      }, '-=0.8')
      .from('.container-item div, .container-item img', {
          duration: 1,
          opacity: 0,
          y: 300,
          stagger: {each: 0.2},
          ease: 'power4.out'
      }, '-=0.8')
      .from('.bg-hero', {
          duration: 1,
          opacity: 0,
          y: 300,
          ease: 'power4.out'
      }, '-=0.8')

      gsap.registerPlugin(ScrollTrigger);

      gsap.from('#section-01 div', {
        duration: 1,
        opacity: 0,
        y: 300,
        stagger: {each: 0.2},
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '#section-01'
        },
        delay: 0.3
      })
})