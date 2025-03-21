import Image from "next/image"

export default function BrandValuesPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-10">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary">Brand Values</h1>
        <p className="text-xl text-muted-foreground">
          The core principles that guide our brand and shape our identity.
        </p>
      </div>

      <div className="mb-12">
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-96">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Brand values illustration"
            fill
            className="object-cover"
          />
        </div>
        <p className="mb-6 text-lg text-muted-foreground">
          Our brand values are the foundation of everything we do at Highers Computing. They inform our decisions, guide
          our actions, and shape our culture. These values are not just words on a page—they are principles we live by
          every day.
        </p>
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lightbulb"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-medium">Innovation</h3>
          <p className="text-muted-foreground">
            We embrace new ideas, technologies, and approaches. We're not afraid to challenge conventions and push
            boundaries to create better solutions.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-graduation-cap"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-medium">Education</h3>
          <p className="text-muted-foreground">
            We believe in the power of knowledge and continuous learning. We strive to educate and empower our users,
            clients, and each other.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-medium">Excellence</h3>
          <p className="text-muted-foreground">
            We are committed to delivering the highest quality in everything we do. We set high standards and
            continuously strive to exceed them.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-medium">Collaboration</h3>
          <p className="text-muted-foreground">
            We believe in the power of working together. We foster an environment of open communication, mutual respect,
            and shared goals.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-medium">Integrity</h3>
          <p className="text-muted-foreground">
            We act with honesty, transparency, and ethical responsibility. We do what's right, even when it's difficult.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart-handshake"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
              <path d="m18 15-2-2" />
              <path d="m15 18-2-2" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-medium">Inclusivity</h3>
          <p className="text-muted-foreground">
            We value diversity and create products and experiences that are accessible and welcoming to everyone,
            regardless of background or ability.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-primary">Living Our Values</h2>
        <p className="mb-6 text-muted-foreground">
          Our values should be reflected in everything we create and every interaction we have. Here are some ways we
          bring our values to life:
        </p>
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">In Our Products</h3>
            <p className="text-muted-foreground">
              Our products should embody our commitment to innovation, excellence, and inclusivity. They should be
              intuitive, reliable, and accessible to all users.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">In Our Communication</h3>
            <p className="text-muted-foreground">
              Our communication should reflect our values of education, integrity, and collaboration. It should be
              clear, honest, and focused on providing value to our audience.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">In Our Visual Identity</h3>
            <p className="text-muted-foreground">
              Our visual identity should express our values through thoughtful design choices. It should be innovative
              yet accessible, excellent yet approachable.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-bold text-primary">Applying Our Values</h2>
        <p className="mb-6 text-muted-foreground">
          When creating content or making decisions for Highers Computing, ask yourself:
        </p>
        <ul className="mb-6 space-y-4 pl-6">
          <li className="text-muted-foreground">Does this reflect our commitment to innovation?</li>
          <li className="text-muted-foreground">Does this help educate and empower our audience?</li>
          <li className="text-muted-foreground">Does this meet our standards of excellence?</li>
          <li className="text-muted-foreground">Does this foster collaboration?</li>
          <li className="text-muted-foreground">Does this demonstrate integrity?</li>
          <li className="text-muted-foreground">Is this inclusive and accessible to everyone?</li>
        </ul>
        <p className="text-muted-foreground">
          If the answer to any of these questions is no, consider how you might adjust your approach to better align
          with our values.
        </p>
      </div>
    </div>
  )
}

