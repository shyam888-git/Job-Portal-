/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'jobportal.com',
                port:'',
                pathname:'',
            }
        ]
    }
};

export default nextConfig;
