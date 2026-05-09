import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactMe() {
    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_zvsai4e',
            'template_7bekbnk',
            form.current!,
            'Qpf-TlIH42e6xM4JN'
        )
            .then(() => alert("Message Sent!"))
            .catch(() => alert("Something went wrong, try again!"))
    }
    return (
        <div className="main">
            <div className="contactDiv">
                <h1>Let's chat! </h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label>Full Name</label>
                        <input type="text" name="user_name" placeholder="Enter your name" required />
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input type="email" name="user_email" placeholder="Enter your email address" required />
                    </div>
                    <div>
                        <label>Your Message</label>
                        <textarea name="message" placeholder="Enter your message" required />
                    </div>
                    <button type="submit">Send Message!</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe