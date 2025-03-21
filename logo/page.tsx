import { PageTemplate } from "@/components/page-template"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LogoPage() {
  return (
    <PageTemplate
      title="Logo"
      description="Guidelines for using our logo correctly across all applications."
      section="Logo"
    >
      <div className="mb-12 rounded-lg border bg-card p-8 shadow-sm">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-primary">Our Logo</h2>
            <p className="mb-4 text-muted-foreground">
              The Highers Computing logo is the primary visual identifier of our brand. It represents our values and
              mission, and it's essential that it's used consistently across all applications.
            </p>
            <p className="text-muted-foreground">
              This section provides guidelines on how to use our logo correctly, including spacing, sizing, placement,
              and variations. Following these guidelines ensures that our brand is represented consistently and
              professionally.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Highers Computing Logo"
                width={400}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Primary Logo",
            description: "Our main logo and its specifications",
            href: "/logo/primary",
          },
          {
            title: "Logo Variations",
            description: "Alternative versions for different contexts",
            href: "/logo/variations",
          },
          {
            title: "Logo Spacing",
            description: "Clear space requirements around the logo",
            href: "/logo/spacing",
          },
          {
            title: "Logo Sizing",
            description: "Minimum and maximum size guidelines",
            href: "/logo/sizing",
          },
          {
            title: "Logo Placement",
            description: "Where and how to position the logo",
            href: "/logo/placement",
          },
          {
            title: "Logo Misuse",
            description: "Examples of incorrect logo usage",
            href: "/logo/misuse",
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

