import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    label: string;
    primary?: boolean;
    secondary?: boolean;
    link?: string;
}

const Button: React.FC<ButtonProps> = ({ label, primary, secondary, link }) => {
    const navigate = useNavigate();
    const baseClasses =
        "gap-2.5 self-stretch p-2.5 my-auto min-w-[240px] shadow-[4px_4px_0px_rgba(1,101,47,1)] w-[244px]";
    const primaryClasses = primary ? "bg-orange-500" : "";
    const secondaryClasses = secondary ? "bg-orange-100" : "";

    return (
        <button
            onClick={link ? () => navigate(`/${link}`) : () => {}}
            className={`${baseClasses} ${primaryClasses} ${secondaryClasses} mx-2 transform transition-transform duration-300 hover:scale-105`}
        >
            {label}
        </button>
    );
};

export default Button;
