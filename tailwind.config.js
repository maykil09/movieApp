module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            padding: ["last"],
            backgroundColor: ["active"],
            textColor: ["responsive", "hover", "focus", "group-hover"],
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
