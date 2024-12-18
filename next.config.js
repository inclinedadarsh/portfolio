/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/blog",
                destination: "https://blog-self-six-88.vercel.app/blog",
            },
            {
                source: "/blog/:path*",
                destination: "https://blog-self-six-88.vercel.app/blog/:path*",
            },
        ];
    },
    async redirects() {
        return [
            {
                source: "/webdev",
                destination:
                    "https://drive.google.com/file/d/1b-puCaHl8Ys9siaok7SZZL05IV94G4wY/view?usp=sharing",
                permanent: true,
            },
            {
                source: "/devrel",
                destination:
                    "https://drive.google.com/file/d/1Mh833p8PMYZYOqwo-D-MEpSmcuohUHYH/view?usp=sharing",
                permanent: true,
            },
            {
                source: "/mle",
                destination:
                    "https://drive.google.com/file/d/1hZnw-vQn671sOK-3psuq4ASV_PeMIg6i/view?usp=sharing",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
