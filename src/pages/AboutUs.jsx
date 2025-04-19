"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import "../docs/SwingKit/AnimatedGradients/style.css"
import "../docs/SwingKit/Gradients/style.css"
import { useTheme } from "../context/ThemeContext"
import darkimg from "../assets/Hero-assets/darkherobg.webp"
import lightimg from "../assets/Hero-assets/herobg.webp"

// You would replace these with your actual team member images
const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & Lead Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Passionate about creating beautiful, functional interfaces that developers love to use.",
      social: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Jamie Chen",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Turns complex problems into elegant solutions with a focus on performance and accessibility.",
      social: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Taylor Reed",
      role: "UX Researcher",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dedicated to understanding how developers interact with components to create better experiences.",
      social: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
  ]

const AboutUs = () => {
  const { darkMode } = useTheme()

  // Refs for animations
  const headerRef = useRef(null)
  const storyRef = useRef(null)
  const missionRef = useRef(null)
  const teamSectionRef = useRef(null)
  const teamMemberRefs = useRef([])
  const valuesRef = useRef(null)
  const valueItemRefs = useRef([])
  const ctaRef = useRef(null)

  // Set up GSAP animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      })

      // Story and mission animations
      gsap.from([storyRef.current, missionRef.current], {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
        },
      })

      // Team section animation
      gsap.from(teamSectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamSectionRef.current,
          start: "top 80%",
        },
      })

      // Team members staggered animation
      gsap.from(teamMemberRefs.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamSectionRef.current,
          start: "top 70%",
        },
      })

      // Values section animation
      gsap.from(valuesRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
        },
      })

      // Values items staggered animation
      gsap.from(valueItemRefs.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 70%",
        },
      })

      // CTA animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      })
    })

    return () => ctx.revert() // Clean up
  }, [])

  return (
    <div
      className={`w-full min-h-screen ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      {/* Header Section */}
      <div
        ref={headerRef}
        className="relative w-full py-32 px-4 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${darkMode ? darkimg : lightimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 swing-ocean-gradient-animate text-white  rounded-full text-sm font-semibold tracking-wide shadow mb-6">
            OUR STORY
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  mb-6">A Product Built with Friendship, Pressure & Passion <span className="text-red-700">❤</span></h1>
          <p className="text-xl  max-w-3xl mx-auto">
          From chaotic beginnings to a smooth launch, SwingUI was built by a team that supported each 
            other, learned together, and grew stronger every day. This library is a reflection of what’s 
            possible when the right people, guidance, and motivation come together. 
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div
          ref={storyRef}
          className={`mb-20 ${darkMode ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
              SwingUI is a modern, easy-to-use UI component library built with Tailwind CSS and React, 
                designed to help developers build beautiful, responsive interfaces faster. It’s more than just a 
                library—it’s the outcome of passion, collaboration, and hustle by a group of backbenchers from 
                the first ChaiCode Web Dev Cohort.
              </p>
              <p className="text-lg">
              In just 24 days, we transformed an idea into a working library, ready to use by developers and 
              teams of all levels.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="SwingKit journey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

       
        
        
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div ref={valuesRef} className="text-center mb-16">
          <div className="inline-block px-4 py-2 swing-ocean-gradient-animate text-white rounded-full text-sm font-semibold tracking-wide shadow mb-6">
            HOW IT STARTED
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"}`}
          >
            Birth Of SwingUI
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          SwingUI was born during a hackathon hosted by ChaiCode, with a challenge: create something meaningful, something that solves a real developer problem. From chaotic beginnings on Day 0, we jumped into discussions, built roadmaps, and began turning ideas into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Day 1–3",
              description:
                "Finalized wireframes, tech stack, and structure. ",
            },
            {
              title: "Day 4–6",
              description:
                "Faced tech struggles, pivoted from Vanilla JS to React. ",
            },
            {
              title: "Day 7–10",
              description:
                "Designed components, built UI/UX foundations, and got our first 300+ visitors! ",
            },
            {
              title: "Day 11–17",
              description:
                "Debugging, refining, late-night calls, team bonding.",
            },
            {
                title: "Day 18",
                description: "Launched the beta version of SwingUI! ",
            },
            {
                title: "Day 19–24",
                description: "Collected feedback, crushed bugs, added features, and went LIVE with the final launch!",
            }
          ].map((value, index) => (
            <div
              key={value.title}
              ref={(el) => (valueItemRefs.current[index] = el)}
              className={`p-8 rounded-xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${darkMode ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"}`}
              >
                {value.title}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      {/* Team Section */}
<section ref={teamSectionRef} className={`py-20 px-4 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
  <div className="max-w-6xl mx-auto text-center mb-16">
    <div className="inline-block px-4 py-2 swing-ocean-gradient-animate text-white rounded-full text-sm font-semibold tracking-wide shadow mb-6">
    Who Built It? 
    </div>
    <h2
      className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"}`}
    >
      Meet Our Team
    </h2>
    <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
    We’re a team of passionate learners who weren't at the top of the class, but always stayed 
    curious and committed. Our squad includes developers like:
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {teamMembers.map((member, index) => (
      <div
        key={member.name}
        ref={(el) => (teamMemberRefs.current[index] = el)}
        className={`rounded-xl overflow-hidden shadow-lg relative group ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`}
      >
        <div className="h-64 overflow-hidden relative">
          {/* Image with zoom effect */}
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Name and title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-sm text-blue-300">{member.role}</p>
          </div>

          {/* Social icons that appear on hover */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-40 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-40 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-40 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Bio text at the bottom */}
       
      </div>
    ))}
    
  </div>
  <div className="max-w-6xl mx-auto text-center my-16">
    <p className={`text-xl max-w-3xl  mx-auto  ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
    We spent sleepless nights, had 1 AM team calls, pulled 14-hour workdays—all for a shared 
    vision.
    </p>
    </div>
</section>
<section ref={teamSectionRef} className={`py-20 px-4 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
  <div className="max-w-6xl mx-auto text-center mb-16">
    <div className="inline-block px-4 py-2 swing-ocean-gradient-animate text-white rounded-full text-sm font-semibold tracking-wide shadow mb-6">
    Mentors 
    </div>
    <h2
      className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"}`}
    >
      Mentorship that Guided Us
    </h2>
    <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
    We’re deeply grateful to our mentors who not only guided us technically but also supported us 
    emotionally and mentally: 
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {teamMembers.map((member, index) => (
      <div
        key={member.name}
        ref={(el) => (teamMemberRefs.current[index] = el)}
        className={`rounded-xl overflow-hidden shadow-lg relative group ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`}
      >
        <div className="h-64 overflow-hidden relative">
          {/* Image with zoom effect */}
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Name and title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-sm text-blue-300">{member.role}</p>
          </div>

          {/* Social icons that appear on hover */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-40 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-40 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-40 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Bio text at the bottom */}
       
      </div>
    ))}
    
  </div>
  <div className="max-w-6xl mx-auto text-center my-16">
    <p className={`text-xl max-w-3xl  mx-auto  ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
    Their wisdom and encouragement helped us stay on track and push through doubts. 
    </p>
    </div>
</section>
     
     

      {/* Values Section */}
      {/* Why Swing & Our Vision Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
  <div className={`mb-20 ${darkMode ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"}`}>
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Philosophy</h2>
    <div className="grid md:grid-cols-2 gap-10">
      {/* Why Swing? */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Why "Swing"?</h3>
        <p className="text-lg mb-6">
          We wanted a name that reflects style, motion, and energy. "Swing" stands for:
        </p>
        <ul className="space-y-3">
          {[
            "Smooth developer experience",
            "Stylish components with gradients and animations",
            "Seamless TailwindCSS integration",
            "That spark of joy when your UI looks right"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block mr-3 mt-1 text-blue-500">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Our Vision */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
        <p className="text-lg mb-6">
          We're building SwingUI for:
        </p>
        <ul className="space-y-3">
          {[
            "Developers who want to ship fast",
            "Designers who value aesthetics",
            "Beginners needing beautiful components",
            "Startups building MVPs quickly"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block mr-3 mt-1 text-blue-500">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="py-20 px-4 max-w-6xl mx-auto">
  <div className={`mb-20 ${darkMode ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"}`}>
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Built in Public</h2>
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-lg mb-6">
          From the very start, SwingUI has been a #BuildInPublic journey. Every challenge, win, and 
          decision was shared on Twitter, creating a transparent timeline of growth and learning.
        </p>
        <ul className="space-y-3">
          {[
            "Shared 20+ daily updates",
            "Celebrated every little win",
            "Embraced every bit of feedback",
            "Learned, pivoted, and improved in real-time"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block mr-3 mt-1 text-blue-500">•</span>
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Twitter embed or status updates could go here if you want to add later */}
      {/* <div className="mt-8 space-y-4">
        [Twitter embed component would go here]
      </div> */}
    </div>
  </div>
</section>
<section className="py-20 px-4 max-w-6xl mx-auto">
  <div className={`${darkMode ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"}`}>
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">What's Next?</h2>
    <p className="text-lg mb-10">We're just getting started.</p>
    
    <div className="grid md:grid-cols-2 gap-10">
      {/* Completed */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Already Shipped</h3>
        <ul className="space-y-3">
          {[
            "Bug fixes",
            "New components",
            "Dark mode support",
            "Custom animation classes",
            "CDN integration"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Coming Soon */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Coming Soon</h3>
        <ul className="space-y-3">
          {[
            "Live playground",
            "Interactive previews",
            "Better docs & onboarding",
            "Community contributions"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">●</span>
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>
     

      {/* CTA Section */}
      <section ref={ctaRef} className={`py-20 px-4 text-center ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-6 ${darkMode ? "text-[var(--color-text-dark)]" : "text-[var(--color-text)]"}`}
          >
            Ready to Put Some Swing in Your Stack?
          </h2>
          <p className={`text-xl mb-10 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Whether you’re building a portfolio, startup, or just playing with UI—SwingUI is made for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/docs"
              className="px-6 py-3 rounded-full w-[70%] sm:w-auto text-white swing-ocean-gradient font-semibold shadow hover:opacity-90 transition"
            >
              Get Started For Free
            </Link>
            <Link
              to="/components/button"
              className={`px-6 py-3 rounded-full w-[85%] sm:w-auto border ${darkMode ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-800"} font-semibold hover:text-white transition`}
            >
              Explore Components
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
