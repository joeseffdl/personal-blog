const Socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/zenzephy/",
  },
  {
    name: "GitHub",
    link: "https://www.github.com/joeseffdl/",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/zen_zephy/",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/joseph-de-leon-309037240/",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCzz71vh75tZOhTMIf-Fc4vw",
  },
]

const Cosmetics = ["Eat", "Code", "Ride", "Sleep"];

export default function Footer() {
  return (
    <footer className="flex h-40 px-40 py-10 bg-gradient-to-r from-[#4B9FEB] via-[#8F6AC0] to-[#A92970]">
      <div className="w-3/5 font-semibold">
        <ul className=" flex gap-5">
          {Cosmetics.map((cosmetic) => (
            <li key={cosmetic}>{cosmetic}.</li>
          ))}
        </ul>
      </div>
      <div className="w-2/5 text-sm flex gap-5 mt-0.5">
        <div className="font-semibold">Connect:</div>
        <ul className="flex gap-5 h-fit">
          {Socials.map((social) => (
            <li key={social.name} className="relative">
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white duration-300
                  after:absolute after:translate-y-5 after:left-0 after:bg-[#EEE8A9] after:w-0 after:hover:w-full after:h-0.5 after:duration-300 after:rounded-full after:transition-all after:ease-in-out
                "
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
