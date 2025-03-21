import { PageTemplate } from "@/components/page-template"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GettingStartedPage() {
  return (
    <PageTemplate
      title="Getting Started"
      description="An introduction to the Highers Computing brand and how to use these guidelines."
      section="Getting Started"
    >
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Introduction",
            description: "An overview of our brand guidelines",
            href: "/getting-started/introduction",
          },
          {
            title: "How to Use",
            description: "How to navigate and apply these guidelines",
            href: "/getting-started/how-to-use",
          },
          {
            title: "Brand Purpose",
            description: "Why we exist and what we stand for",
            href: "/getting-started/brand-purpose",
          },
          {
            title: "Brand Values",
            description: "The core principles that guide our brand",
            href: "/getting-started/brand-values",
          },
          {
            title: "Brand Personality",
            description: "The character and tone of our brand",
            href: "/getting-started/brand-personality",
          },
          {
            title: "Brand Voice",
            description: "How we communicate through words",
            href: "/getting-started/brand-voice",
          },
        ].map((item) => (
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

