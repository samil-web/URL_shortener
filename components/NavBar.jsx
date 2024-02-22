import '../app/globals.css'
export default function NavBar() {
  return (
    <div className="margin-side">
    <ul className="flex justify-between items-center w-1/3">
    <li className="font-extrabold text-3xl">Shortly</li>
    <li><button>Features</button></li>
    <li><button>Pricing</button></li>
    <li><button>Resources</button></li>
    </ul>
    <ul className="flex justify-around items-center w-1/6">
    <li><button>Log in</button></li>
    <li><button className="bg-[#28D0CD] px-5 py-2 rounded-full text-white">Sign up</button></li>
    </ul>
    </div>
  )
}
