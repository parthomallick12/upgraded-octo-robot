"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  FileText,
  User,
  ChevronDown,
  UserPlus,
  Edit,
  Eye,
  Trash2,
  Package,
} from "lucide-react"

export default function InventoryReportPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [addDataModalOpen, setAddDataModalOpen] = useState(false)

  // Sample data for Daily Consumption
  const dailyConsumptionData = [
    {
      id: 1,
      date: "2025-07-08",
      branch: "Lablu Branch",
      kurczak: 2,
      wolowina: 2,
      kraftowe: 2,
      majonez: 0,
      ketchup: 0,
      gas: 0,
    },
    {
      id: 2,
      date: "2025-07-14",
      branch: "Lablu Branch",
      kurczak: 2,
      wolowina: 2,
      kraftowe: 2,
      majonez: 0,
      ketchup: 0,
      gas: 0,
    },
    {
      id: 3,
      date: "2025-07-12",
      branch: "Lablu Branch",
      kurczak: 2,
      wolowina: 2,
      kraftowe: 2,
      majonez: 0,
      ketchup: 0,
      gas: 0,
    },
    {
      id: 4,
      date: "2025-07-12",
      branch: "Lablu Branch",
      kurczak: 2,
      wolowina: 2,
      kraftowe: 2,
      majonez: 0,
      ketchup: 0,
      gas: 0,
    },
    {
      id: 5,
      date: "2025-07-12",
      branch: "Lablu Branch",
      kurczak: 2,
      wolowina: 2,
      kraftowe: 2,
      majonez: 0,
      ketchup: 0,
      gas: 0,
    },
    {
      id: 6,
      date: "2025-07-12",
      branch: "Lablu Branch",
      kurczak: 2,
      wolowina: 2,
      kraftowe: 0,
      majonez: 0,
      ketchup: 0,
      gas: 0,
    },
    {
      id: 7,
      date: "2025-07-12",
      branch: "Lablu Branch",
      kurczak: 2,
      wolowina: 2,
      kraftowe: 0,
      majonez: 0,
      ketchup: 0,
      gas: 0,
    },
    {
      id: 8,
      date: "2025-07-12",
      branch: "Lablu Branch",
      kurczak: 2,
      wolowina: 2,
      kraftowe: 2,
      majonez: 0,
      ketchup: 0,
      gas: 0,
    },
    {
      id: 9,
      date: "2025-07-12",
      branch: "Lablu Branch",
      kurczak: 2,
      wolowina: 2,
      kraftowe: 2,
      majonez: 2,
      ketchup: 0,
      gas: 0,
    },
    {
      id: 10,
      date: "2025-07-12",
      branch: "Lablu Branch",
      kurczak: 12,
      wolowina: 13,
      kraftowe: 13,
      majonez: 32,
      ketchup: 0,
      gas: 0,
    },
  ]

  // Sample data for Inventory
  const inventoryData = [
    {
      id: 1,
      date: "2025-07-12",
      branch: "Lablu Branch",
      kurczak: 82,
      wolowina: 72,
      kraftowe: 62,
      majonez: 40,
      ketchup: 10,
      gas: 0,
    },
    {
      id: 2,
      date: "2025-07-12",
      branch: "Lablu Branch",
      kurczak: 90,
      wolowina: 80,
      kraftowe: 70,
      majonez: 40,
      ketchup: 10,
      gas: 0,
    },
  ]

  const handleAddDataSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAddDataModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-30">
        <div className="flex h-14 sm:h-16 items-center px-3 sm:px-4 lg:px-6">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden mr-2">
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Package className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <h1 className="text-lg sm:text-xl font-semibold">Inventory Report</h1>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-4">
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
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>View Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Change Password</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Logout</span>
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
          <div className="flex flex-col h-full">
            

            <div className="flex-1 overflow-y-auto py-3 sm:py-4">
              <nav className="space-y-1 sm:space-y-2 px-2 sm:px-3">
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
                  <h3 className="mb-1 sm:mb-2 px-2 sm:px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Business Operations
                  </h3>
                  <div className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9"
                      onClick={() => setAddDataModalOpen(true)}
                    >
                      <Database className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Add Data
                    </Button>
                    <DropdownMenu>
                      
                      <DropdownMenuContent align="start" className="w-44 sm:w-48">
                        <DropdownMenuItem>
                          <UserPlus className="mr-2 h-4 w-4" />
                          Add New Employee
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          View All Employees
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          Employee Settings
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Reports Section */}
                <div className="pb-2">
                  <h3 className="mb-1 sm:mb-2 px-2 sm:px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Reports
                  </h3>
                  <div className="space-y-1">
                    <DropdownMenu>
                      
                      <DropdownMenuContent align="start" className="w-44 sm:w-48">
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          Data Entry Center
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
                  <h3 className="mb-1 sm:mb-2 px-2 sm:px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Management Tools
                  </h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <Database className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
                      <FileText className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
          <div className="p-3 sm:p-4 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Inventory Management
                </h1>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Track daily consumption and current inventory levels
              </p>
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Inventory List</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 md:px-6">
                <Tabs defaultValue="daily-consumption" className="space-y-4 sm:space-y-6">
                  <TabsList className="grid w-full grid-cols-2 h-9 sm:h-10">
                    <TabsTrigger value="daily-consumption" className="text-xs sm:text-sm">
                      Daily Consumption
                    </TabsTrigger>
                    <TabsTrigger value="inventory" className="text-xs sm:text-sm">
                      Inventory
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="daily-consumption" className="space-y-4">
                    <div className="rounded-lg border overflow-hidden">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="text-xs sm:text-sm font-semibold">Serial No</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Date</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Branch Name</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Kurczak</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Wolowina</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Kraftowe</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Majonez</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Ketchup</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Gas</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {dailyConsumptionData.map((item) => (
                              <TableRow key={item.id} className="hover:bg-muted/30">
                                <TableCell className="text-xs sm:text-sm font-medium">{item.id}</TableCell>
                                <TableCell className="text-xs sm:text-sm">{item.date}</TableCell>
                                <TableCell className="text-xs sm:text-sm">{item.branch}</TableCell>
                                <TableCell className="text-xs sm:text-sm">{item.kurczak}</TableCell>
                                <TableCell className="text-xs sm:text-sm">{item.wolowina}</TableCell>
                                <TableCell className="text-xs sm:text-sm">{item.kraftowe}</TableCell>
                                <TableCell className="text-xs sm:text-sm">{item.majonez}</TableCell>
                                <TableCell className="text-xs sm:text-sm">{item.ketchup}</TableCell>
                                <TableCell className="text-xs sm:text-sm">{item.gas}</TableCell>
                                <TableCell>
                                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs bg-transparent">
                                      <Edit className="h-3 w-3 mr-1" />
                                      Edit
                                    </Button>
                                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs bg-transparent">
                                      <Eye className="h-3 w-3 mr-1" />
                                      View
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="h-7 px-2 text-xs text-red-600 hover:text-red-700 bg-transparent"
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
                    </div>
                  </TabsContent>

                  <TabsContent value="inventory" className="space-y-4">
                    <div className="rounded-lg border overflow-hidden">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="text-xs sm:text-sm font-semibold">Serial No</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Date</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Branch Name</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Kurczak</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Wolowina</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Kraftowe</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Majonez</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Ketchup</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Gas</TableHead>
                              <TableHead className="text-xs sm:text-sm font-semibold">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {inventoryData.map((item) => (
                              <TableRow key={item.id} className="hover:bg-muted/30">
                                <TableCell className="text-xs sm:text-sm font-medium">{item.id}</TableCell>
                                <TableCell className="text-xs sm:text-sm">{item.date}</TableCell>
                                <TableCell className="text-xs sm:text-sm">{item.branch}</TableCell>
                                <TableCell className="text-xs sm:text-sm font-semibold text-green-600">
                                  {item.kurczak}
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm font-semibold text-green-600">
                                  {item.wolowina}
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm font-semibold text-green-600">
                                  {item.kraftowe}
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm font-semibold text-green-600">
                                  {item.majonez}
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm font-semibold text-green-600">
                                  {item.ketchup}
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm font-semibold text-green-600">
                                  {item.gas || 0}
                                </TableCell>
                                <TableCell>
                                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs bg-transparent">
                                      <Edit className="h-3 w-3 mr-1" />
                                      Edit
                                    </Button>
                                    <Button size="sm" variant="outline" className="h-7 px-2 text-xs bg-transparent">
                                      <Eye className="h-3 w-3 mr-1" />
                                      View
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="h-7 px-2 text-xs text-red-600 hover:text-red-700 bg-transparent"
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
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
