
export default function Socials() {
    return (
        <div
            className="text-sm flex flex-col absolute bottom-4 right-6 gap-2 text-right z-30"
        >
            <a  href="https://www.instagram.com/pazyuk_design/" target="_blank" 
                className="items-center gap-2 transition-transform duration-200 hover:scale-105 origin-right drop-shadow">
                <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/anna-pazyuk-4043357a/" target="_blank" 
                className="items-center gap-2 transition-transform duration-200 hover:scale-105 origin-right drop-shadow">
                <span>LinkedIn</span>
            </a>
            <a href="https://www.behance.net/annagurova/" target="_blank" 
                className="items-center gap-2 transition-transform duration-200 hover:scale-105 origin-right drop-shadow">
                <span>Behance</span>
            </a>
            <a href="mailto:hello@pzk.design" target="_blank" 
                className="items-center gap-2 transition-transform duration-200 hover:scale-105 origin-right drop-shadow">
                <span>hello@pzk.design</span>
            </a>
        </div>
    )

}