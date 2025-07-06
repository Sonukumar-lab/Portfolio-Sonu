// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Navbar scroll effect
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Download Resume Function
function downloadResume() {
  // Create a temporary link element
  const link = document.createElement("a")
  link.href = "resume.pdf" // Replace with your actual resume file path
  link.download = "Sonu Kumar_CSE_0110.pdf" // Replace with your actual name
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Show alert if file doesn't exist
  setTimeout(() => {
    alert("Resume download started! Please make sure to add your resume.pdf file to the project folder.")
  }, 100)
}

// Contact Form Submission
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const firstName = contactForm.querySelector('input[placeholder="First Name"]').value
  const lastName = contactForm.querySelector('input[placeholder="Last Name"]').value
  const email = contactForm.querySelector('input[placeholder="Email"]').value
  const subject = contactForm.querySelector('input[placeholder="Subject"]').value
  const message = contactForm.querySelector("textarea").value

  // Simple validation
  if (!firstName || !lastName || !email || !subject || !message) {
    alert("Please fill in all fields.")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.")
    return
  }

  // Simulate form submission
  const submitButton = contactForm.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent

  submitButton.textContent = "Sending..."
  submitButton.disabled = true

  // Simulate API call delay
  setTimeout(() => {
    alert(`Thank you ${firstName}! Your message has been sent. I'll get back to you soon.`)
    contactForm.reset()
    submitButton.textContent = originalText
    submitButton.disabled = false
  }, 2000)
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
    }
  })
}, observerOptions)

// Observe all sections for animation
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect on page load
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    typeWriter(heroTitle, originalText, 50)
  }
})

// Add active class to current navigation item
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Add CSS for active nav link
const style = document.createElement("style")
style.textContent = `
    .nav-link.active {
        color: #007bff !important;
        font-weight: 600;
    }
`
document.head.appendChild(style)

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add scroll to top button (optional)
const scrollTopButton = document.createElement("button")
scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
scrollTopButton.className = "scroll-top-btn"
scrollTopButton.onclick = scrollToTop
document.body.appendChild(scrollTopButton)

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = "block"
  } else {
    scrollTopButton.style.display = "none"
  }
})

// Add CSS for scroll to top button
const scrollTopStyle = document.createElement("style")
scrollTopStyle.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3);
    }
    
    .scroll-top-btn:hover {
        background: #0056b3;
        transform: translateY(-2px);
    }
`
document.head.appendChild(scrollTopStyle)
const titles = ["Java Developer", "Web Developer", "Backend Developer"];
let index = 0;
const subtitle = document.getElementById("subtitle");

function changeTitle() {
    subtitle.classList.add("fade-out");

    setTimeout(() => {
        index = (index + 1) % titles.length;
        subtitle.textContent = titles[index];
        subtitle.classList.remove("fade-out");
        subtitle.classList.add("fade-in");
    }, 500);
}

setInterval(changeTitle, 2000);
