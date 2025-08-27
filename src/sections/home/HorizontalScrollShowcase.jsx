import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  {
    title: "Advanced",
    subtitle: "Signify Elegance",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.",
      "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem."
    ]
  },
  {
    title: "Advanced",
    subtitle: "Signify Elegance",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.",
      "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem."
    ]
  },
  {
    title: "Advanced",
    subtitle: "Signify Elegance",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.",
      "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem."
    ]
  }
];

export default function HorizontalScrollShowcase() {
  const containerRef = useRef();
  const maskRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".scroll-section");
      const mask = maskRef.current;

      // Horizontal scroll
      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: "+=3000",
        }
      });

      // Progress bar animation
      gsap.to(mask, {
        width: "100%",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top left",
          scrub: 1,
        }
      });

      // Reveal animated texts
      sections.forEach((section) => {
        let textElems = section.querySelectorAll(".anim");
        if (textElems.length === 0) return;
        gsap.from(textElems, {
          y: -130,
          opacity: 0,
          duration: 2,
          ease: "elastic",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="wrapper relative overflow-x-hidden">
      {/* Progress Bar */}
      <div className="absolute left-[10vw] top-48 z-20 w-[50vw] h-[10px]">
        <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
          <mask id="mask0_0_1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
            <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect ref={maskRef} className="mask" y="-49" height="99" fill="black" width="0"/>
          </g>
        </svg>
      </div>

      {/* Horizontal Scroll Sections */}
      <div ref={containerRef} className="container flex w-[300vw]">
        {sectionsData.map((data, idx) => (
          <section key={idx} className="scroll-section pin w-[100vw] py-[20vw] px-[10vw] h-screen flex flex-col gap-[3em]">
            <span className="anim font-bold text-lg">{data.title}</span>
            <h1 className="anim text-[3rem] m-0">{data.subtitle}</h1>
            <div className="col anim flex gap-[3em]">
              {data.paragraphs.map((t, i) => (
                <p key={i} className="text-[1.2rem] w-[50vw]">{t}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
