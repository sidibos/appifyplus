import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react"; //this line

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx", //this line
        }),
        react(), //this line
    ],
});


// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';

// export default defineConfig({
//     server: {
//         host: 'localhost',
//     },
//     plugins: [
//         laravel([
//             'resources/js/app.jsx',
//             'resources/js/app.js',
//         ]),
//     ],
// });
