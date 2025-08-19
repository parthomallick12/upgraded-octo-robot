"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Building,
  Menu,
  User,
  Home,
  Database,
  BarChart3,
  ChevronDown,
  Settings,
  UserPlus,
  FileText,
  Users,
  Edit,
  Trash2,
  FileBarChart,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BranchesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Sample branch data
  const branches = [
    {
      id: 1,
      name: "gulshan_caffe_branch",
      address: "gulshan-1, road 12-A",
      country: "",
      location: "",
      createdAt: "18/Jun/2025",
    },
    {
      id: 2,
      name: "Lablu Branch",
      address: "Road-B Ra-12/c",
      country: "",
      location: "",
      createdAt: "18/Jun/2025",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
        <div className="flex h-14 sm:h-16 items-center px-3 sm:px-4 lg:px-6">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <div className="flex items-center gap-2 sm:gap-3 ml-2 md:ml-0">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Building className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Branch Management
            </h1>
          </div>

          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full">
                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                      <User className="h-4 w-4 sm:h-5 sm:w-5" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" side="bottom" alignOffset={0} sideOffset={8}>
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Change Password
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 sm:w-72 bg-card border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:inset-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex h-full flex-col">
            <div className="flex h-14 sm:h-16 items-center border-b px-3 sm:px-4">
              <Link className="flex items-center gap-2 font-semibold" href="/">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Building className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-base sm:text-lg">Dashboard</span>
              </Link>
            </div>

            <div className="flex-1 overflow-y-auto py-3 sm:py-4">
              <nav className="space-y-2 px-2 sm:px-3">
                {/* Dashboard Section */}
                <div className="pb-2">
                  <Link href="/">
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <Home className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Dashboard
                    </Button>
                  </Link>
                </div>

                {/* Business Operations Section */}
                <div className="pb-2">
                  <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Business Operations
                  </h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <Database className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Add Data
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                          <Users className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Add Employee
                          <ChevronDown className="ml-auto h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-44 sm:w-48">
                        <DropdownMenuLabel>Employee Management</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <UserPlus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Add New Employee
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          View All Employees
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Employee Settings
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Reports Section */}
                <div className="pb-2">
                  <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Reports
                  </h3>
                  <div className="space-y-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                          <FileText className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Report
                          <ChevronDown className="ml-auto h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-44 sm:w-48">
                        <DropdownMenuLabel>Data Entry Center</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link href="/sales-report" className="flex items-center">
                            Sales Report
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/inventory-report" className="flex items-center">
                            Inventory Report
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/expense-report" className="flex items-center">
                            Expenses Report
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <BarChart3 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Analytics
                    </Button>
                  </div>
                </div>

                {/* Management Tools Section */}
                <div className="pb-2">
                  <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Management Tools
                  </h3>
                  <div className="space-y-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9 bg-accent text-accent-foreground"
                        >
                          <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Branch
                          <ChevronDown className="ml-auto h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-44 sm:w-48">
                        <DropdownMenuLabel>Branch Management</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Add branch
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          All branch
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <Settings className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      General Settings
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                          <UserPlus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Manage Profile
                          <ChevronDown className="ml-auto h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-44 sm:w-48">
                        <DropdownMenuLabel>User Management</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link href="/admin" className="flex items-center">
                            <UserPlus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Add Admin
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/manager" className="flex items-center">
                            <UserPlus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Add Manager
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/owner" className="flex items-center">
                            <UserPlus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Add Owner
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/employee" className="flex items-center">
                            <UserPlus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Add Employee
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <FileBarChart className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Financial Reports
                    </Button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 overflow-auto bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="p-3 sm:p-4 lg:p-6">
            <div className="mx-auto max-w-7xl space-y-4 sm:space-y-6">
              {/* Breadcrumb */}
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>All Branch List</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              {/* Branch List Card */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Building className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    Branch List
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 md:px-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-20">Serial No</TableHead>
                          <TableHead>Branch</TableHead>
                          <TableHead>Address</TableHead>
                          <TableHead>Country</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Created At</TableHead>
                          <TableHead className="text-center min-w-[300px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {branches.map((branch) => (
                          <TableRow key={branch.id}>
                            <TableCell className="font-medium">{branch.id}</TableCell>
                            <TableCell className="font-medium">{branch.name}</TableCell>
                            <TableCell>{branch.address}</TableCell>
                            <TableCell>{branch.country || "-"}</TableCell>
                            <TableCell>{branch.location || "-"}</TableCell>
                            <TableCell>{branch.createdAt}</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                                <Link href={`/edit-branch/${branch.id}`}>
                                  <Button size="sm" variant="outline" className="h-7 px-2 text-xs bg-transparent">
                                    <Edit className="h-3 w-3 mr-1" />
                                    Edit
                                  </Button>
                                </Link>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2 text-xs text-green-600 border-green-200 hover:bg-green-50 bg-transparent"
                                >
                                  <Trash2 className="h-3 w-3 mr-1" />
                                  Delete
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2 text-xs text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                                >
                                  <FileBarChart className="h-3 w-3 mr-1" />
                                  Report
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2 text-xs text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
                                >
                                  <BarChart3 className="h-3 w-3 mr-1" />
                                  Total Report
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-2 text-xs text-purple-600 border-purple-200 hover:bg-purple-50 bg-transparent"
                                >
                                  <Search className="h-3 w-3 mr-1" />
                                  Search Report
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
