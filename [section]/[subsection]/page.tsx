import { PageTemplate } from "@/components/page-template"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    section: string
    subsection: string
  }
}

export default function SubsectionPage({ params }: PageProps) {
  // Format the section and subsection for display
  const section = params.section
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const subsection = params.subsection
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Validate if this is a known section/subsection
  // This is a simplified validation - in a real app, you'd check against a database or config
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

  return (
    <PageTemplate
      title={subsection}
      description={`Guidelines and specifications for ${subsection.toLowerCase()}.`}
      section={section}
      subsection={subsection}
    />
  )
}

