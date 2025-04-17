# Revamp-it Website

This is the official website for Revamp-it, built with Next.js, TypeScript, and Tailwind CSS. Our mission is to empower communities and reduce e-waste through sustainable IT solutions.

## Features

- 🌍 Multilingual support (English and German)
- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast performance with Next.js
- 📱 Mobile-first approach
- ♿ Accessibility-focused
- 🔄 Content management with Sanity.io

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/revamp-it/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
revamp-it/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── [lang]/         # Localized routes
│   │   │   ├── page.tsx    # Home page
│   │   │   ├── about/      # About page
│   │   │   └── ...
│   ├── components/         # Reusable components
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript types
├── content/              # Localized content
│   ├── en/              # English content
│   └── de/              # German content
└── public/              # Static assets
```

## Documentation

- [Website Blueprint](docs/WEBSITE_BLUEPRINT.md)
- [Developer Documentation](docs/DEVELOPER_DOC.md)
- [Contributing Guidelines](docs/CONTRIBUTING.md)
- [Code of Conduct](docs/CODE_OF_CONDUCT.md)

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](docs/CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please:
- Open an issue
- Join our Discord channel
- Contact the maintainers

## Acknowledgments

- Thanks to all contributors and volunteers
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
