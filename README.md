# 🏀 Nike UI Clone

<div align="center">
  <img src="src/assets/images/header-logo.svg" alt="Nike Logo" width="150"/>
  
  [![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>

A sleek, modern, and fully responsive UI clone of Nike's landing page built using **React**, **Tailwind CSS**, and **Vite**. This project serves as a comprehensive frontend design and layout practice, showcasing modern web development techniques and Nike's iconic visual aesthetics.

## 🌟 Live Demo

> **Note**: Replace with your actual deployment URL

- **Demo**: [Nike UI Clone Live](https://nike-ui-ten.vercel.app/)
- **Repository**: [GitHub](https://github.com/AnkitMishra2006/Nike-UI)

## 📌 Features

### 🎨 Design & UI

- ⚡ **Hero Section**: Eye-catching hero with interactive shoe selector and dynamic image switching
- 🛍️ **Product Showcase**: Beautiful product cards with hover effects and ratings
- 📊 **Statistics Display**: Dynamic statistics with impressive numbers
- 🎯 **Special Offers**: Dedicated section for promotions and deals
- 💬 **Customer Reviews**: Testimonial cards with customer feedback
- 📧 **Newsletter Subscription**: Email capture with modern input design

### 🚀 Technical Features

- 🧩 **Modular Components**: Reusable React components for scalability
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid development
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎭 **Interactive Elements**: Clickable shoe thumbnails and dynamic content
- 🧼 **Clean Code**: Well-structured and maintainable codebase
- 🔧 **State Management**: React hooks for interactive features

### 🎪 Page Sections

1. **Navigation**: Responsive header with mobile hamburger menu
2. **Hero**: Main banner with shoe selector and call-to-action
3. **Popular Products**: Product grid with ratings and pricing
4. **Super Quality**: Quality assurance section with detailed content
5. **Services**: Three-column service highlights (shipping, payment, support)
6. **Special Offer**: Promotional content with engaging visuals
7. **Customer Reviews**: Social proof through customer testimonials
8. **Newsletter**: Email subscription with modern design
9. **Footer**: Comprehensive footer with links and social media

---

## 🛠️ Tech Stack

### Frontend

- **React 19.0.0** - Modern JavaScript library for building user interfaces
- **Vite 6.2.0** - Next generation frontend build tool
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### Development Tools

- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS post-processor for Tailwind
- **Autoprefixer** - CSS vendor prefixing

### Fonts & Assets

- **Montserrat** - Primary font for body text
- **Palanquin** - Secondary font for headings
- **Custom SVG Icons** - Scalable vector graphics for UI elements
- **High-Quality Images** - Product and brand imagery

---

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AnkitMishra2006/Nike-UI.git
   cd "NIKE UI Clone Practice Tailwind"
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

---

## 📂 Project Structure

```
nike-ui-clone/
├── 📁 public/
│   └── favicon.ico
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── 📁 icons/          # SVG icons (arrow, social media, etc.)
│   │   │   ├── arrow-right.svg
│   │   │   ├── star.svg
│   │   │   ├── facebook.svg
│   │   │   ├── instagram.svg
│   │   │   ├── twitter.svg
│   │   │   └── index.js       # Icon exports
│   │   └── 📁 images/         # Product images and logos
│   │       ├── big-shoe1.png
│   │       ├── big-shoe2.png
│   │       ├── big-shoe3.png
│   │       ├── header-logo.svg
│   │       ├── footer-logo.svg
│   │       ├── shoe4.svg - shoe8.svg
│   │       └── index.js       # Image exports
│   ├── 📁 components/         # Reusable UI components
│   │   ├── Button.jsx         # Custom button component
│   │   ├── Nav.jsx            # Navigation header
│   │   ├── PopularProductCard.jsx
│   │   ├── ReviewCard.jsx     # Customer review card
│   │   ├── ServiceCard.jsx    # Service feature card
│   │   └── ShoeCard.jsx       # Interactive shoe selector
│   ├── 📁 constants/          # Static data and configuration
│   │   └── index.js           # Navigation links, products, reviews
│   ├── 📁 sections/           # Main page sections
│   │   ├── Hero.jsx           # Main hero section
│   │   ├── PopularProducts.jsx
│   │   ├── SuperQuality.jsx
│   │   ├── Services.jsx
│   │   ├── SpecialOffer.jsx
│   │   ├── CustomerReviews.jsx
│   │   ├── Subscribe.jsx      # Newsletter section
│   │   ├── Footer.jsx
│   │   └── index.js           # Section exports
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles and Tailwind imports
├── 📄 index.html              # HTML template
├── 📄 package.json            # Dependencies and scripts
├── 📄 tailwind.config.js      # Tailwind configuration
├── 📄 postcss.config.js       # PostCSS configuration
├── 📄 vite.config.js          # Vite configuration
└── 📄 README.md               # Project documentation
```

---

## 🎨 Component Architecture

### Core Components

#### `Button.jsx`

Reusable button component with customizable styling

```jsx
<Button
  label="Shop Now"
  iconURL={arrowRight}
  backgroundColor="bg-coral-red"
  textColor="text-white"
  fullWidth={false}
/>
```

- **Props**: `label`, `iconURL`, `backgroundColor`, `textColor`, `borderColor`, `fullWidth`
- **Features**: Conditional styling, icon support, responsive design

#### `ShoeCard.jsx`

Interactive thumbnail selector for hero section

```jsx
<ShoeCard
  imgURL={shoe}
  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
  bigShoeImg={bigShoeImg}
/>
```

- **Props**: `imgURL`, `changeBigShoeImage`, `bigShoeImg`
- **Features**: Click handling, active state styling, responsive layout

#### `PopularProductCard.jsx`

Product display card with rating and pricing

```jsx
<PopularProductCard imgURL={shoe4} name="Nike Air Jordan-01" price="$200.20" />
```

- **Props**: `imgURL`, `name`, `price`
- **Features**: Star rating display, consistent sizing, hover effects

### Section Components

#### `Hero.jsx`

Main landing section with dynamic shoe display

- **State**: `bigShoeImg` for active shoe selection
- **Features**: Statistics display, interactive shoe selector, call-to-action
- **Data**: Uses `shoes` and `statistics` arrays from constants

#### `PopularProducts.jsx`

Product grid showcasing Nike's popular items

- **Data Source**: `products` array from constants
- **Features**: Responsive grid layout, product cards
- **Layout**: 4 columns on large screens, responsive down to 1 column

---

## 🎯 Key Features Breakdown

### Interactive Shoe Selector

The hero section features an interactive shoe selector that dynamically changes the main product image:

```jsx
const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

// Dynamic shoe switching functionality
{
  shoes.map((shoe, index) => (
    <ShoeCard
      key={index}
      imgURL={shoe}
      changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
      bigShoeImg={bigShoeImg}
    />
  ));
}
```

### Responsive Design System

- **Mobile-first approach** with Tailwind's responsive utilities
- **Custom breakpoints** defined in `tailwind.config.js`
- **Flexible layouts** using CSS Grid and Flexbox
- **Custom spacing** system with utility classes

### Custom Styling System

```css
/* Custom utility classes in index.css */
.padding {
  @apply sm:px-16 px-8 sm:py-24 py-12;
}
.padding-x {
  @apply sm:px-16 px-8;
}
.info-text {
  @apply font-montserrat text-slate-gray text-lg leading-7;
}
.max-container {
  max-width: 1440px;
  margin: 0 auto;
}
```

---

## 🎨 Design System

### Color Palette

```javascript
colors: {
  primary: "#ECEEFF",        // Light blue background
  "coral-red": "#FF6452",    // Nike's signature red
  "slate-gray": "#6D6D6D",   // Text color
  "pale-blue": "#F5F6FF",    // Section backgrounds
  "white-400": "rgba(255, 255, 255, 0.80)"
}
```

### Typography Scale

```javascript
fontSize: {
  xs: ["12px", "16px"],
  sm: ["14px", "20px"],
  base: ["16px", "19.5px"],
  lg: ["18px", "21.94px"],
  xl: ["20px", "24.38px"],
  "2xl": ["24px", "29.26px"],
  "3xl": ["28px", "50px"],
  "4xl": ["48px", "58px"],
  "8xl": ["96px", "106px"],    // Hero headlines
}
```

### Font Families

- **Headings**: Palanquin (Bold, impactful)
- **Body Text**: Montserrat (Clean, readable)
- **Google Fonts**: Imported in `index.css`

### Custom Components

- **Box Shadow**: `3xl: "0 10px 40px rgba(0, 0, 0, 0.1)"`
- **Background Images**: Hero and card backgrounds
- **Custom Breakpoint**: `wide: "1440px"`

---

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: 1024px - 1440px (xl)
- **Wide**: > 1440px (custom breakpoint)

### Mobile Optimizations

- **Navigation**: Hamburger menu for small screens
- **Hero Layout**: Stacked on mobile, side-by-side on desktop
- **Product Grid**: 1 column on mobile, up to 4 on desktop
- **Typography**: Responsive font sizes
- **Spacing**: Reduced padding on mobile devices
- **Touch Targets**: Appropriately sized for touch interaction

### Responsive Patterns

```jsx
// Example from Hero section
<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:pading-x pt-28">
  <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[85] font-bold">
```

---

## 🔧 Configuration Files

### Tailwind Configuration (`tailwind.config.js`)

- **Content**: Configured for HTML, JS, TS, JSX, TSX files
- **Custom Theme**: Extended fonts, colors, shadows
- **Background Images**: Custom hero and card backgrounds
- **Custom Breakpoints**: Wide screen support

### Vite Configuration (`vite.config.js`)

- **React Plugin**: Configured for React development
- **Build Optimization**: Production-ready builds
- **Dev Server**: Hot reload and fast refresh

### PostCSS Configuration (`postcss.config.js`)

- **Tailwind CSS**: Main styling framework
- **Autoprefixer**: Browser compatibility

---

## 🚀 Performance Optimizations

### Build-Time Optimizations

- **Vite Build Tool**: Fast development and optimized production builds
- **CSS Purging**: Tailwind removes unused styles in production
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Automatic image and asset optimization

### Runtime Optimizations

- **Component Splitting**: Modular architecture for better code splitting
- **Efficient Re-renders**: Proper React key usage
- **Image Optimization**: Appropriate sizing and format selection
- **Bundle Size**: Minimal dependencies for faster loading

### Code Quality

- **ESLint**: Configured for React and modern JavaScript
- **Clean Architecture**: Separation of concerns
- **Reusable Components**: DRY principle implementation

---

## 📊 Available Scripts

In the project directory, you can run:

```bash
# Start development server with hot reload
npm run dev

# Build optimized production bundle
npm run build

# Run ESLint for code quality checks
npm run lint

# Preview production build locally
npm run preview
```

### Script Details

- **`dev`**: Starts Vite development server on `http://localhost:5173`
- **`build`**: Creates optimized production build in `dist/` folder
- **`lint`**: Runs ESLint to check code quality and standards
- **`preview`**: Serves the production build for local testing

---

## 🎯 Learning Objectives

This project demonstrates proficiency in:

### Frontend Development

- **Modern React**: Hooks, functional components, state management
- **Component Architecture**: Reusable, modular component design
- **Props and State**: Proper data flow and state management
- **Event Handling**: Interactive user interface elements

### Styling and Design

- **Tailwind CSS**: Utility-first CSS methodology
- **Responsive Design**: Mobile-first development approach
- **Custom Design System**: Colors, typography, spacing
- **CSS Grid and Flexbox**: Modern layout techniques

### Development Tools

- **Vite**: Modern build tool configuration
- **ESLint**: Code quality and linting
- **Git**: Version control and repository management
- **Package Management**: npm/yarn dependency management

### Best Practices

- **Clean Code**: Readable and maintainable code structure
- **File Organization**: Logical project structure
- **Performance**: Optimized builds and efficient rendering
- **Accessibility**: Semantic HTML and proper alt texts

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. **Fork the Repository**

   ```bash
   # Click the "Fork" button on GitHub
   git clone https://github.com/YourUsername/Nike-UI.git
   ```

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**

   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

4. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Add some amazing feature"
   ```

5. **Push to Your Branch**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Include screenshots if applicable
   - Reference any related issues

### Coding Standards

- **ESLint Rules**: Follow the configured ESLint rules
- **Component Structure**: Use functional components with hooks
- **Naming Conventions**: Use descriptive, camelCase names
- **File Organization**: Keep related files together
- **Comments**: Add comments for complex logic
- **Commit Messages**: Use clear, descriptive commit messages

### Areas for Contribution

- **Bug Fixes**: Report and fix bugs
- **New Features**: Add new functionality
- **Documentation**: Improve README and code comments
- **Performance**: Optimize components and build process
- **Testing**: Add unit and integration tests
- **Accessibility**: Improve accessibility features

---

### Reporting Issues

1. **Check Existing Issues**: Search the [Issues](https://github.com/AnkitMishra2006/Nike-UI/issues) page
2. **Create New Issue**: If your problem isn't listed, create a new issue
3. **Provide Details**: Include detailed information about the problem
4. **Screenshots**: Add screenshots or screen recordings if applicable
5. **Environment**: Specify your operating system, browser, and Node.js version

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

- ✅ **Commercial Use**: You can use this project commercially
- ✅ **Modification**: You can modify the code
- ✅ **Distribution**: You can distribute the code
- ✅ **Private Use**: You can use it privately
- ❗ **Liability**: The author is not liable for any damages
- ❗ **Warranty**: No warranty is provided

---

## 🙏 Acknowledgments

### Inspiration & Resources

- **Nike** - For design inspiration and brand assets
- **React Team** - For the amazing framework and ecosystem
- **Tailwind CSS** - For the utility-first CSS approach
- **Vite Team** - For the lightning-fast build tool
- **Community** - For open-source contributions and inspiration

### Design Assets

- **Icons**: Custom SVG icons for UI elements
- **Images**: High-quality product and promotional images
- **Fonts**: Google Fonts (Montserrat & Palanquin)
- **Colors**: Nike's official brand colors and custom palette

### Learning Resources

- **React Documentation**: Official React docs
- **Tailwind CSS Documentation**: Comprehensive utility documentation
- **MDN Web Docs**: Web standards and best practices
- **Frontend Mentor**: Design challenges and community

---

## 📞 Contact & Social

**Ankit Mishra**

- 🐙 **GitHub**: [@AnkitMishra2006](https://github.com/AnkitMishra2006)

## 🏆 Project Stats & Metrics

### Development Stats

- **Lines of Code**: ~2,000+
- **Components**: 12+ reusable components
- **Sections**: 8 main page sections
- **Assets**: 20+ icons and images
- **Responsive Breakpoints**: 4 device sizes
- **Development Time**: ~40 hours
- **File Count**: 30+ source files

## 📈 Project Roadmap

<div align="center">

## 🌟 Show Your Support

If this project helped you learn something new or inspired your own work:

[![Star this repo](https://img.shields.io/badge/⭐-Star%20this%20repo-yellow?style=for-the-badge)](https://github.com/AnkitMishra2006/Nike-UI)
[![Fork this repo](https://img.shields.io/badge/🔄-Fork%20this%20repo-blue?style=for-the-badge)](https://github.com/AnkitMishra2006/Nike-UI/fork)
[![Follow me](https://img.shields.io/badge/👨‍💻-Follow%20me-green?style=for-the-badge)](https://github.com/AnkitMishra2006)

---

### Built with ❤️ and lots of ☕

**Happy Coding! 🚀**

_"The best way to learn is by building. Keep coding, keep learning!"_

---

<sub>Made with ❤️ by Ankit Mishra</sub>

</div>
