module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            padding: ["last"],
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
