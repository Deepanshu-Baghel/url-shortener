
import './App.css'

const router = createBrowserRouter([
  {
      Element: <AppLayout/>,
      children: [
          { path: "/", element: <LandingPage /> },
      ]
  }
])

function App() {


  return (
    <div className="App">
      <h1 className="text-3xl font-bold">URL Shortener</h1>
      <p>Welcome to the URL Shortener app! This application allows you to easily shorten long URLs into more manageable and shareable links. Simply enter a long URL, and we'll generate a shorter version for you to use. Whether you're sharing links on social media, in emails, or anywhere else, our URL shortener makes it easy to share your content without the hassle of long URLs.</p>
    </div>
  )
}

export default App
