import { Facebook, Github, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            'service_4g2uhhm', 
            'template_dd2vkxg', 
            form.current, {
            publicKey: '7_4O3Z6VEHgdl13kT',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                console.log('Message sent!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon. (maybe not if you're playing around :P)"
            });

            setIsSubmitting(false); 

        }, 1500);
    }

    return (
        <section 
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >   
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 ,ax-w-2xl mx-auto">
                    Want to know more about me (kepohchi to stalk me 😜)?
                    Feel free to reach out.
                    I'm always open to discussing new opportunities!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information 
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/30">
                                    <Mail className="h-6 w-6 text-primary"/> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        Email  
                                    </h4>
                                    <a 
                                        href="mailto:excelyynxl@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        excelyynxl@gmail.com 
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/30">
                                    <Phone className="h-6 w-6 text-primary"/> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        Phone  
                                    </h4>
                                    <a 
                                        href="tel:+601128805868" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +60 11-28805868 
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me </h4>
                            <div className="flex space-x-4 justify-center">
                                <a 
                                    href="https://www.linkedin.com/in/excelyynx-lim-177973304/"
                                    target="_blank"
                                >
                                    <Linkedin />
                                </a>

                                <a 
                                    href="https://www.instagram.com/excel_is_ex/?hl=en"
                                    target="_blank"
                                >
                                    <Instagram />
                                </a>

                                <a
                                    href="https://www.facebook.com/excelyynx.lim/"
                                    target="_blank"
                                >
                                    <Facebook />
                                </a>

                                <a 
                                    href="https://github.com/excelyynxl-a11y"
                                    target="_blank"
                                >
                                    <Github />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div 
                        className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name" 
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text" 
                                    name="user_name" 
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="You think I know your name?"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email" 
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    name="user_email" 
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="idontknowyouremail@gmail.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message" 
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea 
                                    name="message" 
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hi, Ex. I'll like to talk about..."
                                />
                            </div>

                            <button 
                                type="submit" 
                                value="Send"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    
                            )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}