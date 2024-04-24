let intro = document.querySelector(".intro")
let load = document.querySelector(".load-header")
let loadSpan = document.querySelectorAll(".load")

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loadSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active")
      }, (idx + 1) * 400)
    })

    setTimeout(() => {
      loadSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active")
          span.classList.add("fade")
        }, (idx + 1) * 50)
      })
    }, 2000)

    setTimeout(() => {
      intro.style.top = "-100vh"
    }, 2200)
  })
})

//Input Form

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault() // Prevent form submission
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var message = document.getElementById("message").value
  var errorMessage = ""

  // Validation
  var emailExp = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
  var nameExp = /^[A-Za-z .'-]+$/
  if (!emailExp.test(email)) {
    errorMessage += "The Email address you entered does not appear to be valid.<br>"
  }
  if (!nameExp.test(name)) {
    errorMessage += "The Name you entered does not appear to be valid.<br>"
  }
  if (message.length < 2) {
    errorMessage += "The Message you entered do not appear to be valid.<br>"
  }

  if (errorMessage) {
    // Display error message
    document.getElementById("errorMessage").innerHTML = errorMessage
  } else {
    // Send form data
    var formData = new FormData()
    formData.append("Name", name)
    formData.append("Email", email)
    formData.append("Message", message)

    // AJAX request to submit form data
    var xhr = new XMLHttpRequest()
    xhr.open("POST", "your_php_script.php", true)
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Hide form and display success message
        document.getElementById("contactForm").style.display = "none"
        document.getElementById("successMessage").style.display = "block"
      } else {
        alert("Error submitting form. Please try again later.")
      }
    }
    xhr.send(formData)
  }
})

// animate text

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))

// Hide Header on on scroll down

// var didScroll
// var lastScrollTop = 0
// var delta = 5
// var navbarHeight = $("#nav").outerHeight()

// $(window).scroll(function (event) {
//   didScroll = true
// })

// setInterval(function () {
//   if (didScroll) {
//     hasScrolled()
//     didScroll = false
//   }
// }, 0)

// function hasScrolled() {
//   var st = $(this).scrollTop()

//   // Make sure they scroll more than delta
//   if (Math.abs(lastScrollTop - st) <= delta) return

//   // If they scrolled down and are past the navbar, add class .nav-up.
//   // This is necessary so you never see what is "behind" the navbar.
//   if (st > lastScrollTop && st > navbarHeight) {
//     // Scroll Down
//     $("#nav").css("top", -navbarHeight)
//   } else {
//     // Scroll Up
//     if (st + $(window).height() < $(document).height()) {
//       $("#nav").css("top", "0px")
//     }
//   }

//   lastScrollTop = st
// }
