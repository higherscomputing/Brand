"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { Dashboard } from "@/components/dashboard"
import { SearchButton } from "@/components/search-button"
import { Code, Menu, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  return (
    <div className="min-h-screen">
      {/* Fixed top navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-[#0043CB] px-4 md:px-6 text-white shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <h1 className="text-xl font-semibold">HC Guidelines</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-[#0052F5]">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <SearchButton className="text-white hover:bg-[#0052F5]" />

          {/* Mobile menu button - only visible on small screens */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-[#0052F5]">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[80%] max-w-[300px]">
              <div className="h-full overflow-y-auto">
                <AppSidebar isMobile={true} onItemClick={() => setIsMobileMenuOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Desktop sidebar - hidden on mobile */}
      <div className="fixed top-16 left-0 bottom-0 z-40 w-64 border-r bg-background shadow-sm hidden md:block">
        <AppSidebar />
      </div>

      {/* Main content with responsive padding */}
      <main className="pt-16 md:ml-64">
        <Dashboard />
        <Footer />
      </main>
    </div>
  )
}

