# Revamp-it Developer Documentation

## Project Overview

This document provides technical documentation for the Revamp-it website project. The site is built using Next.js, React, TypeScript, and Tailwind CSS, with a focus on performance, accessibility, and internationalization.

## Technology Stack

- **Framework:** Next.js 14
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS
- **State Management:** React Context + Zustand
- **Content Management:** Sanity.io (headless CMS)
- **Testing:** Jest + React Testing Library
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel

## Project Structure

```
revamp-it/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── [lang]/         # Localized routes
│   │   │   ├── page.tsx    # Home page
│   │   │   ├── about/      # About page
│   │   │   ├── offerings/  # Services page
│   │   │   └── ...
│   ├── components/         # Reusable components
│   │   ├── ui/            # Basic UI components
│   │   ├── layout/        # Layout components
│   │   └── sections/      # Page sections
│   ├── lib/               # Utility functions
│   ├── styles/            # Global styles
│   └── types/             # TypeScript types
├── public/                # Static assets
├── content/              # Localized content
│   ├── en/              # English content
│   └── de/              # German content
└── tests/               # Test files
```

## Setup Instructions

1. **Prerequisites:**
   - Node.js 18+
   - npm or yarn
   - Git

2. **Installation:**
   ```bash
   git clone https://github.com/revamp-it/website.git
   cd website
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Development:**
   ```bash
   npm run dev
   ```

## Localization Setup

1. **Configuration:**
   ```typescript
   // next.config.js
   module.exports = {
     i18n: {
       locales: ['en', 'de'],
       defaultLocale: 'en',
     },
   }
   ```

2. **Content Structure:**
   - Content is stored in JSON files under `content/[lang]/`
   - Each page has its own content file
   - Shared content (e.g., navigation) is in `common.json`

3. **Usage in Components:**
   ```typescript
   import { useTranslation } from 'next-i18next'
   
   export default function Component() {
     const { t } = useTranslation('common')
     return <h1>{t('title')}</h1>
   }
   ```

## Component Development

1. **Component Structure:**
   ```typescript
   interface ComponentProps {
     // Props definition
   }
   
   export default function Component({ prop1, prop2 }: ComponentProps) {
     // Component logic
     return (
       // JSX
     )
   }
   ```

2. **Styling Guidelines:**
   - Use Tailwind CSS classes
   - Follow mobile-first approach
   - Maintain consistent spacing using design tokens

3. **Accessibility:**
   - Use semantic HTML
   - Include ARIA labels where needed
   - Ensure keyboard navigation
   - Test with screen readers

## Testing

1. **Unit Tests:**
   ```typescript
   import { render, screen } from '@testing-library/react'
   
   test('Component renders correctly', () => {
     render(<Component />)
     expect(screen.getByText('Expected Text')).toBeInTheDocument()
   })
   ```

2. **Testing Guidelines:**
   - Test component rendering
   - Test user interactions
   - Test accessibility
   - Test responsive behavior

## Deployment

1. **Production Build:**
   ```bash
   npm run build
   ```

2. **Deployment Process:**
   - Push to main branch
   - GitHub Actions runs tests
   - Vercel deploys automatically

## Contributing

1. **Branch Naming:**
   - feature/feature-name
   - bugfix/bug-name
   - hotfix/issue-name

2. **Commit Messages:**
   ```
   type(scope): description
   
   [optional body]
   
   [optional footer]
   ```

3. **Pull Requests:**
   - Include description of changes
   - Link to related issues
   - Request reviews from team members

## Performance Optimization

1. **Image Optimization:**
   - Use Next.js Image component
   - Provide appropriate sizes
   - Use WebP format when possible

2. **Code Splitting:**
   - Use dynamic imports for large components
   - Implement route-based code splitting

3. **Caching:**
   - Implement proper cache headers
   - Use SWR for data fetching

## Monitoring

1. **Error Tracking:**
   - Sentry for error monitoring
   - Logging for debugging

2. **Performance Monitoring:**
   - Vercel Analytics
   - Web Vitals monitoring

## Security

1. **Best Practices:**
   - Sanitize user input
   - Use HTTPS
   - Implement CSP headers
   - Regular dependency updates

2. **Authentication:**
   - Use secure session management
   - Implement rate limiting
   - Protect sensitive routes

## Troubleshooting

1. **Common Issues:**
   - Build failures
   - Localization problems
   - Styling conflicts

2. **Debugging:**
   - Use browser dev tools
   - Check server logs
   - Verify environment variables

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs) 