const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALIZE === 'true'
})

module.exports = withBundleAnalyzer({})