export const metadata = {
  title: 'OffSpot — Inclusive Async Hiring',
  description: 'Video interviews on your terms. Show what you can do — not just how you perform under pressure.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
