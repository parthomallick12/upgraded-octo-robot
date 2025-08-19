"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Building,
  Home,
  Users,
  UserPlus,
  BarChart3,
  Settings,
  ChevronDown,
  Menu,
  X,
  User,
  Bell,
  Plus,
  Edit,
  Trash2,
} from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function OwnerManagement() {
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
    console.log("Owner form submitted:", formData)
    // Handle form submission
  }

  const owners = [
    { id: 1, name: "Ali_supplier", email: "aliowner@gmail.com", phone: "01812345678", createdAt: "12/May/2025" },
    { id: 2, name: "Bikrom_owner", email: "bikromowner@gmail.com", phone: "01701343433", createdAt: "13/May/2025" },
    { id: 3, name: "lablu", email: "Lablu@gmail.com", phone: "+880", createdAt: "02/Jun/2025" },
    { id: 4, name: "test", email: "test@gmail.com", phone: "01701103784", createdAt: "24/Jul/2025" },
    { id: 5, name: "Partho Mallick", email: "partho@gmail.com", phone: "01701867713", createdAt: "12/Aug/2025" },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
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
                    <Home className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
                    <Plus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
                      <Link href="/expense-report" className="flex items-center">
                        Expenses Report
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/inventory-report" className="flex items-center">
                        Inventory Report
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
                    <DropdownMenuItem>
                      <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Assign branch
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
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add Admin
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/manager" className="flex items-center">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add Manager
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/owner" className="flex items-center bg-blue-50">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add Owner
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add Employee
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                  <BarChart3 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Financial Reports
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-auto bg-gradient-to-br from-slate-50 to-blue-50/30">
        {/* Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-30">
          <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-6">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <UserPlus className="h-4 w-4 text-white" />
                </div>
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Owner Management</h1>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500">3</Badge>
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
                <DropdownMenuContent align="center" side="bottom" alignOffset={0} sideOffset={8}>
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

        <div className="p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Breadcrumb */}
          <nav className="flex mb-6 sm:mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Owner Management</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="space-y-6 sm:space-y-8">
            {/* Add Owner Form */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <UserPlus className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  Add Owner
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                  <div className="flex justify-end pt-4">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <UserPlus className="mr-2 h-4 w-4" />
                      Create Owner
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Owner List */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  Owner List
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">Serial No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {owners.map((owner) => (
                        <TableRow key={owner.id}>
                          <TableCell className="font-medium">{owner.id}</TableCell>
                          <TableCell>{owner.name}</TableCell>
                          <TableCell>{owner.email}</TableCell>
                          <TableCell>{owner.phone}</TableCell>
                          <TableCell>{owner.createdAt}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-600 hover:text-red-700 bg-transparent"
                              >
                                <Trash2 className="h-4 w-4" />
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
  )
}
