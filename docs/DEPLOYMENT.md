# Deployment Workflow

This document outlines the proper workflow for making changes and deploying them to production.

## Overview

Our project is deployed through Vercel, which automatically deploys changes when they are merged into the `main` branch. To ensure smooth deployments and maintain code quality, follow these steps:

## Development Workflow

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   - Branch names should be descriptive and follow the pattern: `feature/`, `fix/`, or `docs/` followed by a brief description
   - Example: `feature/add-get-involved-section`

2. **Make Your Changes**
   - Make your code changes
   - Test locally
   - Ensure all tests pass

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Descriptive commit message"
   ```
   - Write clear, descriptive commit messages
   - Reference any related issues or tickets

4. **Push Your Branch**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Go to GitHub repository
   - Create a new Pull Request from your feature branch to `main`
   - Add a description of your changes
   - Request review if needed

6. **Review and Merge**
   - Address any review comments
   - Once approved, merge the PR into `main`
   - Delete the feature branch after successful merge

## Deployment Process

1. **Automatic Deployment**
   - Vercel automatically deploys changes when merged to `main`
   - Each PR gets a preview deployment
   - Production deployment happens after merge to `main`

2. **Verifying Deployment**
   - Check Vercel dashboard for deployment status
   - Clear browser cache if seeing old version
   - Verify changes in production environment

## Troubleshooting

If you're seeing old versions after deployment:

1. Check Vercel dashboard for deployment status
2. Clear browser cache
3. Check if deployment was successful
4. Verify the correct branch was merged

## Best Practices

- Never push directly to `main`
- Always create feature branches for changes
- Write clear commit messages
- Test changes locally before pushing
- Review code before merging
- Keep branches up to date with `main`

## Need Help?

If you encounter any deployment issues:
1. Check Vercel dashboard
2. Review deployment logs
3. Contact the team for assistance 