import Image from "next/image"
export default function Footer() {
  return (
    <main className="bg-black flex w-full items-start justify-center pt-11">
    <div className="w-1/3">
        <h3 className="text-white text-center text-3xl max-h-full">Shortly</h3>
    </div>
    <div className="w-1/3 text-white flex justify-around">
        <div>
            <ul>
            <li className="pb-5"><h3>Features</h3></li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className="pb-5"><h3>Resources</h3></li>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className="pb-5"><h3>Company</h3></li>
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    <div className="w-1/3 pl-16 pr-36 flex items-center justify-around">
        <Image alt ='logo' width='20' height='20' src='/images/icon-facebook.svg'/>
        <Image alt ='logo' width='20' height='20' src='/images/icon-twitter.svg'/>
        <Image alt ='logo' width='20' height='20' src='/images/icon-pinterest.svg'/>
        <Image alt ='logo' width='20' height='20' src='/images/icon-instagram.svg'/>
    </div>
    </main>
  )
}
