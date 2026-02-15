import { useEffect } from "react"
import { useState } from "react"
import logo from "./assets/logo.png"
function App() {
  const [showLogin, setShowLogin] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    number: "",
    password: "",
    otp: ""
  })
  const [generatedOTP, setGeneratedOTP] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [youtube, setYoutube] = useState(0)
  const [insta, setInsta] = useState(0)
  const [telegram, setTelegram] = useState(0)
  const [displayText, setDisplayText] = useState("");
const fullText = "MISSION ( JEE + NEET ) = MISSIONJEET";
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = logo;
  link.setAttribute("download", "MISSIONJEET-Logo.png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const [darkMode, setDarkMode] = useState(true)

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}, [darkMode])
const handleScroll = () => {
  const section = document.getElementById("about");
  section.scrollIntoView({ behavior: "smooth" });
};

  useEffect(() => {
    let yt = 0
    let ig = 0
    let tg = 0

    const interval = setInterval(() => {

      if (yt < 1) {
        yt += 1
        setYoutube(yt)
      }

      if (ig < 90) {
        ig += 1
        setInsta(ig)
      }

      if (tg < 250) {
        tg += 5
        setTelegram(tg)
      }

      if (yt === 1 && ig >= 90 && tg >= 250) {
        clearInterval(interval)
      }

    }, 30)

    return () => clearInterval(interval)
  }, [])
  useEffect(() => {
  let index = 0;

  const typing = setInterval(() => {
    if (index < fullText.length) {
      setDisplayText((prev) => prev + fullText.charAt(index));
      index++;
    } else {
      clearInterval(typing);
    }
  }, 70);

  return () => clearInterval(typing);
}, []);
  

  return ( 
    <div className="bg-black text-white">
      {showLogin && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-gray-900 p-8 rounded-xl w-80 relative">
      {/* Close Button */}
      <button
        onClick={() => setShowLogin(false)}
        className="absolute top-3 right-3 text-gray-400"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center">
        Login
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="p-2 rounded bg-black border border-gray-700"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Username"
          className="p-2 rounded bg-black border border-gray-700"
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="p-2 rounded bg-black border border-gray-700"
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-black border border-gray-700"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <button className="bg-red-600 py-2 rounded hover:bg-red-700">
          Verify & Login
        </button>
      </div>
    </div>
  </div>
)}

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
     

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold">
          <span>MISSION</span>
          <span className="bg-red-600 px-2 ml-1">JEET</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">About</li>
          <li className="hover:text-red-500 cursor-pointer">Batches</li>
          <li className="hover:text-red-500 cursor-pointer">Suggestions</li>
        </ul>

        {/* Login Button (Always Right Side) */}
        <button
          onClick={() => setShowLogin(true)}
      className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
          Login
        </button>
      </nav>
      {/* HERO */}
      <section className="text-center py-20 px-6">
  <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">

    <div className="animate-bounceSlow">
      MISSION <br />
      ( JEE + NEET )
    </div>

    <div className="mt-2">
      = <span className="text-red-600 animate-zoomIn inline-block">
        MISSIONJEET
      </span>
    </div>

  </h2>

  <div className="mt-8 flex justify-center gap-6">
    <button
  onClick={handleDownload}
  className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700"
>
  Download Logo
</button>
    <button 
  onClick={handleScroll}
  className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
>
  Scroll Down
</button>
  </div>
</section>


      {/* ABOUT */}
      
     <section id="about" className="bg-gray-900 py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-8">
          About MISSIONJEET
        </h3>
         

        <p className="max-w-4xl mx-auto text-gray-300 text-center leading-8">
          MissionJEET is a mission to bring honesty and quality back into the JEE and NEET ecosystem.
          No rank purchasing, no fake promises, no star batch system — only high-quality academic content.
          Content is delivered by highly qualified and domain-expert educators.
          Students receive curated study material, strategy and concept clarity.
          We bridge aspirants with genuine mentorship and real experiences.
        </p>

        <p className="text-center mt-6 text-red-500 font-semibold text-xl">
          “Kisi Bacche Ka Nuksaan Nahi Hone Dena.”
        </p>
      </section>

      {/* SOCIAL STATS */}
      <section className="py-12 md:py-16 text-center px-4">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h4 className="text-4xl font-bold text-red-600">
              {youtube}M+
            </h4>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-red-600">
              {insta}K+
            </h4>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-red-600">
              {telegram}K+
            </h4>
          </div>
        </div>
      </section>

      {/* DRONA PROGRAM */}
      <section className="py-16 px-8 bg-gray-900">
        <h3 className="text-3xl font-bold text-center mb-12">
          Choose Your DRONA Program
        </h3>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-red-600 transition">
            <h4 className="text-2xl font-bold text-red-500 mb-4">DRONA JEE</h4>
            <p className="text-gray-400 mb-6">
              Yearlong Batch designed to maximize performance of serious JEE aspirants.
            </p>
            <button className="bg-red-600 px-6 py-2 rounded hover:bg-red-700">
              Register for JEE
            </button>
          </div>

          <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-red-600 transition">
            <h4 className="text-2xl font-bold text-red-500 mb-4">DRONA NEET</h4>
            <p className="text-gray-400 mb-6">
              Yearlong Batch with structured mentorship for focused NEET preparation.
            </p>
            <button className="bg-red-600 px-6 py-2 rounded hover:bg-red-700">
              Register for NEET
            </button>
          </div>

        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <h3 className="text-3xl font-bold text-center mb-12">
          What MissionJEET Offers
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "JEE/NEET Full Year Batches",
            "Preparation Strategy",
            "Mentorship Sessions",
            "Doubt Solving",
            "Motivation Boost",
            "Community Support",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition"
            >
              <h4 className="text-xl font-semibold mb-3 text-red-500">
                {item}
              </h4>
              <p className="text-gray-400">
                Guidance and structured support for serious aspirants.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* FEEDBACK */}
      <section className="py-16 px-8 bg-gray-900">
        <h3 className="text-3xl font-bold text-center mb-6">
          Drop your feedback
        </h3>

        <p className="text-center text-gray-400 mb-10">
          Share your suggestions and help us improve MissionJEET.
        </p>

        <div className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-black border border-gray-700"
          />

          <textarea
            placeholder="Write your feedback..."
            className="p-3 rounded bg-black border border-gray-700 h-32"
          ></textarea>

          <button className="bg-red-600 py-3 rounded hover:bg-red-700">
            Submit
          </button>
        </div>
      </section>

    </div>
  )
}

export default App