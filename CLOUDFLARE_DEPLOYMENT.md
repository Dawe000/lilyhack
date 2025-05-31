# Cloudflare Pages Deployment Instructions

This guide will help you deploy the LilyHack website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- Your OpenAI API key

## Steps to Deploy

1. **Log in to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Pages"

2. **Create a New Project**
   - Click "Create a project"
   - Connect to your GitHub account and select this repository

3. **Configure the Build Settings**
   - Set the production branch (usually `main`)
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`

4. **Add Environment Variables**
   - Scroll down to "Environment variables"
   - Add the following variables:
     - `OPENAI_API_KEY`: Your OpenAI API key
     - `OPENAI_API_BASE`: Set to `https://api.openai.com/v1` or your custom API endpoint

5. **Deploy**
   - Click "Save and Deploy"
   - Wait for the build and deployment to complete

## Troubleshooting

- **API Not Working**: Check that your environment variables are correctly set in the Cloudflare Pages dashboard.
- **Build Errors**: Check the build logs for any errors.
- **Runtime Errors**: Use the browser console to debug client-side issues.

## Important Notes

- This project uses Edge Runtime, which is compatible with Cloudflare Pages.
- CORS headers are automatically set for API routes.
- The AI chat functionality requires a valid OpenAI API key.
