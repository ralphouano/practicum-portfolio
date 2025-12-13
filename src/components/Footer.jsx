import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 block">
                            Ralph Ouano<span className="text-white">.</span>
                        </span>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            A personal portfolio documenting my journey as a Full-Stack Web Developer Intern.
                            Built with React, Tailwind CSS, and a passion for clean code.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-text-secondary">
                            <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#profile" className="hover:text-primary transition-colors">Profile</a></li>
                            <li><a href="#preparation" className="hover:text-primary transition-colors">Preparation</a></li>
                            <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                            <li><a href="#blog" className="hover:text-primary transition-colors">Journal</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        &copy; {new Date().getFullYear()} Ralph Ouano. All rights reserved.
                    </p>
                    <p className="text-text-muted text-sm flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> during Practicum
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
