/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            {
                source: "/",
                destination: "/signup",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
