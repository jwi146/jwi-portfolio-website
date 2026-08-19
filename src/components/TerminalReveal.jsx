
import {useState, useEffect} from 'react'

//reveal a terminal styled box with a few bullet points about me
const TerminalReveal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [displayedText, setDisplayedText] = useState("");

    //lines to be displayed, typed one after another
    const lines = [
        "> whoami",
        "> James Irving",
        "> I enjoy creating different things from code to 3D diaramas ",
        "> Chose to pursue Computer Science but have a strong interest in Physics and History",
        "> Currently exploring: cryptography, React, project management"
    ];
    const fullText = lines.join("\n");

    useEffect(() => {
        if (isOpen && displayedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(fullText.slice(0, displayedText.length + 1))
            }, 30)
            return () => clearTimeout(timeout);
        }
    }, [isOpen, displayedText])

    //toggle open/closed, reset text so it retypes each time
    const handleToggle = () => {
        if (isOpen) {
            setIsOpen(false);
            setDisplayedText("");
        } else {
            setIsOpen(true);
        }
    }

    return (
        <div className="text-center">
            <button
                className="bg-gray-500 text-white px-4 py-2 rounded font-mono"
                onClick={handleToggle}
            >
                &gt;_whoami
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out mx-auto max-w-md ${
                    isOpen ? 'max-h-[300px] mt-4' : 'max-h-0 mt-0'
                }`}
            >
                <div className="bg-black p-4 rounded shadow-lg">
                    <p className="font-mono text-green-400 whitespace-pre-wrap text-left">
                        {displayedText}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TerminalReveal;