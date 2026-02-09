"use client";

import React, { useEffect, useState } from "react";

interface ContactProps {
    isOpen: boolean;
    onClose: () => void;
}

const Contact = ({ isOpen, onClose }: ContactProps) => {
    const [visible, setVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            setSubmitted(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 250);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <div
                onClick={handleClose}
                className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300
                ${visible ? "opacity-100" : "opacity-0"}`}
            />

            {/* Modal */}
            <div
                className={`
                    relative z-[110] w-full max-w-md rounded-xl
                    bg-[#0b0b0b]/70 backdrop-blur-xl
                    border border-white/10
                    p-8 shadow-2xl
                    transform transition-all duration-300 ease-out
                    origin-top
                    ${
                        visible
                            ? "scale-100 opacity-100 translate-y-0"
                            : "scale-75 opacity-0 -translate-y-6"
                    }
                `}
            >
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                    Contact Me
                </h2>

                <p className="text-gray-400 mb-6">
                    Have a project in mind or just want to say hi?
                    Drop a message below 👇
                </p>

                {/* ✅ FORMSpree Form */}
                <form
                    action="https://formspree.io/f/mreabkbe"
                    method="POST"
                    onSubmit={() => setSubmitted(true)}
                    className="flex flex-col gap-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        required
                        className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-white resize-none focus:outline-none focus:border-cyan-500"
                    />

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 py-3 rounded-md font-semibold text-white hover:opacity-90 transition"
                    >
                        Send Message
                    </button>

                    {submitted && (
                        <p className="text-green-400 text-sm text-center">
                            Message sent successfully ✅
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
