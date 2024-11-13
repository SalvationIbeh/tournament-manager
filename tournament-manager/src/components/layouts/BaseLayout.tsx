import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Tournament Manager
          </Link>
          <nav className="space-x-4">
            <Link to="/tournaments" className="hover:text-primary">
              Tournaments
            </Link>
            <Link to="/create" className="hover:text-primary">
              Create New
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
