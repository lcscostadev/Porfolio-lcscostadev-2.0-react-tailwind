import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Prompt = ({ onSubmit }) => {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(input);
        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (

        <>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center text-white">
                    <span className="text-green-500 mr-2">guest@localhost:</span>
                    <span className="text-blue-500 mr-2">{`~${window.location.pathname}`}</span>
                    <span className="text-white mr-2">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        className="bg-transparent outline-none flex-grow"
                        value={input}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </>
    );
};

Prompt.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

const Terminal = () => {
    const [history, setHistory] = useState([]);

    const handleSubmit = (input) => {
        let newHistory = [...history, { input, output: "" }];

        if (input.trim() === "clear") {
            newHistory = [];
        } else {
            const index = newHistory.length - 1;
            const command = input.trim().split(" ")[0];

            switch (command) {
                case "--help":
                    newHistory[index].output = "--twitter, --github, --linkedin, --about, --star, --help, you can type 'clear' to clear the terminal";
                    break;
                case "--twitter":
                    newHistory[index].output = (
                        <a href="https://twitter.com/lcscostadev" className="underline" target="_blank" rel="noreferrer">
                            https://twitter.com/lcscostadev
                        </a>
                    );
                    break;
                case "--github":
                    newHistory[index].output = (
                        <a href="https://github.com/lcscostadev" className="underline" target="_blank" rel="noreferrer">
                            https://github.com/lcscostadev
                        </a>
                    );
                    break;
                case "--linkedin":
                    newHistory[index].output = (
                        <a href="https://linkedin.com/in/your_username" className="underline" target="_blank" rel="noreferrer">
                            https://linkedin.com/in/your_username
                        </a>
                    );
                    break;
                case "--about":
                    newHistory[index].output = "Hello there! my name is Lucas im 23 years old and im a Computer Science College Student, i have almost a Year of experience on Front-End with HTML/CSS/JavaScript and ReactJS/TailwindCSS, my goal is to become a MERN Full-Stack Developer."
                    break;
                case "--star":
                    newHistory[index].output = (
                        <a href="https://github.com/lcscostadev/lucas-costa-portfolio" className="underline" target="_blank" rel="noreferrer" >
                            You can help me starring my github repo here https://github.com/lcscostadev/lucas-costa-portfolio
                        </a>
                    )
                    break;
                default:
                    newHistory[index].output = `Command '${command}' not found. Type '--help' to see available commands.`;
                    break;
            }
        }

        setHistory(newHistory);
    };

    return (
        <>
            <div className="flex m-10">
                <div
                    className="bg-black p-4 rounded-l-lg h-96 max-w-lg overflow-y-scroll border-[#00ff7f]  border-t-4 border-l-4 border-b-4"
                    style={{ scrollbarWidth: "thin" }}
                >
                    {history.map((command, index) => (
                        <div key={index} className="text-white">
                            <span className="text-green-500">guest@localhost:</span>
                            <span className="text-blue-500">{`~${window.location.pathname}`}</span>
                            <span className="text-white">$ {command.input}</span>
                            <br />
                            {command.output && (
                                <pre className="ml-8 whitespace-pre-wrap">{command.output}</pre>
                            )}
                        </div>
                    ))}
                    <Prompt onSubmit={handleSubmit} />
                </div>
                <div className="text-white border-[#00ff7f] border-t-4 border-r-4 border-b-4 rounded-r-lg p-4">
                    <h1>This is a heading</h1>
                    <p>Thats a P</p>
                </div>
            </div>
        </>
    );
};

export default Terminal;