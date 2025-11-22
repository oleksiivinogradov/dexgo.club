# GitHub Pages Deployment Guide for dexgo.club

This guide will help you deploy your dexgo.club website to GitHub Pages with automatic deployment.

## ✅ What I've Already Set Up

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automatically builds and deploys on every push to `main` branch
   - Can also be triggered manually from GitHub Actions tab

2. **Vite Configuration** (`vite.config.js`)
   - Configured with `base: '/'` for custom domain

3. **CNAME File** (`public/CNAME`)
   - Contains your custom domain: `dexgo.club`

## 🔧 What You Need to Do

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: `https://github.com/oleksiivinogradov/dexgo.club`
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Source**, select:
   - Source: **GitHub Actions** (not "Deploy from a branch")
5. Click **Save**

### Step 2: Configure Your Domain DNS Settings

You need to configure your domain registrar's DNS settings. Add these DNS records:

#### Option A: Using A Records (Recommended)
Add these **A records** pointing to GitHub's IP addresses:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### Option B: Using CNAME Record (for www subdomain)
```
Type: CNAME
Name: www
Value: oleksiivinogradov.github.io
```

### Step 3: Configure Custom Domain in GitHub

1. In your repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `dexgo.club`
3. Click **Save**
4. Wait for DNS check to complete (may take a few minutes)
5. Once verified, check **Enforce HTTPS** (recommended)

### Step 4: Push Your Code

```bash
# Make sure all changes are committed
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Step 5: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, your site will be live at `https://dexgo.club`

## 🚀 How It Works

- **Automatic Deployment**: Every time you push to the `main` branch, GitHub Actions will:
  1. Install dependencies
  2. Build your Vite app
  3. Deploy to GitHub Pages
  
- **Manual Deployment**: You can also trigger deployment manually:
  1. Go to **Actions** tab
  2. Click on "Deploy to GitHub Pages" workflow
  3. Click **Run workflow** button

## 🔍 Troubleshooting

### DNS Not Propagating
- DNS changes can take up to 24-48 hours to propagate globally
- Use `dig dexgo.club` or online DNS checkers to verify
- Clear your browser cache

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### 404 Errors on Routes
- The current setup should handle client-side routing correctly
- If you encounter issues, you may need to add a `404.html` that redirects to `index.html`

### HTTPS Not Working
- Make sure "Enforce HTTPS" is checked in Pages settings
- Wait a few minutes after DNS verification for SSL certificate to be issued

## 📝 Important Notes

1. **First Deployment**: The first deployment might take 5-10 minutes
2. **Subsequent Deployments**: Usually complete in 2-3 minutes
3. **Branch**: Make sure you're pushing to the correct branch (`main`)
4. **Domain Verification**: GitHub will verify domain ownership via DNS

## 🎯 Quick Checklist

- [ ] Enable GitHub Pages with "GitHub Actions" source
- [ ] Configure DNS A records at your domain registrar
- [ ] Add custom domain in GitHub Pages settings
- [ ] Enable HTTPS enforcement
- [ ] Push code to trigger deployment
- [ ] Wait for DNS propagation (can take up to 48 hours)
- [ ] Visit https://dexgo.club to verify

## 🔗 Useful Links

- Your repository: `https://github.com/oleksiivinogradov/dexgo.club`
- GitHub Actions: `https://github.com/oleksiivinogradov/dexgo.club/actions`
- GitHub Pages settings: `https://github.com/oleksiivinogradov/dexgo.club/settings/pages`

---

**Need Help?** Check the Actions tab for deployment logs or GitHub Pages documentation.
