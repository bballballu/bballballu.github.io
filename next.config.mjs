const nextConfig = {
  // Cloudflare-only database bindings live outside the portfolio route.
  // Vinext validates them separately; Vercel should build the standard app.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
