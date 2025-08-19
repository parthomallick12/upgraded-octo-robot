"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Menu,
  Home,
  Database,
  Users,
  BarChart3,
  UserPlus,
  Settings,
  FileText,
  User,
  ChevronDown,
  Building2,
  DollarSign,
  CreditCard,
  Banknote,
} from "lucide-react"

export default function ReportsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-semibold">Reports Dashboard</h1>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                Diamond Kebab - Financial Reports
              </p>
            </div>
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
              <DropdownMenuContent side="bottom" align="center" alignOffset={0} sideOffset={8} className="w-48 sm:w-56">
                <DropdownMenuLabel className="font-normal">
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
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
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
            <div className="flex h-14 sm:h-16 items-center border-b px-3 sm:px-4 lg:px-6">
              <Link className="flex items-center gap-2 font-semibold" href="/">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Home className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
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
                  <h3 className="mb-2 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Business Operations
                  </h3>
                  <div className="space-y-1">
                    
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <Database className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Add Data
                    </Button>
                  </div>
                </div>

                {/* Reports Section */}
                <div className="pb-2">
                  <h3 className="mb-2 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Reports
                  </h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9 bg-accent">
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
                  <h3 className="mb-2 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Management Tools
                  </h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm h-8 sm:h-9">
                      <Building2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 overflow-auto bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="p-3 sm:p-4 lg:p-6 xl:p-8">
            {/* Breadcrumb */}
            <div className="mb-4 sm:mb-6">
              <nav className="flex text-xs sm:text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">
                  Dashboard
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Reports</span>
              </nav>
            </div>

            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Financial Reports
                  </h1>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Comprehensive business analytics and reporting dashboard
                  </p>
                </div>
              </div>
            </div>

            {/* Reports Tabs */}
            <Tabs defaultValue="income-statement" className="space-y-4 sm:space-y-6">
              <div className="overflow-x-auto">
                <TabsList className="grid w-max grid-cols-6 gap-1 sm:gap-2 p-1">
                  <TabsTrigger value="income-statement" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
                    Income Statement
                  </TabsTrigger>
                  <TabsTrigger value="summary" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
                    Summary
                  </TabsTrigger>
                  <TabsTrigger value="expense" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
                    Expense
                  </TabsTrigger>
                  <TabsTrigger value="salary" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
                    Salary
                  </TabsTrigger>
                  <TabsTrigger value="faktura" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
                    Faktura
                  </TabsTrigger>
                  <TabsTrigger value="bank-data" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
                    Bank Data
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Income Statement Tab */}
              <TabsContent value="income-statement" className="space-y-4 sm:space-y-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30">
                  <CardHeader className="text-center pb-4 sm:pb-6">
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold">Diamond Kebab</CardTitle>
                    <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                      <p className="text-lg sm:text-xl font-semibold">Lablu Branch</p>
                      <p className="text-base sm:text-lg font-medium">Income Statement</p>
                      <p>For the Period Of</p>
                      <p>Branch Report (2025-08-14 to 2025-08-14)</p>
                    </div>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left font-semibold">
                              Category
                            </th>
                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left font-semibold">Amount</th>
                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-center font-semibold">
                              Totals
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Sales Section */}
                          <tr className="bg-blue-50">
                            <td colSpan={2} className="border border-gray-300 px-2 sm:px-4 py-2 font-bold">
                              <DollarSign className="inline mr-2 h-4 w-4" />
                              Sales
                            </td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center font-bold">
                              Total Sales: 0.00
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2">Cash in Shop</td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2">0.00</td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2">Cash Delivery</td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2">0.00</td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2">Card in Shop</td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2">0.00</td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2">Card Delivery</td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2">0.00</td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2"></td>
                          </tr>

                          {/* Expenses Section */}
                          <tr className="bg-red-50">
                            <td colSpan={2} className="border border-gray-300 px-2 sm:px-4 py-2 font-bold">
                              <CreditCard className="inline mr-2 h-4 w-4" />
                              Expenses
                            </td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center font-bold">
                              Total Expenses: 0.00
                            </td>
                          </tr>
                          {[
                            "Cost of Sales",
                            "Utilities",
                            "Office Expenses",
                            "Delivery Cost",
                            "Managing Expenses",
                            "Shop Rent",
                            "Fooding Expenses",
                            "Home Expenses",
                            "Repair & Maintenance",
                            "Bank Charges",
                            "Other Expenses",
                            "Personal Withdraw",
                          ].map((expense) => (
                            <tr key={expense}>
                              <td className="border border-gray-300 px-2 sm:px-4 py-2">{expense}</td>
                              <td className="border border-gray-300 px-2 sm:px-4 py-2">0.00</td>
                              <td className="border border-gray-300 px-2 sm:px-4 py-2"></td>
                            </tr>
                          ))}

                          {/* Profit/Loss */}
                          <tr className="bg-green-50">
                            <td colSpan={2} className="border border-gray-300 px-2 sm:px-4 py-2 font-bold">
                              <Banknote className="inline mr-2 h-4 w-4" />
                              Profit / Loss
                            </td>
                            <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center font-bold">
                              Profit / Loss: 0.00
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Signature Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 sm:mt-8">
                      {["Prepared by", "Checked by", "Manager by"].map((role) => (
                        <div key={role} className="border border-gray-300 p-4 text-center">
                          <div className="mb-4">
                            <div className="w-24 h-16 mx-auto bg-gray-100 border rounded flex items-center justify-center text-xs text-gray-500">
                              Signature
                            </div>
                          </div>
                          <hr className="my-2" />
                          <p className="font-semibold text-sm">{role}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Summary Tab */}
              <TabsContent value="summary" className="space-y-4 sm:space-y-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-white" />
                      </div>
                      Summary Report
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-green-50">
                            <th className="border border-gray-300 px-2 py-2 text-left">Serial No</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Date</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Cash in shop</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Cash delivery</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Cash wolt</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Cash bolt</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Cash pyszne</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Cash uber eats</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Cash glovo</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Card in shop</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Card delivery</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Card wolt</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Card bolt</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Card pyszne</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Card uber eats</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Card glovo</th>
                            <th className="border border-gray-300 px-2 py-2 text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={17} className="border border-gray-300 px-4 py-8 text-center text-gray-500">
                              No data available for the selected period
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Expense Tab */}
              <TabsContent value="expense" className="space-y-4 sm:space-y-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-red-50/30">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl sm:text-2xl font-bold">Diamond Kebab</CardTitle>
                    <div className="space-y-1 text-sm sm:text-base text-muted-foreground">
                      <p className="text-lg font-semibold">Lablu Branch</p>
                      <p className="text-base font-medium">Expense Report</p>
                      <p>For the Period Of</p>
                      <p>Branch Report (2025-08-14 to 2025-08-14)</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-red-50">
                            <th className="border border-gray-300 px-2 py-2">Category</th>
                            <th colSpan={5} className="border border-gray-300 px-2 py-2">
                              Cost of Sales
                            </th>
                            <th colSpan={5} className="border border-gray-300 px-2 py-2">
                              Utilities
                            </th>
                            <th className="border border-gray-300 px-2 py-2">Expenses</th>
                          </tr>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-2 py-2"></th>
                            <th className="border border-gray-300 px-2 py-2">Cash in Shop</th>
                            <th className="border border-gray-300 px-2 py-2">Cash Delivery</th>
                            <th className="border border-gray-300 px-2 py-2">Card in Shop</th>
                            <th className="border border-gray-300 px-2 py-2">Card Delivery</th>
                            <th className="border border-gray-300 px-2 py-2">Other Cost</th>
                            <th className="border border-gray-300 px-2 py-2">Office Expenses</th>
                            <th className="border border-gray-300 px-2 py-2">Delivery Cost</th>
                            <th className="border border-gray-300 px-2 py-2">Managing Expenses</th>
                            <th className="border border-gray-300 px-2 py-2">Shop Rent</th>
                            <th className="border border-gray-300 px-2 py-2">Bank Charges</th>
                            <th className="border border-gray-300 px-2 py-2"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={12} className="border border-gray-300 px-4 py-8 text-center text-gray-500">
                              No expense data available for the selected period
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Other tabs with placeholder content */}
              <TabsContent value="salary" className="space-y-4 sm:space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Salary Report</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-500 py-8">Salary report content will be displayed here</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faktura" className="space-y-4 sm:space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Faktura Report</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-500 py-8">Faktura report content will be displayed here</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bank-data" className="space-y-4 sm:space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Bank Data Report</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-500 py-8">Bank data report content will be displayed here</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
