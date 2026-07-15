# Prompt for Antigravity Agent: Building a Lovely Portfolio Website

## 1. System Role & Context
You are an expert full-stack web developer and UI/UX designer. Your task is to build a stunning, high-performance, and deeply "lovely" personal portfolio website. The site should feel handcrafted, warm, and professional, leaving a lasting impression on visitors (recruiters, clients, and fellow creatives).

## 2. Project Overview & Vibe
*   **Aesthetic/Vibe:** Minimalist but warm. Think soft gradients, ample whitespace, subtle micro-interactions, and refined typography. It shouldn't feel cold or overly corporate; it needs personality and elegance.
*   **Layout:** A seamless single-page application (SPA) with smooth scrolling between sections.
*   **Theme:** Light mode by default with an elegant dark mode toggle. 

## 3. Design System
*   **Color Palette (Light Mode):** Soft cream background (`#FAF9F6`), primary text in deep charcoal (`#2D2D2D`), and accents in a warm terracotta or muted sage green.
*   **Color Palette (Dark Mode):** Deep midnight blue/black background (`#0F172A`), off-white text (`#E2E8F0`), and soft glow accents.
*   **Typography:** A beautiful serif for headings (e.g., *Playfair Display* or *Merriweather*) paired with a clean, readable sans-serif for body text (e.g., *Inter* or *Roobert*).
*   **UI Elements:** Soft rounded corners (e.g., `12px` border-radius), gentle drop shadows on cards, and glassmorphism effects for the sticky navigation bar.

## 4. Core Sections Required

1.  **Hero Section:** 
    *   A welcoming, large-typography introduction.
    *   Headline: "Hi, I'm [Name]. I build/design [craft/specialty]."
    *   Background: A subtle, soft, slow-moving mesh gradient that feels like breathing.
    *   Call to action (CTA): "View My Work" (smooth scrolls to Projects).

2.  **About Me:**
    *   A 2-column layout. Left: A beautifully framed, stylized portrait or avatar. Right: A short, engaging bio focusing on passion, philosophy, and personal drive.

3.  **Selected Work (Projects):**
    *   A clean grid of 3-4 featured projects.
    *   Each project card should have a high-quality cover image, title, a brief 1-sentence description, and tags for the tech stack/tools used.
    *   **Hover effect:** The card lifts slightly, and the image scales up gently inside its container (CSS `transform: scale(1.03)`).

4.  **Skills & Tools:**
    *   A minimalist marquee or a clean, pill-shaped tag grid representing technical skills and creative tools. Keep it visually uncluttered.

5.  **Contact Section:**
    *   A simple, elegant contact form (Name, Email, Message) styled with minimal borders.
    *   Links to social profiles (GitHub, LinkedIn, Dribbble, etc.) using clean vector icons.
    *   A friendly sign-off message ("Let's create something beautiful together.").

## 5. Technical & Functional Requirements
*   **Responsiveness:** Must look flawless on mobile, tablet, and desktop. Ensure touch targets are large enough on mobile.
*   **Animations:** Use subtle reveal animations as the user scrolls down the page (e.g., fade-in and slide-up). Do not over-animate; keep it tasteful and performant.
*   **Performance:** Optimize image loading, minimize bundle sizes, and ensure a 90+ Lighthouse score.
*   **Accessibility:** Semantic HTML tags, proper ARIA labels, keyboard navigability, and high color contrast are mandatory.

## 6. Execution Instructions for the Agent
1.  Start by scaffolding the project structure and routing (if multi-page).
2.  Implement the global design system (variables for colors, fonts, spacing).
3.  Build out sections sequentially, starting with the Hero and Navigation.
4.  Ensure all components are modular, well-named, and beautifully formatted in the code.
5.  Wait for my feedback on the Hero section before building the entire project grid.
