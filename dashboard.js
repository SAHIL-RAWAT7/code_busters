document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard Loaded!");

    // Example: Auto-update stat cards
    const statCards = document.querySelectorAll(".stat-card p");
    setInterval(() => {
        statCards.forEach((card) => {
            card.textContent = Math.floor(Math.random() * 500);
        });
    }, 3000); // Every 3 seconds
});
