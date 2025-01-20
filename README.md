# E-commerce List Page with Animations

This is an interactive and animated e-commerce list page designed to enhance the user experience through smooth animations and transitions. The page displays a grid of products, allows users to filter and sort items, and provides a pleasant shopping experience with animations such as hover effects, loading indicators, and smooth transitions when adding products to the cart.

## Features

- **Product Listing Grid:** 
  - Products are displayed in a responsive grid layout.
  - Each product card includes an image, name, price, and an "Add to Cart" button.

- **Animations:**
  - **Hover Effect:** Product cards animate on hover (slight scale-up, shadow effect).
  - **Loading Animation:** A skeleton loader or spinner is shown while the page loads.
  - **Add to Cart Animation:** The "Add to Cart" button has a ripple effect when clicked, with a subtle cart icon animation.
  - **Filter/Sort Animation:** Smooth transition effects when filters or sorting options are applied.
  - **Lazy Loading:** Product images fade in smoothly as they load.

- **Filters and Sorting:**
  - Filters available for categories and price ranges.
  - Sorting options for "Price: Low to High" and other sorting methods.

- **Cart Notification:** 
  - A toast notification or floating animation appears when a product is added to the cart.

- **Responsive Design:**
  - The layout is fully responsive for mobile, tablet, and desktop devices.

## Technical Requirements

- **Technologies Used:**
  - **HTML**: Structure of the page.
  - **CSS**: Styling and animations (CSS transitions, keyframes).
  - **JavaScript** (or React): Functionality of the page (handling filters, sorting, adding items to the cart, etc.).
  - Optional: **GSAP** for more complex animations (e.g., animations for the cart, loading, etc.).

- **External Libraries Used:**
  - **Toastify** for cart notifications.
  - **React** for the frontend framework.
  - **CSS Grid** for responsive grid layout.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/AshokGfsd/ecommerce.git
```

2. Navigate to the project directory:

```bash
cd ecommerce
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and go to `http://localhost:5173` to see the page.

## Animations Overview

### 1. **Hover Effect on Product Cards:**
- On hover, the product card slightly scales up and adds a shadow effect for a more interactive feel. This helps users focus on the product they are interested in.

### 2. **Loading Animation:**
- A skeleton loader or spinner is displayed when the page is first loaded, ensuring that users know content is being loaded.

### 3. **Add to Cart Animation:**
- The "Add to Cart" button is animated with a ripple effect when clicked, providing a visual feedback when a user adds a product to their cart.
- A subtle cart icon animation follows the action, showing that the product was successfully added.

### 4. **Filter and Sort Animation:**
- When filters or sorting options are applied, the page smoothly transitions to reflect the new selection, enhancing the user experience.

### 5. **Cart Notification:**
- A toast notification or floating animation is triggered when a product is added to the cart, providing users with immediate feedback.

## Accessibility Features

- **Keyboard Navigation:** 
  - All interactive elements (like buttons, select dropdowns) are accessible via the keyboard.
- **Color Contrast:**
  - The page uses high contrast colors for readability.

## Live Demo

You can view the live demo of the project []().
