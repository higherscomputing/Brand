import { PageTemplate } from "@/components/page-template"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    section: string
  }
}

// This is a simplified mapping - in a real app, you'd have a more comprehensive data structure
const sectionSubsections: Record<string, { title: string; description: string; href: string }[]> = {
  typography: [
    {
      title: "Primary Typeface",
      description: "Our main typeface and its specifications",
      href: "/typography/primary-typeface",
    },
    {
      title: "Secondary Typeface",
      description: "Supporting typefaces and their usage",
      href: "/typography/secondary-typeface",
    },
    { title: "Type Hierarchy", description: "How to structure typography for clarity", href: "/typography/hierarchy" },
    { title: "Type Scale", description: "Size relationships in our typography", href: "/typography/scale" },
    { title: "Type Styles", description: "Standard styles for different contexts", href: "/typography/styles" },
    { title: "Type Pairing", description: "How to combine typefaces effectively", href: "/typography/pairing" },
  ],
  color: [
    { title: "Primary Colors", description: "Our main brand colors and their usage", href: "/color/primary" },
    { title: "Secondary Colors", description: "Supporting colors in our palette", href: "/color/secondary" },
    { title: "Accent Colors", description: "Colors for emphasis and highlights", href: "/color/accent" },
    { title: "Color Combinations", description: "Effective color pairings and usage", href: "/color/combinations" },
    {
      title: "Color Accessibility",
      description: "Ensuring colors meet accessibility standards",
      href: "/color/accessibility",
    },
    { title: "Color in UI", description: "How to apply colors in interfaces", href: "/color/ui" },
  ],
  // Add more sections as needed
}

export default function SectionPage({ params }: PageProps) {
  // Format the section for display
  const section = params.section
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Validate if this is a known section
  const knownSections = [
    "getting-started",
    "logo",
    "typography",
    "color",
    "grid",
    "iconography",
    "illustration",
    "photography",
    "data-visualization",
    "ui-components",
    "animation",
    "voice-tone",
    "digital-applications",
    "print-applications",
    "resources",
  ]

  if (!knownSections.includes(params.section)) {
    return notFound()
  }

  // Get subsections for this section, or use a default set
  const subsections = sectionSubsections[params.section] || [
    { title: "Overview", description: "Introduction to this section", href: `/${params.section}/overview` },
    { title: "Guidelines", description: "Key rules and best practices", href: `/${params.section}/guidelines` },
    { title: "Examples", description: "Examples of correct usage", href: `/${params.section}/examples` },
    { title: "Resources", description: "Tools and assets for this section", href: `/${params.section}/resources` },
    { title: "FAQ", description: "Common questions and answers", href: `/${params.section}/faq` },
    { title: "Best Practices", description: "Tips for optimal results", href: `/${params.section}/best-practices` },
  ]

  return (
    <PageTemplate
      title={section}
      description={`Guidelines and specifications for ${section.toLowerCase()}.`}
      section={section}
    >
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subsections.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href={item.href} className="flex items-center text-sm font-medium text-primary">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageTemplate>
  )
}

