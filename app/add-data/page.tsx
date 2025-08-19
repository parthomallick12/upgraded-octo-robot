"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  ChevronDown,
  DollarSign,
  Package,
  ShoppingCart,
  Zap,
  Building,
  Truck,
  Settings,
  HomeIcon,
  Users,
  Coffee,
  Calculator,
  Wrench,
  CreditCard,
  MoreHorizontal,
  User,
  Menu,
  Home,
  Database,
  FileText,
  UserPlus,
  Eye,
  Lightbulb,
} from "lucide-react"

export default function AddDataPage() {
  const [activeTab, setActiveTab] = useState("sales")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [addDataModalOpen, setAddDataModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    branch: "lablu",
    date: new Date().toISOString().split("T")[0],
  })
  const [addDataForm, setAddDataForm] = useState({
    date: new Date().toISOString().split("T")[0],
    branch: "lablu",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleInventoryManageSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Inventory Manage form submitted")
    // Handle inventory manage form submission logic here
  }

  const handleStockInventorySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Stock Inventory form submitted")
    // Handle stock inventory form submission logic here
  }

  const handleAddDataSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Add data form submitted:", addDataForm)
    setAddDataModalOpen(false)
  }

  const handleUtilitiesSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Utilities form submitted")
  }

  const calculateUtilitiesBrutto = (target: HTMLInputElement) => {
    const vat = Number.parseFloat(target.value) || 0
    const nettoInput = document.querySelector('input[name="natto"]') as HTMLInputElement
    const bruttoInput = document.querySelector('input[name="brutto"]') as HTMLInputElement
    const netto = Number.parseFloat(nettoInput?.value || "0") || 0
    if (bruttoInput) {
      bruttoInput.value = (netto + vat).toFixed(2)
    }
  }

  const tabs = [
    { id: "sales", label: "Sales", icon: DollarSign },
    { id: "inventory", label: "Inventory", icon: Package },
    { id: "cost-of-sales", label: "Cost Of Sales", icon: ShoppingCart },
    { id: "utilities", label: "Utilities", icon: Zap },
    { id: "office-expense", label: "Office Expense", icon: Building },
    { id: "delivery", label: "Delivery Costs", icon: Truck },
    { id: "managing", label: "Managing Expenses", icon: Settings },
    { id: "shop-rent", label: "Shop Rents", icon: HomeIcon },
    { id: "salaries", label: "Salaries", icon: Users },
    { id: "fooding", label: "Fooding Expense", icon: Coffee },
    { id: "home-expense", label: "Home Expenses", icon: HomeIcon },
    { id: "salary-calc", label: "Salary Calculations", icon: Calculator },
    { id: "repair", label: "Repair & Maintenance", icon: Wrench },
    { id: "bank-charges", label: "Bank Charges", icon: CreditCard },
    { id: "others", label: "Others", icon: MoreHorizontal },
    { id: "personal", label: "Personal Withdraw", icon: User },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <h1 className="text-xl font-bold">Create Data</h1>
            </div>
          </div>

          <DropdownMenu>
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

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
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
      </header>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex h-[calc(100vh-4rem)]">
        <aside
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col`}
        >
          {/* Sidebar Header */}

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-2 px-3">
              {/* Dashboard Section */}
              <div className="pb-2">
                <Link href="/">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              </div>

              {/* Business Operations Section */}
              <div className="pb-2">
                <h3 className="mb-2 px-3 text-xs md:text-sm font-semibold text-muted-foreground">
                  Business Operations
                </h3>
                <div className="space-y-1">
                  {/* Add Data Button - Active */}
                  <Button variant="ghost" className="w-full justify-start text-sm bg-accent">
                    <Database className="mr-2 h-4 w-4" />
                    Add Data
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        <Users className="mr-2 h-4 w-4" />
                        Add Employee
                        <ChevronDown className="ml-auto h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      <DropdownMenuLabel>Employee Management</DropdownMenuLabel>
                      <DropdownMenuSeparator />
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
                <h3 className="mb-2 px-3 text-xs md:text-sm font-semibold text-muted-foreground">Reports</h3>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Report
                  </Button>
                </div>
              </div>

              {/* Management Tools Section */}
              <div className="pb-2">
                <h3 className="mb-2 px-3 text-xs md:text-sm font-semibold text-muted-foreground">Management Tools</h3>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    <Building className="mr-2 h-4 w-4" />
                    Branch
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    <Settings className="mr-2 h-4 w-4" />
                    General Settings
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Manage Profile
                        <ChevronDown className="ml-auto h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
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
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </nav>
          </div>
        </aside>

        <main className="flex-1 min-w-0 overflow-auto bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="p-4 lg:p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Data Entry Center</h1>
                    <p className="text-gray-600 text-sm lg:text-base">Manage all your business data in one place</p>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Reports
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link href="/sales" className="flex items-center">
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
              </div>
            </div>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 lg:p-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="mb-8">
                    <div className="overflow-x-auto pb-2">
                      <TabsList className="inline-flex h-auto p-1 bg-gray-100/80 backdrop-blur-sm rounded-xl min-w-max">
                        {tabs.map((tab) => {
                          const Icon = tab.icon
                          return (
                            <TabsTrigger
                              key={tab.id}
                              value={tab.id}
                              className="flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 transition-all duration-200 hover:bg-white/50"
                            >
                              <Icon className="h-4 w-4" />
                              <span className="hidden sm:inline">{tab.label}</span>
                            </TabsTrigger>
                          )
                        })}
                      </TabsList>
                    </div>
                  </div>

                  <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-blue-600" />
                      Configuration
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="branch" className="text-sm font-medium text-gray-700">
                          Select Branch
                        </Label>
                        <Select
                          value={formData.branch}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, branch: value }))}
                        >
                          <SelectTrigger className="h-11 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Select Branch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lablu">🏪 Lablu Branch</SelectItem>
                            <SelectItem value="gulshan">☕ Gulshan Caffe Branch</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                          Select Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                          className="h-11 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <TabsContent value="sales" className="space-y-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {/* Cash Transactions */}
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300">
                          <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3 text-lg">
                              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                                <DollarSign className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <div className="text-gray-900">Cash Transactions</div>
                                <div className="text-sm text-gray-600 font-normal">Physical cash payments</div>
                              </div>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-3">
                                <Label className="text-sm font-medium text-gray-700">In Shop</Label>
                                <Input
                                  type="number"
                                  placeholder="0.00"
                                  className="h-11 bg-white/80 border-green-200 focus:border-green-500 focus:ring-green-500"
                                />
                              </div>
                              <div className="space-y-3">
                                <Label className="text-sm font-medium text-gray-700">Delivery</Label>
                                <Input
                                  type="number"
                                  placeholder="0.00"
                                  className="h-11 bg-white/80 border-green-200 focus:border-green-500 focus:ring-green-500"
                                />
                              </div>
                            </div>
                            <div className="space-y-3">
                              <Label className="text-sm font-medium text-gray-700">Online Delivery Platforms</Label>
                              <div className="grid grid-cols-2 gap-3">
                                {["Wolt", "Bolt", "Pyszne.pl", "Uber Eats", "Glovo"].map((platform) => (
                                  <Input
                                    key={platform}
                                    placeholder={platform}
                                    className="h-10 bg-white/80 border-green-200 focus:border-green-500 focus:ring-green-500 text-sm"
                                  />
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Card Transactions */}
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300">
                          <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3 text-lg">
                              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                <CreditCard className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <div className="text-gray-900">Card Transactions</div>
                                <div className="text-sm text-gray-600 font-normal">Digital card payments</div>
                              </div>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-3">
                                <Label className="text-sm font-medium text-gray-700">In Shop</Label>
                                <Input
                                  type="number"
                                  placeholder="0.00"
                                  className="h-11 bg-white/80 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                                />
                              </div>
                              <div className="space-y-3">
                                <Label className="text-sm font-medium text-gray-700">Delivery</Label>
                                <Input
                                  type="number"
                                  placeholder="0.00"
                                  className="h-11 bg-white/80 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                                />
                              </div>
                            </div>
                            <div className="space-y-3">
                              <Label className="text-sm font-medium text-gray-700">Online Delivery Platforms</Label>
                              <div className="grid grid-cols-2 gap-3">
                                {["Wolt", "Bolt", "Pyszne.pl", "Uber Eats", "Glovo"].map((platform) => (
                                  <Input
                                    key={platform}
                                    placeholder={platform}
                                    className="h-10 bg-white/80 border-blue-200 focus:border-blue-500 focus:ring-blue-500 text-sm"
                                  />
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button
                          type="submit"
                          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          <DollarSign className="mr-2 h-4 w-4" />
                          Submit Sales Data
                        </Button>
                      </div>
                    </form>
                  </TabsContent>

                  {tabs.slice(1).map((tab) => (
                    <TabsContent key={tab.id} value={tab.id} className="space-y-8">
                      {tab.id === "inventory" ? (
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                          <form onSubmit={handleInventoryManageSubmit}>
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-xl transition-all duration-300">
                              <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3 text-xl">
                                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                                    <Package className="h-6 w-6 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-gray-900">Inventory Manage</div>
                                    <div className="text-sm text-gray-600 font-normal">Add new inventory items</div>
                                  </div>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div className="space-y-4">
                                  {/* Kurczak */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Kurczak <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Kurczak"
                                        placeholder="Enter kg"
                                        className="h-11 bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Wolowina */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Wolowina <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Wolowina"
                                        placeholder="Enter kg"
                                        className="h-11 bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Kraftowe */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Kraftowe <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Kraftowe"
                                        placeholder="Enter kg"
                                        className="h-11 bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Majonez */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Majonez <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Majonez"
                                        placeholder="Enter kg"
                                        className="h-11 bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Ketchup */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Ketchup <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Ketchup"
                                        placeholder="Enter kg"
                                        className="h-11 bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Smabal */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Smabal <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Smabal"
                                        placeholder="Enter kg"
                                        className="h-11 bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Yogurt */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Yogurt <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Yogurt"
                                        placeholder="Enter kg"
                                        className="h-11 bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Pita 20 cm */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Pita 20 cm <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Pita_20_cm"
                                        placeholder="Enter pc"
                                        className="h-11 bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                        PC
                                      </span>
                                    </div>
                                  </div>

                                  {/* Pita 30 cm */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Pita 30 cm <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Pita_30_cm"
                                        placeholder="Enter pc"
                                        className="h-11 bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                        PC
                                      </span>
                                    </div>
                                  </div>

                                  {/* Gas */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Gas <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Gas"
                                        placeholder="Enter pc"
                                        className="h-11 bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                        PC
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="pt-4">
                                  <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                                  >
                                    <Package className="mr-2 h-4 w-4" />
                                    Create Inventory
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </form>

                          <form onSubmit={handleStockInventorySubmit}>
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300">
                              <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3 text-xl">
                                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                    <Package className="h-6 w-6 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-gray-900">Stock Inventory</div>
                                    <div className="text-sm text-gray-600 font-normal">Update current stock levels</div>
                                  </div>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div className="space-y-4">
                                  {/* Kurczak */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Kurczak <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Kurczak_stock"
                                        defaultValue="25.5"
                                        className="h-11 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Wolowina */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Wolowina <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Wolowina_stock"
                                        defaultValue="18.2"
                                        className="h-11 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Kraftowe */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Kraftowe <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Kraftowe_stock"
                                        defaultValue="12.0"
                                        className="h-11 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Majonez */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Majonez <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Majonez_stock"
                                        defaultValue="8.5"
                                        className="h-11 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Ketchup */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Ketchup <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Ketchup_stock"
                                        defaultValue="6.3"
                                        className="h-11 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Smabal */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Smabal <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Smabal_stock"
                                        defaultValue="4.2"
                                        className="h-11 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Yogurt */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Yogurt <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Yogurt_stock"
                                        defaultValue="15.8"
                                        className="h-11 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        KG
                                      </span>
                                    </div>
                                  </div>

                                  {/* Pita 20 cm */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Pita 20 cm <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Pita_20_cm_stock"
                                        defaultValue="150"
                                        className="h-11 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        PC
                                      </span>
                                    </div>
                                  </div>

                                  {/* Pita 30 cm */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Pita 30 cm <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Pita_30_cm_stock"
                                        defaultValue="200"
                                        className="h-11 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        PC
                                      </span>
                                    </div>
                                  </div>

                                  {/* Gas */}
                                  <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700">
                                      Gas <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        name="Gas_stock"
                                        defaultValue="3"
                                        className="h-11 bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-12"
                                      />
                                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                        PC
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="pt-4">
                                  <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                                  >
                                    <Package className="mr-2 h-4 w-4" />
                                    Update Stock
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </form>
                        </div>
                      ) : tab.id === "cost-of-sales" ? (
                        <form onSubmit={handleSubmit} className="space-y-8">
                          <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-xl transition-all duration-300">
                            <CardHeader className="pb-4">
                              <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                                  <ShoppingCart className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <div className="text-gray-900">Cost Of Sales</div>
                                  <div className="text-sm text-gray-600 font-normal">
                                    Enter cost of sales data with calculations
                                  </div>
                                </div>
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Select cost of sales</Label>
                                  <Select>
                                    <SelectTrigger className="h-11 bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500">
                                      <SelectValue placeholder="Select cost of sales" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Ali_Baba">Ali Baba</SelectItem>
                                      <SelectItem value="spec">Spec</SelectItem>
                                      <SelectItem value="naralny">Naralny</SelectItem>
                                      <SelectItem value="Coca-Cola">Coca-Cola</SelectItem>
                                      <SelectItem value="pepsi">Pepsi</SelectItem>
                                      <SelectItem value="Trafin_oil">Trafin Oil</SelectItem>
                                      <SelectItem value="Shop_exp">Shop exp</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Faktura No.</Label>
                                  <div className="relative">
                                    <Input
                                      type="text"
                                      name="fakarano"
                                      placeholder="Faktura No"
                                      className="h-11 bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 pl-24"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                                      Faktura No.
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Notes</Label>
                                  <div className="relative">
                                    <Input
                                      type="text"
                                      name="Notes"
                                      placeholder="Notes"
                                      className="h-11 bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 pl-16"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                                      Notes
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Payment Method</Label>
                                  <Select>
                                    <SelectTrigger className="h-11 bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500">
                                      <SelectValue placeholder="Select payment method" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="cash">💵 Cash</SelectItem>
                                      <SelectItem value="card">💳 Card</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Netto</Label>
                                  <div className="relative">
                                    <Input
                                      type="number"
                                      name="natto"
                                      placeholder="Netto"
                                      className="h-11 bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 pl-16"
                                      onChange={(e) => {
                                        const netto = Number.parseFloat(e.target.value) || 0
                                        const vatInput = document.querySelector('input[name="vat"]') as HTMLInputElement
                                        const bruttoInput = document.querySelector(
                                          'input[name="brulto"]',
                                        ) as HTMLInputElement
                                        const vat = Number.parseFloat(vatInput?.value || "0") || 0
                                        if (bruttoInput) {
                                          bruttoInput.value = (netto + vat).toFixed(2)
                                        }
                                      }}
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                                      Netto
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">VAT</Label>
                                  <div className="relative">
                                    <Input
                                      type="number"
                                      name="vat"
                                      placeholder="VAT"
                                      className="h-11 bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 pl-12"
                                      onChange={(e) => {
                                        const vat = Number.parseFloat(e.target.value) || 0
                                        const nettoInput = document.querySelector(
                                          'input[name="natto"]',
                                        ) as HTMLInputElement
                                        const bruttoInput = document.querySelector(
                                          'input[name="brulto"]',
                                        ) as HTMLInputElement
                                        const netto = Number.parseFloat(nettoInput?.value || "0") || 0
                                        if (bruttoInput) {
                                          bruttoInput.value = (netto + vat).toFixed(2)
                                        }
                                      }}
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                                      VAT
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Brutto</Label>
                                  <div className="relative">
                                    <Input
                                      type="text"
                                      name="brulto"
                                      placeholder="Brutto"
                                      readOnly
                                      className="h-11 bg-gray-50 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 pl-16 cursor-not-allowed"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                                      Brutto
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Attach File</Label>
                                  <div className="relative">
                                    <Input
                                      type="file"
                                      name="file"
                                      className="h-11 bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 pl-24 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                                      Attach File
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Payment Date</Label>
                                  <div className="relative">
                                    <Input
                                      type="date"
                                      name="payment_date"
                                      className="h-11 bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 pl-28"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                                      Payment Date
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-end pt-4">
                                <Button
                                  type="submit"
                                  className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                                >
                                  <ShoppingCart className="mr-2 h-4 w-4" />
                                  Create
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </form>
                      ) : tab.id === "utilities" ? (
                        <form onSubmit={handleUtilitiesSubmit} className="space-y-8">
                          <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-xl transition-all duration-300">
                            <CardHeader className="pb-4">
                              <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                                  <Lightbulb className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <div className="text-gray-900">Utilities Entry</div>
                                  <div className="text-sm text-gray-600 font-normal">
                                    Enter utilities data for the selected branch and date
                                  </div>
                                </div>
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Select Utilities</Label>
                                  <Select>
                                    <SelectTrigger className="h-11 bg-white border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500">
                                      <SelectValue placeholder="Select Utilities" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="tauron">Tauron</SelectItem>
                                      <SelectItem value="fortum">Fortum</SelectItem>
                                      <SelectItem value="line_gas">Line Gas</SelectItem>
                                      <SelectItem value="cylinder_gas">Cylinder Gas</SelectItem>
                                      <SelectItem value="internet_bill">Internet Bill</SelectItem>
                                      <SelectItem value="garbage_bill">Garbage Bill</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Faktura No.</Label>
                                  <div className="relative">
                                    <Input
                                      type="text"
                                      name="fakarano"
                                      placeholder="Faktura No"
                                      className="h-11 bg-white border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500 pl-20"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                                      Faktura No.
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Notes</Label>
                                  <div className="relative">
                                    <Input
                                      type="text"
                                      name="note"
                                      placeholder="Notes"
                                      className="h-11 bg-white border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500 pl-14"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                                      Notes
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Payment Method</Label>
                                  <Select>
                                    <SelectTrigger className="h-11 bg-white border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500">
                                      <SelectValue placeholder="Select payment method" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="cash">Cash</SelectItem>
                                      <SelectItem value="card">Card</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Netto</Label>
                                  <div className="relative">
                                    <Input
                                      type="text"
                                      name="natto"
                                      placeholder="Netto"
                                      className="h-11 bg-white border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500 pl-14"
                                      onChange={(e) => calculateUtilitiesBrutto(e.target)}
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                                      Netto
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">VAT</Label>
                                  <div className="relative">
                                    <Input
                                      type="text"
                                      name="vat"
                                      placeholder="VAT"
                                      className="h-11 bg-white border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500 pl-12"
                                      onChange={(e) => calculateUtilitiesBrutto(e.target)}
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                                      VAT
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Brutto</Label>
                                  <div className="relative">
                                    <Input
                                      type="text"
                                      name="brutto"
                                      placeholder="Brutto"
                                      readOnly
                                      className="h-11 bg-gray-50 border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500 pl-16 cursor-not-allowed"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                                      Brutto
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Attach File</Label>
                                  <div className="relative">
                                    <Input
                                      type="file"
                                      name="file"
                                      className="h-11 bg-white border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500 pl-24 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                                      Attach File
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Payment Date</Label>
                                  <div className="relative">
                                    <Input
                                      type="date"
                                      name="payment_date"
                                      className="h-11 bg-white border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500 pl-28"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                                      Payment Date
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-end pt-4">
                                <Button
                                  type="submit"
                                  className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                                >
                                  <Lightbulb className="mr-2 h-4 w-4" />
                                  Create
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </form>
                      ) : tab.id === "office-expense" ? (
                        <form onSubmit={handleSubmit} className="space-y-8">
                          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-xl transition-all duration-300">
                            <CardHeader className="pb-4">
                              <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                                  <Building className="h-6 w-6 text-white" />
                                </div>
                                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold">
                                  Office Expense
                                </span>
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                  <Label
                                    htmlFor="office-expense-select"
                                    className="text-sm font-medium text-purple-700"
                                  >
                                    Select Office Expense *
                                  </Label>
                                  <Select>
                                    <SelectTrigger className="border-purple-200 focus:border-purple-400 focus:ring-purple-400">
                                      <SelectValue placeholder="Select Office Expense" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="accountant">Accountant</SelectItem>
                                      <SelectItem value="zus-pit">ZUS & PIT</SelectItem>
                                      <SelectItem value="pfron">PFRON</SelectItem>
                                      <SelectItem value="cit">CIT</SelectItem>
                                      <SelectItem value="tv">TV</SelectItem>
                                      <SelectItem value="pit-11">PIT-11</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="faktura-no" className="text-sm font-medium text-purple-700">
                                    Faktura No. *
                                  </Label>
                                  <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                                      Faktura No.
                                    </span>
                                    <Input
                                      id="faktura-no"
                                      placeholder="Faktura No"
                                      className="pl-24 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="notes" className="text-sm font-medium text-purple-700">
                                    Notes
                                  </Label>
                                  <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                                      Notes
                                    </span>
                                    <Input
                                      id="notes"
                                      placeholder="Notes"
                                      className="pl-16 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="payment-method" className="text-sm font-medium text-purple-700">
                                    Payment Method *
                                  </Label>
                                  <Select defaultValue="cash">
                                    <SelectTrigger className="border-purple-200 focus:border-purple-400 focus:ring-purple-400">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="cash">Cash</SelectItem>
                                      <SelectItem value="card">Card</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="netto" className="text-sm font-medium text-purple-700">
                                    Netto *
                                  </Label>
                                  <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                                      Netto
                                    </span>
                                    <Input
                                      id="netto"
                                      type="number"
                                      step="0.01"
                                      placeholder="0.00"
                                      className="pl-16 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                                      onChange={(e) => {
                                        const netto = Number.parseFloat(e.target.value) || 0
                                        const vatInput = document.getElementById("office-vat") as HTMLInputElement
                                        const vat = Number.parseFloat(vatInput?.value) || 0
                                        const bruttoInput = document.getElementById("office-brutto") as HTMLInputElement
                                        if (bruttoInput) {
                                          bruttoInput.value = (netto + vat).toFixed(2)
                                        }
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="office-vat" className="text-sm font-medium text-purple-700">
                                    VAT *
                                  </Label>
                                  <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                                      VAT
                                    </span>
                                    <Input
                                      id="office-vat"
                                      type="number"
                                      step="0.01"
                                      placeholder="0.00"
                                      className="pl-14 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                                      onChange={(e) => {
                                        const vat = Number.parseFloat(e.target.value) || 0
                                        const nettoInput = document.getElementById("netto") as HTMLInputElement
                                        const netto = Number.parseFloat(nettoInput?.value) || 0
                                        const bruttoInput = document.getElementById("office-brutto") as HTMLInputElement
                                        if (bruttoInput) {
                                          bruttoInput.value = (netto + vat).toFixed(2)
                                        }
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="office-brutto" className="text-sm font-medium text-purple-700">
                                    Brutto (Auto-calculated)
                                  </Label>
                                  <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                      Brutto
                                    </span>
                                    <Input
                                      id="office-brutto"
                                      type="number"
                                      step="0.01"
                                      placeholder="0.00"
                                      className="pl-16 bg-gray-50 border-gray-200"
                                      readOnly
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="attach-file" className="text-sm font-medium text-purple-700">
                                    Attach File
                                  </Label>
                                  <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded z-10">
                                      File
                                    </span>
                                    <Input
                                      id="attach-file"
                                      type="file"
                                      className="pl-14 border-purple-200 focus:border-purple-400 focus:ring-purple-400 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-purple-50 file:text-purple-600 hover:file:bg-purple-100"
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="payment-date" className="text-sm font-medium text-purple-700">
                                    Payment Date *
                                  </Label>
                                  <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                                      Date
                                    </span>
                                    <Input
                                      id="payment-date"
                                      type="date"
                                      className="pl-16 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-end pt-6">
                                <Button
                                  type="submit"
                                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                                >
                                  <Building className="mr-2 h-4 w-4" />
                                  Create Office Expense
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </form>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                          <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-slate-50 hover:shadow-xl transition-all duration-300">
                            <CardHeader className="pb-4">
                              <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                  <tab.icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <div className="text-gray-900">{tab.label} Entry</div>
                                  <div className="text-sm text-gray-600 font-normal">
                                    Enter {tab.label.toLowerCase()} data for the selected branch and date
                                  </div>
                                </div>
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Item/Description</Label>
                                  <Input
                                    placeholder="Enter item description"
                                    className="h-11 bg-white border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="space-y-3">
                                  <Label className="text-sm font-medium text-gray-700">Amount (PLN)</Label>
                                  <Input
                                    type="number"
                                    placeholder="0.00"
                                    className="h-11 bg-white border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                                  />
                                </div>
                              </div>
                              <div className="space-y-3">
                                <Label className="text-sm font-medium text-gray-700">Notes</Label>
                                <Textarea
                                  placeholder="Additional notes and details..."
                                  className="min-h-[100px] bg-white border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                                />
                              </div>
                              <div className="space-y-3">
                                <Label className="text-sm font-medium text-gray-700">Payment Method</Label>
                                <Select>
                                  <SelectTrigger className="h-11 bg-white border-gray-200 focus:border-indigo-500 focus:ring-indigo-500">
                                    <SelectValue placeholder="Select payment method" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="cash">💵 Cash</SelectItem>
                                    <SelectItem value="card">💳 Card</SelectItem>
                                    <SelectItem value="bank">🏦 Bank Transfer</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </CardContent>
                          </Card>
                        </form>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
