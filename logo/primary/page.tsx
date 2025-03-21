import { PageTemplate } from "@/components/page-template"
import Image from "next/image"

export default function PrimaryLogoPage() {
  return (
    <PageTemplate
      title="Primary Logo"
      description="Specifications and guidelines for our primary logo."
      section="Logo"
      subsection="Primary Logo"
    >
      <section className="mb-12">
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative h-48 w-full max-w-md overflow-hidden rounded-lg bg-white flex items-center justify-center mb-4">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Highers Computing Primary Logo"
                width={400}
                height={200}
                className="object-contain"
              />
            </div>
            <p className="text-center text-muted-foreground">The Highers Computing primary logo in full color</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">Logo Elements</h2>
              <p className="mb-4 text-muted-foreground">
                Our primary logo consists of two elements: the symbol and the wordmark. These elements have been
                carefully designed to work together as a unified logo.
              </p>
              <p className="text-muted-foreground">
                The symbol represents our focus on computing and technology, while the wordmark clearly identifies our
                brand name. Together, they create a distinctive and memorable visual identity.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">Color Specifications</h2>
              <p className="mb-4 text-muted-foreground">
                The primary logo uses our brand blue (#0043CB) as its main color. This color should be maintained
                consistently across all applications of the primary logo.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-md bg-[#0043CB]"></div>
                <div>
                  <p className="font-medium">Primary Blue</p>
                  <p className="text-sm text-muted-foreground">HEX: #0043CB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-primary">Logo Specifications</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">Minimum Size</h3>
            <p className="text-muted-foreground mb-4">
              To ensure legibility, the logo should never be used smaller than the specified minimum size.
            </p>
            <div className="flex justify-center">
              <div className="relative h-20 w-40 bg-white rounded-md flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Minimum logo size"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-center mt-2 text-muted-foreground">
              Minimum width: 120px for digital, 35mm for print
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">Clear Space</h3>
            <p className="text-muted-foreground mb-4">
              Always maintain the minimum clear space around the logo to ensure visual impact.
            </p>
            <div className="flex justify-center">
              <div className="relative h-20 w-40 bg-white rounded-md flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="relative h-12 w-24 bg-white flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=40&width=80"
                    alt="Logo clear space"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-center mt-2 text-muted-foreground">
              Minimum clear space: 1x height of the symbol
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">File Formats</h3>
            <p className="text-muted-foreground mb-4">
              The logo is available in various file formats for different applications.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="font-medium mr-2">SVG:</span> For web and digital applications
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">PNG:</span> For digital applications with transparency
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">EPS:</span> For print and large format applications
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">PDF:</span> For document embedding
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

