# StudioSpace – Studio Booking Platform

StudioSpace is a modern studio rental and booking platform that connects creators, photographers, filmmakers, podcasters, musicians, and artists with the perfect creative spaces. Users can explore available studios, view studio details, add studios to their wishlist, book their favorite spaces, and list their own studios for rent.

The platform provides a smooth, responsive user experience with both **Dark Mode and Light Mode** support.

## 🚀 Technologies Used

### Frontend
- **React.js** – Building interactive user interfaces.
- **Next.js** – React framework for routing and application development.
- **TypeScript** – Type safety and better code maintainability.
- **Tailwind CSS** – Utility-first styling and responsive layouts.
- **shadcn/ui** – Reusable and customizable UI components.
- **Lucide React** – Modern icons.
- **Next Themes** – Dark and Light theme management.

## ✨ Key Features

- **Studio Exploration:** Browse and explore a variety of creative studios.
- **Studio Details:** View detailed information about each studio, including descriptions, images, pricing, location, and amenities.
- **Studio Booking:** Book studios according to your preferred schedule.
- **Wishlist:** Save favorite studios to your personal wishlist for later.
- **Add Studio:** Allow users to list and manage their own studios.
- **Studio Categories:** Explore studios based on their specific categories.
- **User Authentication:** Secure user access and personalized features.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Dark & Light Mode:** Switch between dark and light themes for a comfortable browsing experience.
- **Modern UI:** Clean, intuitive, and user-friendly interface.

## 🏢 Studio Categories

StudioSpace supports the following studio categories:

1. Photo Studio
2. Film Stage
3. Podcast Lounge
4. Music Suite
5. Workshop
6. Sound Stage
7. Art Studio
8. Dance Studio
9. Other

## 📁 Project Structure

```text
StudioSpace/
├── app/
│   ├── about/
│   ├── studios/
│   ├── add-studio/
│   ├── my-bookings/
│   ├── wishlist/
│   └── ...
├── components/
│   ├── home/
│   ├── shared/
│   └── ui/
├── lib/
├── public/
├── types/
├── package.json
└── README.md
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd StudioSpace
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add the required environment variables.

```env
NEXT_PUBLIC_API_URL=YOUR_API_URL
```

Add any additional authentication or backend environment variables required by your application.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🎨 Theme Support

StudioSpace supports both Dark Mode and Light Mode, allowing users to switch themes according to their preferences.

## 🎯 Project Goal

The goal of StudioSpace is to make creative studio discovery and booking easier by providing a centralized platform where creators can find suitable spaces and studio owners can showcase and rent their properties.

---

**StudioSpace – Find Your Space. Create Your Story.**