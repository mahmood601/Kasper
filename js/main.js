// nav icons
const navIcons = document.querySelectorAll("header nav ul a");
navIcons.forEach(navicon => {
  navicon.onclick = () => {
    navIcons.forEach(icon => {
      icon.classList.remove("active");
    })
    navicon.classList.add("active");
  }
})

// search
const searchIcon = document.querySelector(".fa-search")
const toggleButton = document.querySelector("nav > i");
const ulHeader = document.querySelector("nav > ul");

toggleButton.onclick = () => {
  ulHeader.classList.toggle("show-ul-mb")
}

searchIcon.onclick = () => {
  document.querySelector(".form input").classList.toggle("start-search");
  toggleButton.classList.toggle("show-toggle");
  ulHeader.classList.toggle("show-ul")
}

// slide landing images (bullets)
const landingBullets = document.querySelectorAll(".landing > ul li");

landingBullets.forEach(button => {
  button.onclick = () => {
   landingBullets.forEach(button => {
      button.classList.remove("active");
    })
    button.classList.add("active");
    for (let i = 0; i < landingBullets.length; i++) {
      if (landingBullets.item(i).classList.contains("active")) {
        index = i + 1;
      }
    }
    button.parentNode.parentNode.style.backgroundImage = `url("../../../assets/landing-${index}.png")`;
  }
})

window.onload = () => {
  document.querySelector(".landing .overlay .text").style.transform = "translate(0, -50%)";
  // nav icons
  const navIcons = document.querySelectorAll("header nav ul a");
  navIcons.forEach(navicon => {
    navicon.onclick = () => {
      navIcons.forEach(icon => {
        icon.classList.remove("active");
      })
      navicon.classList.add("active");
    }
  })
}
// slide landing images (left | right) >= 760px
const landingArrows = document.querySelectorAll(".change-pos");
let count = 0, countTheCounts = 0;

// Make a range (1,2,3)
function landingRange(count) {
  if (count % 3 === 0) {
    countTheCounts++;
  }
  return count - countTheCounts * 3 + 1;
}
landingArrows.forEach(arrow => {
  arrow.onclick = () => {
    count++;
      arrow.parentNode.style.backgroundImage = `url("../../../assets/landing-${landingRange(count)}.png")`;
  }
})

// Rotate Animation
const icons = document.querySelectorAll(".box i");

icons.forEach(icon => {
  icon.onclick = () => {
    icon.style.setProperty("transform", "rotate(380deg)");
    setTimeout(() => {
      icon.removeAttribute("style");
    }, 800);
  }
})

// Shuffle 
const shuffles = document.querySelectorAll(".shuffle li")
const imgsContainer = document.querySelectorAll(".imgs-container .box");
shuffles.forEach(shuffle => {
  shuffle.onclick = () => {

    shuffles.forEach(shuffle => {
      shuffle.classList.remove("active");
    });

    shuffle.classList.add("active");

    let index = 0;
    for (let i = 0; i < shuffles.length; i++) {
      if (shuffles.item(i).classList.contains("active")) {
        index = i;
      }
    }
 
    if (shuffle.textContent === "All") {
      imgsContainer.forEach(img => img.style.display = "block")
    }
    if (shuffle.textContent !== "All") {
     imgsContainer.forEach(img => img.style.display = "none");
      for (let i = (index - 1) * 2; i < index * 2; i++) {
        imgsContainer.item(i).style.display = "block"; 
      }
    }

  }
})


// animation images and secrions
const designImage = document.getElementById("design-image");
const designText = document.getElementById("design-text");
const aboutImage = document.getElementById("about-image");
let scrollNum = window.innerWidth >= 760 ? 600 : 200;
const statusNums = document.querySelectorAll(".status .box .num"),
      skillsRange = document.querySelectorAll(".ourskills .prog span"),
      plansNums = document.querySelectorAll(".pricing .plans .plan span");

let startedGoal = false, startedProgg = false;

window.onscroll = () => {
  // animate design
  if (window.scrollY >= designImage.parentNode.offsetTop - scrollNum) {
    designImage.style.transform = "translateY(0)";
    designText.style.transform = "translateX(0)";
  }
  // animate about
  if (window.scrollY >= aboutImage.parentNode.offsetTop - scrollNum) {
    aboutImage.style.transform = "translateY(0)";
  }


  if (window.scrollY >= document.querySelector(".status").offsetTop - 300) {
    if (!startedGoal) {
      statusNums.forEach(num => counter(num, "goal"));
    }
      startedGoal = true;
  }

  if (window.scrollY >= document.querySelector(".skills").offsetTop - 300) {
    skillsRange.forEach(range => increaseWidth(range))
  }

  if (window.scrollY >= document.querySelector(".pricing").offsetTop - 300) {
    if (!startedProgg) {
      plansNums.forEach(num => counter(num, "goal"));
    }
      startedProgg = true;
  }


};
console.log(plansNums[0]);

// count func
function counter(num, data) {
  const goal = num.dataset[`${data}`];
  let count = setInterval(() =>{
    num.textContent++;
    if (num.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// increase width func
function increaseWidth(element) {
  const prog = element.dataset.progress;
  element.style.width = prog;
}
