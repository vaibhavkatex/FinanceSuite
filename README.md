# I build a Micro Saas FinanceSuite - Premium EMI & Investment Calculator Suite

Free, professional-grade financial calculators. Calculate Home Loan EMI, SIP, FD, PPF, Sukanya Samriddhi (SSY), NPS, and read expert investment guides.

## 🚀 Live Demo

You can view the live version of this project at: **[https://financesuitex.netlify.app/](https://financesuitex.netlify.app/)**

## Local Development

To run the project locally, open the project in VS Code and run:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   This will start a local server at `http://localhost:3000` and automatically open your web browser.

## Production Build

To compile and optimize the site for production:

```bash
npm run build
```

This will bundle the HTML, CSS, and JS using Vite and output clean, production-ready static assets in the **`dist`** directory.

## Deployment

This project is fully production-ready and configured for instant deployment:

### 1. Netlify (Recommended)
- **Automatic Git Integration**: If you connect this repository to Netlify, it will automatically read `netlify.toml`, build using `npm run build`, and deploy the `dist` folder.
- **Manual Upload**: You can build the project locally with `npm run build` and drag-and-drop the generated **`dist`** folder into [Netlify Drop](https://app.netlify.com/drop).

### 2. Vercel
- Connecting to Vercel will automatically read the `vercel.json` file, run the build command, and deploy the optimized files.
