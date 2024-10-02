import React, { useState, useEffect } from 'react';
import { Sun, Moon, Twitter, Linkedin, Cloud, Mail, Github } from 'lucide-react';

const LeetCodeIcon = ({ size = 24, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className}>
        <path fill="currentColor" d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
    </svg>
);

const BlinkingCursor = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(v => !v);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return <span className={`${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>;
};

const LightBulb = ({ darkMode, toggleDarkMode }) => (
    <div className="relative inline-block cursor-pointer" onClick={toggleDarkMode}>
        <div className={`w-6 h-6 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-yellow-300'} transition-colors duration-300`} />
        <div className="absolute top-6 left-1/2 w-px h-4 bg-gray-400 transform -translate-x-1/2" />
        <div className="absolute top-10 left-1/2 w-4 h-4 border-2 border-gray-400 rounded-full transform -translate-x-1/2 hover:scale-110 transition-transform" />
    </div>
);

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const sections = ['home', 'about', 'projects', 'contact'];

    const iconComponents = [
        { name: 'Twitter', Icon: Twitter, link: 'https://twitter.com/AugnikBanerjee' },
        { name: 'Linkedin', Icon: Linkedin, link: 'https://linkedin.com/in/augnik-banerjee' },
        { name: 'Github', Icon: Github, link: 'https://github.com/Augnik03' },
        { name: 'Mail', Icon: Mail, link: 'mailto:shresnik2004@gmail.com' },
        { name: 'Cloud', Icon: Cloud, link: 'https://open.spotify.com/user/b3yb5peotuf58g2qjgrzfahff' },
        { name: 'LeetCode', Icon: LeetCodeIcon, link: 'https://leetcode.com/' }
    ];


    return (
        <div className={`h-screen mt-[-55px] mb-[-50px] mr-[-500px] ml-[-500px] ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-500`}>
            <div className="container mx-auto px-4 py-8">
                <header className="flex justify-between items-center mb-8">
                    <div className="text-sm font-mono">
                        &gt; $ cd /home/Augnik Banerjee<BlinkingCursor />
                    </div>
                    <nav className="space-x-4 flex items-center">
                        {sections.map(section => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`capitalize ${activeSection === section ? 'text-blue-500' : ''} hover:text-blue-300 transition-colors`}
                            >
                                {section}
                            </button>
                        ))}
                        <LightBulb darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    </nav>
                </header>

                <main className="text-center">
                    <div className="text-6xl mb-8 animate-bounce inline-block">
                        {activeSection === 'home' && '👋'}
                        {activeSection === 'about' && '🧑‍💻'}
                        {activeSection === 'projects' && '🚀'}
                        {activeSection === 'contact' && '📬'}
                    </div>
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Augnik Banerjee
                    </h1>
                    <p className="text-xl mb-8 italic">Crafting digital experiences</p>

                    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12">
                        {iconComponents.map(({ name, Icon, link }) => (
                            <a key={name} href={link} target="_blank" rel="noopener noreferrer" className="p-4 bg-opacity-10 bg-white rounded-lg hover:bg-opacity-20 transition-all transform hover:scale-110">
                                <Icon size={32} className="mx-auto" />
                            </a>
                        ))}
                    </div>


                    <div className="space-y-4">
                        {activeSection === 'home' && <p>Welcome to my digital space!</p>}
                        {activeSection === 'about' && <p>I'm a passionate developer with a love for clean code and innovative solutions.</p>}
                        {activeSection === 'projects' && <p>Check out my latest projects and experiments.</p>}
                        {activeSection === 'contact' && <p>Let's connect and create something amazing together!</p>}
                    </div>
                </main>

                <footer className="text-center text-sm mt-12 opacity-70 ">
                    <p>&copy; {new Date().getFullYear()} • Augnik Banerjee • Embracing the digital frontier</p>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;