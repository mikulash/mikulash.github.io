import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";


const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-8 py-4">
                <nav className="mb-8">
                    <h1 className="text-3xl lowercase text-black dark:text-white">Your Name</h1>
                </nav>

                <section id="about" className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-5xl font-bold text-black dark:text-white">
                            Hi, <span className="text-blue-500">I'm Your Name</span>
                        </h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300">
                            I am a software developer specializing in React, TypeScript, and more.
                        </p>
                        <p className="text-xl text-gray-700 dark:text-gray-300">
                            Currently, I work at <a href="#" className="underline">Your Company</a>, building amazing web experiences.
                        </p>
                    </div>
                    <img
                        src="your-image.jpg"
                        alt="Your Portrait"
                        className="rounded-lg shadow-lg"
                    />
                </section>

                <section id="projects" className="mt-12">
                    <h2 className="text-4xl font-bold text-black dark:text-white">Projects</h2>
                    <div className="grid grid-cols-1 gap-8 mt-4 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Project 1</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>A description of your project goes here.</p>
                                <Button asChild>
                                    <a href="https://github.com/yourproject1" target="_blank" rel="noopener noreferrer">
                                        View on GitHub
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Project 2</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>A description of another project.</p>
                                <Button asChild>
                                    <a href="https://github.com/yourproject2" target="_blank" rel="noopener noreferrer">
                                        View on GitHub
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section id="contact" className="mt-12">
                    <h2 className="text-4xl font-bold text-black dark:text-white">Contact</h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">
                        Reach out via email at <a href="mailto:your-email@example.com" className="underline">your-email@example.com</a>.
                    </p>
                    <Input type="email" placeholder="Your email" className="mt-4" />
                </section>
            </div>
        </div>
    );
};

export default App;
