import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

const MenuItem = ({ name, items, route }) => {
    const [isExpanded, setState] = useState(false);
    const toggle = () => setState(!isExpanded);
    return (
        <>
            <div className="flex items-center justify-between border-b-2 border-current">
                <Link to={route}>{name}</Link>
                {items ? (
                    <FontAwesomeIcon
                        icon={isExpanded ? faMinus : faPlus}
                        size="xs"
                        className="m-1"
                        onClick={() => toggle()}
                    />
                ) : null}
            </div>
            <ul className="list-disc list-inside text-sm">
                {isExpanded &&
                    items.map(({ text, to, onClick }) => (
                        <li key={uuid()}>
                            <Link to={to} onClick={() => onClick()}>
                                {text}
                            </Link>
                        </li>
                    ))}
            </ul>
        </>
    );
};

const portfolioList = [
    {
        text: "Project 1",
        to: "/some-route",
    },
    {
        text: "Project 2",
        to: "/some-route",
    },
    {
        text: "Project 3",
        to: "/some-route",
    },
];

const contactList = [
    {
        text: "Email",
        to: "/some-route",
    },
    {
        text: "GitHub",
        to: "/some-route",
    },
    {
        text: "LinkedIn",
        to: "/some-route",
    },
];

export default ({ setTheme }) => {
    const [showNav, setState] = useState(false);
    const toggle = () => setState(!showNav);

    const themeList = [
        {
            text: "Light",
            onClick: () => setTheme("light"),
        },
        {
            text: "Dark",
            onClick: () => setTheme("dark"),
        },
        {
            text: "Tropical",
            onClick: () => setTheme("tropical"),
        },
        {
            text: "MonoAmber",
            onClick: () => setTheme("monoAmber"),
        },
        {
            text: "MonoGreen",
            onClick: () => setTheme("monoGreen"),
        },
    ];

    return (
        <>
            {showNav ? (
                <div className="w-64 h-screen space-x-4">
                    <FontAwesomeIcon
                        icon={faBars}
                        size="lg"
                        className="m-4"
                        onClick={toggle}
                    />
                    <MenuItem
                        name="Portfolio"
                        items={portfolioList}
                        route="/some-route"
                    />
                    <MenuItem
                        name="Contact"
                        items={contactList}
                        route="/some-route"
                    />
                    <MenuItem
                        name="Themes"
                        items={themeList}
                        route="/some-route"
                    />
                    <MenuItem name="Home" route="/some-route" />
                </div>
            ) : (
                <div className="w-0">
                    <FontAwesomeIcon
                        icon={faBars}
                        size="lg"
                        className="m-4"
                        onClick={toggle}
                    />
                </div>
            )}
        </>
    );
};
