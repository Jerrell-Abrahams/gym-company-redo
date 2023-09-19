const Locations = document.querySelectorAll("[data-open-modal]")
const modalCloseButton = document.querySelectorAll(".close")
const gallery_button = document.querySelectorAll(".icons_container .gallery")
const times_section = document.querySelectorAll(".times_section")
const gallery_section = document.querySelectorAll(".gallery_container")
const times_button = document.querySelectorAll(".times")
const video_button = document.querySelectorAll(".video")
const video_section = document.querySelectorAll(".video_section")
const video_playing = document.getElementsByTagName("iframe")
const burger_button_icon = document.querySelector(".burger_button_icon")
const burger_container = document.querySelector(".hamburger")

clicked = true

burger_button_icon.addEventListener("click", () => {

    if (clicked) {
        burger_button_icon.setAttribute("name", "menu-outline")
        burger_container.classList.add("invisible")
        clicked = false
        return
    }
    burger_container.classList.remove("invisible")
    burger_button_icon.setAttribute("name", "close-outline")

    clicked = true
})

video_button.forEach((button) => {
    button.addEventListener("click", (e) => {
        button.classList.add("invisible")
        times_button.forEach(button => {
            button.classList.remove("invisible")
        })
        times_section.forEach(button => {
            button.classList.add("invisible")
        })
        gallery_section.forEach(button => {
            button.classList.add("invisible")
        })
        gallery_button.forEach(button => {
            button.classList.remove("invisible")
        })
        video_section.forEach(button => {
            button.classList.remove("invisible")
        })
})
})

gallery_button.forEach((button) => {
    
        button.addEventListener("click", (e) => {
            button.classList.add("invisible")
            times_button.forEach(button => {
                button.classList.remove("invisible")
            })
            times_section.forEach(button => {
                button.classList.add("invisible")
            })
            gallery_section.forEach(button => {
                button.classList.remove("invisible")
            })
            video_button.forEach(button => {
                button.classList.remove("invisible")
            })
            video_section.forEach(button => {
                button.classList.add("invisible")
            })
    })
})

times_button.forEach((button) => {

    button.addEventListener("click", (e) => {
        button.classList.add("invisible")
        gallery_button.forEach(button => {
            button.classList.remove("invisible")
        })
        times_section.forEach(button => {
            button.classList.remove("invisible")
        })
        gallery_section.forEach(button => {
            button.classList.add("invisible")
        })
        video_button.forEach(button => {
            button.classList.remove("invisible")
        })
        video_section.forEach(button => {
            button.classList.add("invisible")
        })
})
})




for (i = 0; i < Locations.length; i++) {
    
    
    Locations[i].addEventListener("click", (e) => {
        
        var classFromModal = "." + (e.target.innerHTML).trim()
        let modal = document.querySelector(classFromModal.split(" ").join("_"))


        modal.showModal()

        modalCloseButton.forEach((button) => {
            button.addEventListener("click", () => {
                modal.close()
            }
            )
        })
        
    })
    
    
}







const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.add("slideIn")  
        }
        else {
            return
        }
    })
    
})

const hiddenElements = document.querySelectorAll(".hidden");
const price_cards = document.querySelectorAll(".slideOut")

hiddenElements.forEach((entry) => {
    observer.observe(entry)
})

price_cards.forEach((entry) => {
    observer.observe(entry)
})

