export const metadata = {
  title: 'My App',
  description: 'This is my cool app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
