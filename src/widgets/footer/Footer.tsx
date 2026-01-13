import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4">
      <div className="container mx-auto flex justify-center items-center">
        &copy; {new Date().getFullYear()} M1
      </div>
    </footer>
  );
}
