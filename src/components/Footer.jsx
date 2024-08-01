import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:underline">Home</Link></li>
                            <li><Link to="/report-issue" className="hover:underline">Report Issue</Link></li>
                            <li><Link to="/issue-tracker" className="hover:underline">Issue Tracker</Link></li>
                            <li><Link to="/government-action" className="hover:underline">Government Action</Link></li>
                            <li><Link to="/news-and-update" className="hover:underline">News and Update</Link></li>
                            <li><Link to="/guidelines-and-safety-tips" className="hover:underline">Guidelines and Safety Tips</Link></li>
                            <li><Link to="/user-profile" className="hover:underline">User Profile</Link></li>
                            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                            <li><Link to="/feedback-and-suggestion" className="hover:underline">Feedback and Suggestion</Link></li>
                            <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
                            <li><Link to="/team-and-support" className="hover:underline">Team and Support</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-2 leading-7">Contact Us</h2>
                        <p>Email: contact@citizenresolve.com</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Address: 123 Citizen Resolve Street, City, Country</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-2 ">Follow Us</h2>
                        <ul className="leading-relaxed ">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center ">
                    <p>&copy; {new Date().getFullYear()} Citizen Resolve. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
