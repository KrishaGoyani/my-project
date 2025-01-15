<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cleaning Tips</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <section class="blog-section">
        <h1>Cleaning tips from professionals</h1>
        <div class="blog-container">
            <div class="blog-card">
                <img src="image1.jpg" alt="Cleaning Products">
                <h3>Cleaning tips, tricks & hacks</h3>
                <p>Professional cleaning solutions for Seattle's rainy climate</p>
                <span>12 June 2024 • 5 mins read</span>
            </div>
            <div class="blog-card">
                <img src="image2.jpg" alt="Professional Cleaner">
                <h3>Cleaning tips, tricks & hacks</h3>
                <p>Professional cleaning solutions for Seattle's rainy climate</p>
                <span>12 June 2024 • 5 mins read</span>
            </div>
            <div class="blog-card">
                <img src="image3.jpg" alt="Cleaning Mirror">
                <h3>Cleaning tips, tricks & hacks</h3>
                <p>Professional cleaning solutions for Seattle's rainy climate</p>
                <span>12 June 2024 • 5 mins read</span>
            </div>
        </div>
        <button class="view-more">View more Blogs</button>
    </section>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    color: #333;
}

.blog-section {
    text-align: center;
    padding: 20px;
}

.blog-section h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.blog-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.blog-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 300px;
    padding: 20px;
    text-align: left;
}

.blog-card img {
    width: 100%;
    border-radius: 10px;
}

.blog-card h3 {
    color: #007BFF;
    font-size: 1.2rem;
    margin: 15px 0 10px;
}

.blog-card p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 10px;
}

.blog-card span {
    font-size: 0.8rem;
    color: #999;
}

.view-more {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

.view-more:hover {
    background-color: #218838;
}

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
