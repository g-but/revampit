# Contributing to Revamp-it

Thank you for your interest in contributing to the Revamp-it website project! This document provides guidelines and instructions for contributing to our codebase.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Getting Started

1. **Fork the Repository:**
   - Click the "Fork" button on the GitHub repository page
   - Clone your forked repository:
     ```bash
     git clone https://github.com/your-username/revamp-it.git
     cd revamp-it
     ```

2. **Set Up Development Environment:**
   - Follow the setup instructions in [DEVELOPER_DOC.md](DEVELOPER_DOC.md)
   - Install dependencies:
     ```bash
     npm install
     ```

3. **Create a New Branch:**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/your-bug-name
   ```

## Development Workflow

1. **Make Changes:**
   - Follow the coding standards and guidelines
   - Write tests for new features
   - Update documentation as needed

2. **Commit Changes:**
   - Use conventional commit messages:
     ```
     type(scope): description
     
     [optional body]
     
     [optional footer]
     ```
   - Types: feat, fix, docs, style, refactor, test, chore
   - Scope: component, page, config, etc.

3. **Push Changes:**
   ```bash
   git push origin your-branch-name
   ```

4. **Create Pull Request:**
   - Go to the GitHub repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Request reviews from team members

## Coding Standards

1. **TypeScript:**
   - Use strict mode
   - Define types for all props and functions
   - Avoid `any` type
   - Use interfaces for object types

2. **React Components:**
   - Use functional components
   - Follow React Hooks rules
   - Implement proper prop types
   - Use meaningful component names

3. **Styling:**
   - Use Tailwind CSS classes
   - Follow mobile-first approach
   - Maintain consistent spacing
   - Use design tokens

4. **Accessibility:**
   - Use semantic HTML
   - Include ARIA labels
   - Ensure keyboard navigation
   - Test with screen readers

## Testing

1. **Write Tests:**
   - Unit tests for components
   - Integration tests for features
   - E2E tests for critical paths

2. **Run Tests:**
   ```bash
   npm test        # Run all tests
   npm test:watch  # Run tests in watch mode
   ```

## Documentation

1. **Update Documentation:**
   - Keep README.md up to date
   - Document new features
   - Update API documentation
   - Add usage examples

2. **Code Comments:**
   - Add comments for complex logic
   - Document function parameters
   - Explain non-obvious decisions

## Review Process

1. **Code Review:**
   - Address all review comments
   - Make necessary changes
   - Update documentation
   - Ensure tests pass

2. **Merge Process:**
   - Squash commits if needed
   - Update commit message
   - Wait for approval
   - Merge to main branch

## Deployment

1. **Production Deployment:**
   - Changes are automatically deployed
   - Monitor deployment status
   - Verify changes in production

2. **Rollback Plan:**
   - Know how to rollback changes
   - Have backup ready
   - Document rollback steps

## Support

If you need help:
- Open an issue
- Join our Discord channel
- Contact the maintainers

## Thank You!

We appreciate your contribution to making Revamp-it better! 