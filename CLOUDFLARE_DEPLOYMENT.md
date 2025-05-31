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
   - Make sure to add these variables to both "Production" and "Preview" environments

5. **Configure Compatibility Settings**
   - Under "Functions" compatibility flag, select "Nodejs_compat" to ensure Node.js modules work correctly
   - Under "Web Analytics", enable "Privacy First" analytics to help monitor site performance

6. **Deploy**
   - Click "Save and Deploy"
   - Wait for the build and deployment to complete

## Troubleshooting

- **API Not Working (500 Errors)**: 
  - Make sure your environment variables are correctly set in the Cloudflare Pages dashboard
  - Check that both `OPENAI_API_KEY` and `OPENAI_API_BASE` are set correctly
  - For Venice AI specifically, make sure your API key has the correct permissions
  - Try using `gpt-3.5-turbo` as the model if you encounter issues with other models

- **Build Errors**: 
  - Check the build logs for any errors
  - Make sure all dependencies are correctly installed
  - Verify that your Next.js version is compatible with Cloudflare Pages

- **CORS Issues**:
  - The API has been configured to allow cross-origin requests
  - If you see CORS errors in the console, check that the headers are correctly set in the API route

- **Runtime Errors**: 
  - Use the browser console to debug client-side issues
  - Enable Cloudflare Analytics to monitor for runtime errors
  - For persistent issues, try deploying a simplified version of the app first

## Important Notes

- This project uses Edge Runtime, which is compatible with Cloudflare Pages.
- CORS headers are automatically set for API routes.
- All API responses now return 200 status codes to improve Cloudflare compatibility.
- The AI chat functionality requires a valid OpenAI API key.
- For best performance, we've simplified some aspects of the API to work better with Cloudflare's limits.
