const loginiconButton = document.querySelector("[data-login-icon-btn]")
const topbar = document.querySelector("[data-topbar]")
const bodyscroll = document.querySelector("[data-body]")

loginiconButton.addEventListener("click", () => {
    topbar.classList.toggle("open")
    bodyscroll.classList.toggle("open")
})