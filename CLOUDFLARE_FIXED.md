# Cloudflare Pages Deployment - Fixed Version

This guide provides updated instructions for deploying the LilyHack website to Cloudflare Pages, addressing the 500 Internal Server Error issue.

## Key Changes Made

1. **Simplified API Route**
   - Removed unnecessary configuration options
   - Implemented ultra-conservative response handling
   - Added multiple fallback mechanisms
   - Shortened OpenAI API timeouts

2. **Enhanced Error Handling**
   - All API responses now return 200 status codes
   - Improved JSON response formatting
   - Added retry logic to the frontend
   - Better error message formatting

3. **Cloudflare-Specific Optimizations**
   - Reduced token count to stay within limits
   - Simplified system message
   - Removed verbose logging
   - Added plain text error detection

## Deployment Steps

1. **Log in to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Pages"

2. **Configure Environment Variables (CRITICAL)**
   - In your Cloudflare Pages project settings, go to "Environment variables"
   - Make sure to add BOTH of these variables to BOTH "Production" and "Preview":
     - `OPENAI_API_KEY`: Your complete OpenAI API key
     - `OPENAI_API_BASE`: Set to either `https://api.openai.com/v1` or your custom API endpoint

3. **Build Settings**
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node.js version: 18 (or higher)

4. **Compatibility Flags (IMPORTANT)**
   - Under "Functions" tab, enable compatibility flags
   - Add the following compatibility flags:
     - nodejs_compat
     - streams (if available)

5. **Deploy**
   - Click "Save and Deploy"
   - Wait for the build and deployment to complete

## Troubleshooting

If you still encounter issues:

1. **Check Cloudflare Logs**
   - Go to your Cloudflare Pages project
   - Click on a deployment
   - Check the "Functions" tab for any error logs

2. **Verify API Keys**
   - Double-check that your API keys are correctly set
   - Make sure there are no extra spaces or newlines
   - Try generating a new API key if necessary

3. **Test Locally First**
   - Run `npm run build` and `npm start` locally
   - Test the chat functionality
   - Check the browser console for any errors

4. **Fallback Options**
   - If you can't get OpenAI working, consider using a different AI provider
   - You can also modify the chat interface to use a mock response for testing

## Important Technical Notes

- We've completely redesigned the API route to be more compatible with Cloudflare's Edge runtime
- The frontend now has better error handling and retry logic
- All responses return 200 status codes to avoid CORS issues
- We're now explicitly checking for plain text error responses
