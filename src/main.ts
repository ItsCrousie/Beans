/* Main App */
const app = document.getElementById('app')!

app.innerHTML = `<h1>Welcome to Beans 👋</h1>`

//Service working for PWA-ness of the app.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}

