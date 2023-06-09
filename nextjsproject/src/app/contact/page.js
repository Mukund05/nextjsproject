import React from 'react';
import ContactCard from "@/app/Components/ContactCard";
import styles from "@/app/contact/contact.module.css"
import ContactForm from "@/app/Components/ContactForm";

const contact = () => {
    return (
        <>
            <div className={styles.container}>
                <ContactCard/>
                <section className={styles.contact_section}>
                    <h2>We&apos;d Love to hear <span>from you</span></h2>
                    <ContactForm/>
                </section>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27993.049533399633!2d77.13689808711501!3d28.71562507755841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d019b1d5d2c0b%3A0xc1e6a3811f55c247!2sShalimar%20Bagh%2C%20New%20Delhi%2C%20Delhi%20110088!5e0!3m2!1sen!2sin!4v1685181217863!5m2!1sen!2sin"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy"
                className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>

        </>
    );
};

export default contact;