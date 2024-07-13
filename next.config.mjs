// const withMDX = require('@next/mdx')()
// import withMDX from '@next/mdx';
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    // pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
    webpack: (config) => {
        config.module.rules.push(
          {
            test: /\.md$/,
            use: 'raw-loader'
          }
        )
        return config
    },
}

export default nextConfig;
