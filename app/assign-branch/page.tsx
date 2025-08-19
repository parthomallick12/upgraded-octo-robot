"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Building,
  Users,
  Home,
  BarChart3,
  Settings,
  UserPlus,
  ChevronDown,
  Menu,
  X,
  User,
  Eye,
  Trash2,
  Save,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AssignBranchPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedOwner, setSelectedOwner] = useState("")
  const [selectedBranch, setSelectedBranch] = useState("")
  const [addBranchModalOpen, setAddBranchModalOpen] = useState(false)
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false)

  const owners = [
    { id: "7", name: "Ali_supplier" },
    { id: "8", name: "Bikrom_owner" },
    { id: "11", name: "lablu" },
    { id: "16", name: "test" },
    { id: "17", name: "Partho Mallick" },
  ]

  const branches = [
    { id: "52", name: "gulshan_caffe_branch" },
    { id: "53", name: "Lablu Branch" },
  ]

  const assignedOwners = [
    { id: 1, name: "lablu", branches: 3, createdAt: "02/Jun/2025" },
    { id: 2, name: "test", branches: 1, createdAt: "24/Jul/2025" },
    { id: 3, name: "Partho Mallick", branches: 1, createdAt: "12/Aug/2025" },
    { id: 4, name: "Ali_supplier", branches: 3, createdAt: "12/May/2025" },
    { id: 5, name: "Bikrom_owner", branches: 4, createdAt: "13/May/2025" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Assigning branch:", { selectedOwner, selectedBranch })
    // Handle form submission
  }

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
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">Dashboard</span>
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Add Data
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] sm:max-w-md md:max-w-lg p-4 sm:p-6">
                    <DialogHeader>
                      <DialogTitle>Add Data</DialogTitle>
                      <DialogDescription>Select date and branch to add new data entry.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Date</Label>
                          <Input id="date" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="branch">Branch</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select branch" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lablu">Lablu Branch</SelectItem>
                              <SelectItem value="gulshan">Gulshan Caffe Branch</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Link href="/add-data">
                        <Button className="w-full">Continue to Add Data</Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>
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
                  <DropdownMenuContent align="start" className="w-44 sm:w-48">
                    <DropdownMenuLabel>Report Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/sales-report" className="flex items-center w-full">
                        <BarChart3 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Sales Report
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/inventory-report" className="flex items-center w-full">
                        <BarChart3 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Inventory Report
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/expense-report" className="flex items-center w-full">
                        <BarChart3 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9 bg-blue-50 text-blue-700"
                    >
                      <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Branch
                      <ChevronDown className="ml-auto h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-44 sm:w-48">
                    <DropdownMenuLabel>Branch Management</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setAddBranchModalOpen(true)}>
                      <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Add branch
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/branches" className="flex items-center w-full">
                        <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        All branch
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="bg-blue-50 text-blue-700">
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
                      <UserPlus className="mr-2 h-4 w-4" />
                      Manage Profile
                      <ChevronDown className="ml-auto h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-44 sm:w-48">
                    <DropdownMenuLabel>User Management</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/admin" className="flex items-center w-full">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add Admin
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/manager" className="flex items-center w-full">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add Manager
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/owner" className="flex items-center w-full">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add Owner
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setAddEmployeeModalOpen(true)}>
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
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Building className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Assign Branch</h1>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
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
                <DropdownMenuContent
                  align="center"
                  side="bottom"
                  alignOffset={0}
                  sideOffset={8}
                  className="w-48 sm:w-56"
                >
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
          <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">
                Dashboard
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Assign Branch</span>
            </nav>

            {/* Assign Branch Form */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  Assign Branch to Owner
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="owner" className="text-sm font-medium">
                        Select Owner <span className="text-red-500">*</span>
                      </Label>
                      <Select value={selectedOwner} onValueChange={setSelectedOwner}>
                        <SelectTrigger className="h-10 sm:h-11">
                          <SelectValue placeholder="Select Owner" />
                        </SelectTrigger>
                        <SelectContent>
                          {owners.map((owner) => (
                            <SelectItem key={owner.id} value={owner.id}>
                              {owner.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Select Branch <span className="text-red-500">*</span>
                      </Label>
                      <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                        <SelectTrigger className="h-10 sm:h-11">
                          <SelectValue placeholder="Select Branch" />
                        </SelectTrigger>
                        <SelectContent>
                          {branches.map((branch) => (
                            <SelectItem key={branch.id} value={branch.id}>
                              {branch.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 sm:px-8 sm:py-3"
                      disabled={!selectedOwner || !selectedBranch}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Assign Branch
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Admin List */}
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  Owner List
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">Serial No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Branches</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {assignedOwners.map((owner) => (
                        <TableRow key={owner.id}>
                          <TableCell className="font-medium">{owner.id}</TableCell>
                          <TableCell>{owner.name}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                              {owner.branches} branch(es)
                            </Badge>
                          </TableCell>
                          <TableCell>{owner.createdAt}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
                              >
                                <Eye className="h-3 w-3 mr-1" />
                                View Branches
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-green-600 border-green-200 hover:bg-green-50 bg-transparent"
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
        </div>
      </main>

      {/* Add Branch Modal */}
      <Dialog open={addBranchModalOpen} onOpenChange={setAddBranchModalOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-md p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle>Add Branch</DialogTitle>
            <DialogDescription>Create a new branch for your business.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="branchName">
                Branch Name <span className="text-red-500">*</span>
              </Label>
              <Input id="branchName" placeholder="Enter branch name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="branchAddress">
                Branch Address <span className="text-red-500">*</span>
              </Label>
              <Input id="branchAddress" placeholder="Enter branch address" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sideNote">Side Note</Label>
              <Input id="sideNote" placeholder="Optional notes" />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setAddBranchModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-red-600 hover:bg-red-700">
                Add Branch
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add Employee Modal */}
      <Dialog open={addEmployeeModalOpen} onOpenChange={setAddEmployeeModalOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-md p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle>Add Employee</DialogTitle>
            <DialogDescription>Add a new employee to your branch.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="employeeBranch">
                Branch Name <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lablu">Lablu Branch</SelectItem>
                  <SelectItem value="gulshan">gulshan_caffe_branch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="employeeName">
                Employee Name <span className="text-red-500">*</span>
              </Label>
              <Input id="employeeName" placeholder="Enter employee name" required />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setAddEmployeeModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
