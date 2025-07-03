export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Shop Me. All rights reserved.</p>
        <p className="mt-1">Discover your style, effortlessly.</p>
      </div>
    </footer>
  );
}
