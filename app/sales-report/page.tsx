"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Menu,
  Home,
  Database,
  Users,
  BarChart3,
  Settings,
  UserPlus,
  ChevronDown,
  User,
  LogOut,
  KeyRound,
  UserCircle,
  Filter,
  Edit,
  Eye,
  Trash2,
} from "lucide-react"

export default function SalesReportPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [selectedBranch, setSelectedBranch] = useState("all")

  // Sample sales data
  const salesData = [
    {
      id: 1,
      date: "10/Jul/2025",
      branch: "Lablu Branch",
      inShop: 532,
      delivery: 668,
      onlineDelivery: 692,
      payment: "cash/card",
      total: 1892,
    },
    {
      id: 2,
      date: "11/Jul/2025",
      branch: "Lablu Branch",
      inShop: 1300,
      delivery: 577,
      onlineDelivery: 9425,
      payment: "cash/card",
      total: 11302,
    },
    {
      id: 3,
      date: "01/Jan/1970",
      branch: "gulshan_caffe_branch",
      inShop: 1300,
      delivery: 577,
      onlineDelivery: 2100,
      payment: "cash/card",
      total: 3977,
    },
  ]

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault()
    // Filter logic would go here
    console.log("Filtering with:", { fromDate, toDate, selectedBranch })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
        <div className="flex h-14 sm:h-16 items-center px-3 sm:px-4 lg:px-6 gap-3 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden h-8 w-8 sm:h-9 sm:w-9"
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Sales Report
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
              <DropdownMenuContent align="center" side="bottom" alignOffset={0} sideOffset={8} className="w-48 sm:w-56">
                <DropdownMenuLabel className="text-xs sm:text-sm">
                  <div className="flex flex-col space-y-1">
                    <p className="font-medium">John Doe</p>
                    <p className="text-muted-foreground">john@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-xs sm:text-sm">
                  <UserCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xs sm:text-sm">
                  <KeyRound className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Change Password
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-xs sm:text-sm text-red-600">
                  <LogOut className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Logout
                </DropdownMenuItem>
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
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Database className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <span className="text-sm sm:text-base">Dashboard</span>
              </Link>
            </div>

            <div className="flex-1 overflow-y-auto py-3 sm:py-4">
              <nav className="space-y-2 px-2 sm:px-3">
                {/* Dashboard */}
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
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <Users className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Employee
                    </Button>
                  </div>
                </div>

                {/* Reports Section */}
                <div className="pb-2">
                  <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Reports
                  </h3>
                  <div className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9 bg-blue-50 text-blue-700"
                    >
                      <BarChart3 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Report
                    </Button>
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
                          <UserPlus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Add Admin
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserPlus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Add Manager
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserPlus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Add Owner
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserPlus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Add Employee
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 overflow-auto">
          <div className="p-3 sm:p-4 lg:p-6 xl:p-8 space-y-4 sm:space-y-6">
            {/* Filter Section */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                    <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  Filter Sales Data
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 md:px-6">
                <form onSubmit={handleFilter} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fromDate" className="text-xs sm:text-sm font-medium">
                        From Date
                      </Label>
                      <Input
                        id="fromDate"
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="h-9 sm:h-10 text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="toDate" className="text-xs sm:text-sm font-medium">
                        To Date
                      </Label>
                      <Input
                        id="toDate"
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="h-9 sm:h-10 text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="branch" className="text-xs sm:text-sm font-medium">
                        Branch Name
                      </Label>
                      <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                        <SelectTrigger className="h-9 sm:h-10 text-xs sm:text-sm">
                          <SelectValue placeholder="Select branch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="53">Lablu Branch</SelectItem>
                          <SelectItem value="52">gulshan_caffe_branch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs sm:text-sm font-medium opacity-0 block">Action</Label>
                      <Button
                        type="submit"
                        className="w-full h-9 sm:h-10 bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm"
                      >
                        <Filter className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Filter
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Sales Data Table */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  Sales Report List
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 md:px-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="text-xs sm:text-sm font-semibold">Serial No</TableHead>
                        <TableHead className="text-xs sm:text-sm font-semibold">Date</TableHead>
                        <TableHead className="text-xs sm:text-sm font-semibold">Branch Name</TableHead>
                        <TableHead className="text-xs sm:text-sm font-semibold">IN Shop</TableHead>
                        <TableHead className="text-xs sm:text-sm font-semibold">Delivery</TableHead>
                        <TableHead className="text-xs sm:text-sm font-semibold">Online Delivery</TableHead>
                        <TableHead className="text-xs sm:text-sm font-semibold">Payment</TableHead>
                        <TableHead className="text-xs sm:text-sm font-semibold">Total</TableHead>
                        <TableHead className="text-xs sm:text-sm font-semibold">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {salesData.map((sale) => (
                        <TableRow key={sale.id} className="hover:bg-gray-50/50">
                          <TableCell className="text-xs sm:text-sm font-medium">{sale.id}</TableCell>
                          <TableCell className="text-xs sm:text-sm">{sale.date}</TableCell>
                          <TableCell className="text-xs sm:text-sm">{sale.branch}</TableCell>
                          <TableCell className="text-xs sm:text-sm font-medium">
                            {sale.inShop.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-xs sm:text-sm font-medium">
                            {sale.delivery.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-xs sm:text-sm font-medium">
                            {sale.onlineDelivery.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-xs sm:text-sm">{sale.payment}</TableCell>
                          <TableCell className="text-xs sm:text-sm font-bold text-green-600">
                            {sale.total.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 sm:h-8 px-2 sm:px-3 text-xs bg-transparent"
                              >
                                <Edit className="h-3 w-3 sm:mr-1" />
                                <span className="hidden sm:inline">Edit</span>
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 sm:h-8 px-2 sm:px-3 text-xs bg-transparent"
                              >
                                <Eye className="h-3 w-3 sm:mr-1" />
                                <span className="hidden sm:inline">View</span>
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 sm:h-8 px-2 sm:px-3 text-xs text-red-600 hover:text-red-700 bg-transparent"
                              >
                                <Trash2 className="h-3 w-3 sm:mr-1" />
                                <span className="hidden sm:inline">Delete</span>
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
