import type { Metadata } from "next";

export const metadata: Metadata = {
 description: 'SEO ABOUT',
 keywords: ['about page', 'mmarcode', 'about']
};

export default function AboutPage() {
  return(
    <span className="text-7xl">About page</span>
  )
}
