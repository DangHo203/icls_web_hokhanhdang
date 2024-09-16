import React from "react";
import InputField from "./InputField";

interface ContactFormProps {
    onSubmit: (formData: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col px-16 py-20 w-full bg-white border-2 border-green-800 border-solid max-md:px-5 max-md:max-w-full"
        >
            <h2 className="self-center text-5xl leading-loose text-center text-orange-500 font-[250] max-md:max-w-full max-md:text-4xl">
                Get in touch
            </h2>
            <InputField
                name="fullName"
                label="Your Full name"
                className="mt-24 max-md:mt-10"
            />
            <div className="flex flex-wrap gap-6 mt-16 w-full leading-none max-md:mt-10 max-md:max-w-full">
                <InputField
                    name="email"
                    label="Email"
                    type="email"
                    className="flex-1"
                />
                <InputField
                    name="phoneNumber"
                    label="Phone Number"
                    type="tel"
                    className="flex-1"
                />
            </div>
            <InputField
                name="subject"
                label="Subject"
                className="mt-16 max-md:mt-10"
            />
            <InputField
                name="message"
                label="Message Us"
                as="textarea"
                className="mt-16 min-h-[297px] max-md:mt-10"
            />
            <button
                type="submit"
                className={`gap-2.5 p-2.5 max-w-full text-2xl font-semibold text-black whitespace-nowrap bg-orange-500 shadow-[4px_4px_0px_rgba(1,101,47,1)] w-[347px] h-[84px] rounded-[42px] self-center`}
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
