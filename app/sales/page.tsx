"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  X,
  User,
  KeyRound,
  LogOut,
  BarChart3,
  FileText,
  Building,
  Settings,
  UserPlus,
  ChevronDown,
  Wallet,
  Home,
  Database,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function SalesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [addDataModalOpen, setAddDataModalOpen] = useState(false)
  const [analyticsModalOpen, setAnalyticsModalOpen] = useState(false)
  const [addDataForm, setAddDataForm] = useState({
    date: "",
    branch: "",
  })

  const handleAddDataSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to add-data page with form data
    window.location.href = "/add-data"
  }

  const handleReportsSelection = (reportType: string) => {
    console.log("Selected report:", reportType)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-green-500 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold">Sales Management</h1>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>View Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <KeyRound className="mr-2 h-4 w-4" />
                  <span>Change Password</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex relative">
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        <aside
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-56 sm:w-64 bg-card border-r transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between p-4 border-b md:hidden">
              <h2 className="font-semibold">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
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
                  <h3 className="mb-2 px-2 sm:px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Business Operations
                  </h3>
                  <div className="space-y-1">
                    {/* Add Data Button with Modal */}
                    <Dialog open={addDataModalOpen} onOpenChange={setAddDataModalOpen}>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                          <Database className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Add Data
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[95vw] sm:max-w-md md:max-w-lg p-4 sm:p-6">
                        <DialogHeader>
                          <DialogTitle>Add Data</DialogTitle>
                          <DialogDescription>Select date and branch to add new data entry.</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleAddDataSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="date">Select Date</Label>
                            <Input
                              id="date"
                              type="date"
                              value={addDataForm.date}
                              onChange={(e) => setAddDataForm((prev) => ({ ...prev, date: e.target.value }))}
                              className="w-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="branch">Select Branch</Label>
                            <Select
                              value={addDataForm.branch}
                              onValueChange={(value) => setAddDataForm((prev) => ({ ...prev, branch: value }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select branch" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="lablu">Lablu Branch</SelectItem>
                                <SelectItem value="gulshan">Gulshan Caffe Branch</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex justify-end space-x-2 pt-4">
                            <Button type="button" variant="outline" onClick={() => setAddDataModalOpen(false)}>
                              Cancel
                            </Button>
                            <Button type="submit">
                              <Database className="mr-2 h-4 w-4" />
                              Add Data
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* Reports Section */}
                <div className="pb-2">
                  <h3 className="mb-2 px-2 sm:px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
                        <DropdownMenuLabel>Report Options</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleReportsSelection("data-entry-center")}>
                          <Database className="mr-2 h-4 w-4" />
                          Data Entry Center
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleReportsSelection("sales-report")}>
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Sales Report
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleReportsSelection("expense-report")}>
                          <TrendingDown className="mr-2 h-4 w-4" />
                          Expense Report
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9"
                      onClick={() => setAnalyticsModalOpen(true)}
                    >
                      <BarChart3 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Analytics
                    </Button>
                  </div>
                </div>

                {/* Management Tools Section */}
                <div className="pb-2">
                  <h3 className="mb-2 px-2 sm:px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Management Tools
                  </h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Branch
                    </Button>
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
                          <UserPlus className="mr-2 h-4 w-4" />
                          Add Admin
                        </DropdownMenuItem>
                        <DropdownMenuItem>
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
          </div>
        </aside>

        <main className="flex-1 min-w-0 p-3 sm:p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Sales Report</h2>
                <p className="text-sm sm:text-base text-muted-foreground">View and manage sales records</p>
              </div>
            </div>

            {/* Filter Section */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="from-date" className="text-sm font-medium">
                        From Date
                      </Label>
                      <Input id="from-date" type="date" className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to-date" className="text-sm font-medium">
                        To Date
                      </Label>
                      <Input id="to-date" type="date" className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="branch" className="text-sm font-medium">
                        Branch Name
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select branch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="lablu">Lablu Branch</SelectItem>
                          <SelectItem value="gulshan">Gulshan Caffe Branch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium opacity-0 block">Action</Label>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Filter
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Sales Data Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Sales List</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <div className="min-w-full inline-block align-middle">
                    <table className="min-w-full divide-y divide-border">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Serial No
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Branch Name
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            IN Shop
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Delivery
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Online Delivery
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Payment
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Total
                          </th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-background divide-y divide-border">
                        <tr className="hover:bg-muted/50 transition-colors">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">1</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                            10/Jul/2025
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">Lablu Branch</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">532</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">668</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">692</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">cash/card</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-semibold">1892</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                              <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs h-7 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border-yellow-200"
                              >
                                View
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs h-7 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/50 transition-colors">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">2</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                            11/Jul/2025
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">Lablu Branch</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">1300</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">577</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">9425</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">cash/card</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-semibold">11302</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                              <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs h-7 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border-yellow-200"
                              >
                                View
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs h-7 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/50 transition-colors">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">3</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                            01/Jan/1970
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">Gulshan Caffe Branch</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">1300</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">577</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">2100</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">cash/card</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-semibold">3977</td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                              <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs h-7 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border-yellow-200"
                              >
                                View
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs h-7 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="text-center py-4 text-sm text-muted-foreground border-t">
              <p>
                Copyright © All Rights Reserved By <span className="font-medium">Sab Tech</span> 2025
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
