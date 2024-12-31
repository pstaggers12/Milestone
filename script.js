// Function to show additional information when clicking on a milestone
// Confetti Function
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fcfafa', '#0707fa', '#3a026b', '#080808']
    });
}

// Create Sparkle
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);

    // Remove the sparkle after animation
    setTimeout(() => sparkle.remove(), 500);
}

// Add Sparkles on Click
document.addEventListener('click', (e) => {
    for (let i = 0; i < 10; i++) {
        const offsetX = Math.random() * 20 - 10;
        const offsetY = Math.random() * 20 - 10;
        createSparkle(e.clientX + offsetX, e.clientY + offsetY);
    }
});

//Modified showDetails Function
function showDetails(child) {
    const milestones = {
        Diamond: {
		text: "I wobbled my way to my first steps! A huge milestone in my early development.My first words were, Dada, and it marked the beginning of their language development.The first day of school was a big step! It was the beginning of my academic journey and social growth. Graduating from preschool was such a proud moment, celebrating all I've learned and achieved.",
		image: "Diamond.jpg",
		gemstone: "DG.png"
	},
        Sapphire: {
		text: "I wobbled my way to my first steps! A huge milestone in my early development.My first words were, Dada, and it marked the beginning of their language development.The first day of school was a big step! It was the beginning of my academic journey and social growth. Graduating from preschool was such a proud moment, celebrating all I've learned and achieved.",
		image: "Sapphire.jpg",
		gemstone: "SG.png"
	},
        Amethyst: {
		text: "I wobbled my way to my first steps! A huge milestone in my early development.My first words were, Mama, and it marked the beginning of their language development.The first day of school was a big step! It was the beginning of my academic journey and social growth. Graduating from preschool was such a proud moment, celebrating all I've learned and achieved.",
		image: "Amethyst.jpg",
		gemstone: "AG.png"
	},
        Onyx: {
		text: "I wobbled my way to my first steps! A huge milestone in my early development.My first words were, Mine, and it marked the beginning of their language development.The first day of school was a big step! It was the beginning of my academic journey and social growth.",
		image: "Onyx.jpg",
		gemstone: "OG.png"
	}
    };

    // Launch confetti
    launchConfetti();

    // Set the modal content to show the image and text
    document.getElementById("modal-img").src = milestones[child].image;
    document.getElementById("modal-text").innerHTML = `
        <img src="${milestones[child].gemstone}" alt="Gemstone" style="width: 50px; height: 50px; margin-bottom: 10px;">
        <p>${milestones[child].text}</p>
    `;

    // Show the modal
    document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
document.querySelector(".close").onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}

