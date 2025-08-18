"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Building,
  Users,
  UserPlus,
  BarChart3,
  Settings,
  Wallet,
  ChevronDown,
  Menu,
  X,
  User,
  Bell,
  Edit,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ManagerPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Manager form submitted:", formData)
    // Handle form submission
  }

  // Sample manager data
  const managers = [
    {
      id: 1,
      name: "manager",
      email: "manager@gmail.com",
      phone: "01701165985",
      createdAt: "12/May/2025",
    },
    {
      id: 2,
      name: "mohit manager",
      email: "mohit@gmail.com",
      phone: "01701103784",
      createdAt: "12/May/2025",
    },
    {
      id: 3,
      name: "saimun",
      email: "saimun@gmail.com",
      phone: "123456",
      createdAt: "03/Jun/2025",
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:inset-0
      `}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Building className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900">Dashboard</span>
          </div>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-2 px-3">
            {/* Dashboard Section */}
            <div className="pb-2">
              <h3 className="mb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Dashboard</h3>
              <div className="space-y-1">
                <Link href="/">
                  <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                    <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Home
                  </Button>
                </Link>
              </div>
            </div>

            {/* Business Operations Section */}
            <div className="pb-2">
              <h3 className="mb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Business Operations
              </h3>
              <div className="space-y-1">
                <Link href="/add-data">
                  <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                    <Users className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Add Data
                  </Button>
                </Link>
              </div>
            </div>

            {/* Reports Section */}
            <div className="pb-2">
              <h3 className="mb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Reports</h3>
              <div className="space-y-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <BarChart3 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Report
                      <ChevronDown className="ml-auto h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
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
              <h3 className="mb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Management Tools
              </h3>
              <div className="space-y-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
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
                      <Link href="/branches" className="flex items-center">
                        <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        All branch
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                  <Settings className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  General Settings
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9 bg-blue-50 text-blue-700"
                    >
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
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add Admin
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="bg-blue-50 text-blue-700">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add Manager
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add Owner
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add Employee
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                  <Wallet className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Financial Reports
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Manager Management</h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Add and manage system managers</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>

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
                <DropdownMenuContent align="end" className="w-48 sm:w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-3 sm:p-4 md:p-6 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            {/* Breadcrumb */}
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Manager Management</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Add Manager Form */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-green-50/30">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <UserPlus className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  Add Manager
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-10 sm:h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-10 sm:h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="h-10 sm:h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">
                        Password <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="h-10 sm:h-11"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium shadow-lg"
                    >
                      Create Manager
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Manager List */}
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Manager List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs sm:text-sm">Serial No</TableHead>
                        <TableHead className="text-xs sm:text-sm">Name</TableHead>
                        <TableHead className="text-xs sm:text-sm">Email</TableHead>
                        <TableHead className="text-xs sm:text-sm">Phone</TableHead>
                        <TableHead className="text-xs sm:text-sm">Created At</TableHead>
                        <TableHead className="text-xs sm:text-sm">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {managers.map((manager) => (
                        <TableRow key={manager.id}>
                          <TableCell className="text-xs sm:text-sm">{manager.id}</TableCell>
                          <TableCell className="text-xs sm:text-sm font-medium">{manager.name}</TableCell>
                          <TableCell className="text-xs sm:text-sm">{manager.email}</TableCell>
                          <TableCell className="text-xs sm:text-sm">{manager.phone}</TableCell>
                          <TableCell className="text-xs sm:text-sm">{manager.createdAt}</TableCell>
                          <TableCell>
                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 sm:h-8 px-2 sm:px-3 text-xs bg-transparent"
                              >
                                <Edit className="h-3 w-3 mr-1" />
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 sm:h-8 px-2 sm:px-3 text-xs text-red-600 hover:text-red-700 bg-transparent"
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Delete
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
        </main>
      </div>
    </div>
  )
}
