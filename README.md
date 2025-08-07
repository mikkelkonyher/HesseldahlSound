# Hesseldahl Sound - Audio Mixing & Mastering Website

A modern, dark-themed React website for Hesseldahl Sound's professional audio mixing and mastering services.

## Features

- **Modern Design**: Dark, futuristic, and minimalistic with vibrant blue color scheme
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Modular Components**: Reusable React components built with Tailwind CSS
- **Interactive Elements**: Hover effects, transitions, and modern UI interactions
- **Complete Business Website**: All essential pages for an audio business

## Pages

- **Homepage**: Hero section with brand identity and service highlights
- **Selected Work**: Portfolio grid showcasing 6 featured projects with hover effects
- **How to Send Files**: Step-by-step guide for client file submissions
- **Rates**: Professional pricing cards with Euro and DKK pricing
- **About**: Company story and philosophy with lorem ipsum content
- **Contact**: Contact form integrated with EmailJS

## EmailJS Setup Instructions

To enable the contact form functionality:

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Create an Email Service**
   - Add your email provider (Gmail, Outlook, etc.)
   - Configure your email credentials

3. **Create an Email Template**
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
     - `{{to_email}}` - Your business email

4. **Get Your Credentials**
   - Service ID
   - Template ID
   - Public Key

5. **Update the Contact Component**
   - Open `/app/frontend/src/pages/Contact.jsx`
   - Replace the placeholder values in the `handleSubmit` function:
     ```javascript
     const serviceId = 'YOUR_SERVICE_ID';
     const templateId = 'YOUR_TEMPLATE_ID';
     const publicKey = 'YOUR_PUBLIC_KEY';
     ```

## Pricing Information

Current rates (including VAT):
- **Mixing**: 336€ (2,500 DKK) per song
- **Stereo Mastering**: 67€ (500 DKK) per song  
- **Stem Mastering**: 120€ (900 DKK) per song

All services include one free revision.

## Technology Stack

- **Frontend**: React 19.0.0
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Email**: EmailJS integration
- **Build**: Create React App with Craco

## Design Guidelines Followed

- Dark, futuristic, modern aesthetic with light effects
- Cyan color scheme (#5fd3f3, #22d3ee) for professional appearance
- Minimal icon usage for clean, professional look
- No sound icon in logo - clean text-based branding
- Futuristic glow effects and background elements
- Modular, reusable components
- Responsive design with hover effects
- Professional typography with wide tracking

## Running the Application

The application is already running on `http://localhost:3000` with hot reload enabled.

To restart if needed:
```bash
sudo supervisorctl restart frontend
```

## Project Structure

```
/app/frontend/src/
├── components/
│   ├── ui/                 # Shadcn/ui components
│   ├── Navigation.jsx      # Main navigation component
│   └── Footer.jsx          # Site footer
├── pages/
│   ├── HomePage.jsx        # Landing page
│   ├── SelectedWork.jsx    # Portfolio showcase
│   ├── HowToSendFiles.jsx  # File submission guide
│   ├── Rates.jsx           # Pricing information
│   ├── About.jsx           # Company information
│   └── Contact.jsx         # Contact form
├── hooks/
│   └── use-toast.js        # Toast notification hook
└── App.js                  # Main app component with routing
```

## Contact Information

- **Email**: hello@hesseldahlsound.com
- **Response Time**: Within 24 hours
- **Social**: Spotify and Instagram links included in footer

---

**Note**: This is a frontend-only implementation. No backend server or database is required.
