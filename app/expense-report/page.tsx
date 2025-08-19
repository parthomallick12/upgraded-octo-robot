"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  Home,
  Database,
  BarChart3,
  Building2,
  Settings,
  FileText,
  User,
  ChevronDown,
  UserPlus,
  Edit,
  Eye,
  Trash2,
} from "lucide-react"
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

export default function ExpenseReportPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("cost-of-sales")

  // Sample expense data for different categories
  const expenseData = {
    "cost-of-sales": [
      {
        id: 1,
        date: "2025-07-14",
        item: "Ali_Baba",
        branch: "Lablu Branch",
        faktura: "",
        netto: "100",
        vat: "5",
        brutto: "105",
        payment: "card",
        paymentDate: "",
      },
      {
        id: 2,
        date: "2025-06-12",
        item: "naralny",
        branch: "gulshan_caffe_branch",
        faktura: "",
        netto: "100",
        vat: "5",
        brutto: "105",
        payment: "card",
        paymentDate: "",
      },
      {
        id: 3,
        date: "2025-06-12",
        item: "Coca-Cola",
        branch: "Lablu Branch",
        faktura: "",
        netto: "",
        vat: "5",
        brutto: "5",
        payment: "card",
        paymentDate: "2025-06-12",
      },
    ],
    utilities: [
      {
        id: 1,
        date: "2025-06-27",
        item: "Cylinder_Gas",
        branch: "gulshan_caffe_branch",
        faktura: "",
        netto: "100",
        vat: "",
        brutto: "100",
        payment: "cash",
        paymentDate: "",
      },
    ],
    "office-expense": [
      {
        id: 1,
        date: "2025-06-21",
        item: "CIT",
        branch: "gulshan_caffe_branch",
        faktura: "8000",
        netto: "2555",
        vat: "5",
        brutto: "2560",
        payment: "card",
        paymentDate: "",
      },
    ],
    "delivery-costs": [
      {
        id: 1,
        date: "2025-06-13",
        item: "Wolt",
        branch: "Lablu Branch",
        faktura: "6000",
        netto: "2555",
        vat: "5",
        brutto: "2560",
        payment: "card",
        paymentDate: "",
      },
      {
        id: 2,
        date: "",
        item: "Pyszne_Pl",
        branch: "",
        faktura: "",
        netto: "100.00",
        vat: "200.00",
        brutto: "300.00",
        payment: "",
        paymentDate: "",
      },
    ],
    "shop-rents": [
      {
        id: 1,
        date: "2025-06-20",
        item: "",
        branch: "gulshan_caffe_branch",
        faktura: "1000",
        netto: "2555",
        vat: "5",
        brutto: "2560",
        payment: "card",
        paymentDate: "",
      },
    ],
    salaries: [
      {
        id: 1,
        date: "2025-07-09",
        employee: "Somrat",
        branch: "Lablu Branch",
        faktura: "4",
        netto: "4",
        vat: "4",
        brutto: "8",
        payment: "card",
        paymentDate: "",
      },
      {
        id: 2,
        date: "2025-06-13",
        employee: "",
        branch: "Lablu Branch",
        faktura: "8000",
        netto: "2555",
        vat: "5",
        brutto: "2560",
        payment: "card",
        paymentDate: "",
      },
    ],
    "fooding-expense": [
      {
        id: 1,
        date: "2025-06-20",
        employee: "sagor",
        branch: "",
        faktura: "8000",
        netto: "2555",
        vat: "5",
        brutto: "2560",
        payment: "card",
        paymentDate: "",
      },
      {
        id: 2,
        date: "",
        employee: "Akbor",
        branch: "",
        faktura: "100",
        netto: "",
        vat: "",
        brutto: "",
        payment: "",
        paymentDate: "",
      },
    ],
    "home-expenses": [
      {
        id: 1,
        date: "2025-06-19",
        name: "Alpha",
        branch: "Lablu Branch",
        faktura: "",
        netto: "",
        vat: "",
        brutto: "",
        payment: "Ali_Baba",
        paymentDate: "",
      },
      {
        id: 2,
        date: "2025-06-14",
        name: "utilities",
        branch: "Lablu Branch",
        faktura: "9300",
        netto: "6585",
        vat: "5",
        brutto: "6590",
        payment: "card",
        paymentDate: "",
      },
    ],
    "salary-calculations": [
      {
        id: 1,
        name: "sagor",
        hourlyRate: "500",
        totalHours: "5",
        totalSalary: "2500.00",
        received: "500",
        payable: "2000.00",
        createdAt: "18/Jun/2025",
        paymentDate: "",
      },
      {
        id: 2,
        name: "sagor",
        hourlyRate: "500",
        totalHours: "5",
        totalSalary: "2500.00",
        received: "500",
        payable: "2000.00",
        createdAt: "24/May/2025",
        paymentDate: "",
      },
    ],
    "repair-maintenance": [
      {
        id: 1,
        date: "2025-07-09",
        title: "labour_bil",
        branch: "Lablu Branch",
        faktura: "8000",
        netto: "2555.00",
        vat: "5.00",
        brutto: "2560.00",
        payment: "cash",
        paymentDate: "",
      },
    ],
    "bank-charges": [
      {
        id: 1,
        date: "2025-07-08",
        branch: "gulshan_caffe_branch",
        faktura: "8000",
        netto: "7.00",
        vat: "5.00",
        brutto: "12.00",
        payment: "card",
        paymentDate: "",
      },
    ],
    others: [
      {
        id: 1,
        date: "1983-06-25",
        branch: "Lablu Branch",
        faktura: "4",
        netto: "23.00",
        vat: "3.00",
        brutto: "26.00",
        payment: "card",
        paymentDate: "",
      },
    ],
    "personal-withdraw": [
      {
        id: 1,
        date: "2025-07-07",
        title: "material_purchase",
        branch: "gulshan_caffe_branch",
        faktura: "4",
        netto: "7.00",
        vat: "5.00",
        brutto: "12.00",
        payment: "card",
        paymentDate: "",
      },
    ],
  }

  const expenseTabs = [
    { id: "cost-of-sales", label: "Cost Of Sales", icon: "💰" },
    { id: "utilities", label: "Utilities", icon: "⚡" },
    { id: "office-expense", label: "Office Expense", icon: "🏢" },
    { id: "delivery-costs", label: "Delivery Costs", icon: "🚚" },
    { id: "managing-expenses", label: "Managing Expenses", icon: "📊" },
    { id: "shop-rents", label: "Shop Rents", icon: "🏪" },
    { id: "salaries", label: "Salaries", icon: "👥" },
    { id: "fooding-expense", label: "Fooding Expense", icon: "🍽️" },
    { id: "home-expenses", label: "Home Expenses", icon: "🏠" },
    { id: "salary-calculations", label: "Salary Calculations", icon: "🧮" },
    { id: "repair-maintenance", label: "Repair & Maintenance", icon: "🔧" },
    { id: "bank-charges", label: "Bank Charges", icon: "🏦" },
    { id: "others", label: "Others", icon: "📋" },
    { id: "personal-withdraw", label: "Personal Withdraw", icon: "💳" },
  ]

  const renderExpenseTable = (category: string) => {
    const data = expenseData[category as keyof typeof expenseData] || []

    if (category === "salary-calculations") {
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Serial No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>H.Rate</TableHead>
              <TableHead>T. Hours</TableHead>
              <TableHead>T. Salary</TableHead>
              <TableHead>Received</TableHead>
              <TableHead>Payable</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>Payment Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.hourlyRate}</TableCell>
                <TableCell>{item.totalHours}</TableCell>
                <TableCell>{item.totalSalary}</TableCell>
                <TableCell>{item.received}</TableCell>
                <TableCell>{item.payable}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell>{item.paymentDate}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Serial No</TableHead>
            <TableHead>Date</TableHead>
            {category === "salaries" && <TableHead>E.Name</TableHead>}
            {category === "fooding-expense" && <TableHead>E.Name</TableHead>}
            {category === "home-expenses" && <TableHead>Name</TableHead>}
            {category === "repair-maintenance" && <TableHead>Title</TableHead>}
            {category === "personal-withdraw" && <TableHead>Title</TableHead>}
            {!["managing-expenses", "shop-rents", "bank-charges", "others"].includes(category) && (
              <TableHead>
                {category === "cost-of-sales"
                  ? "Sales"
                  : category === "utilities"
                    ? "Utilities"
                    : category === "office-expense"
                      ? "Utilities"
                      : category === "delivery-costs"
                        ? "Delivery"
                        : "Item"}
              </TableHead>
            )}
            <TableHead>Branch</TableHead>
            <TableHead>Faktura No.</TableHead>
            <TableHead>Netto</TableHead>
            <TableHead>Vat</TableHead>
            <TableHead>Brutto</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Payment Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.date}</TableCell>
              {(category === "salaries" || category === "fooding-expense") && <TableCell>{item.employee}</TableCell>}
              {category === "home-expenses" && <TableCell>{item.name}</TableCell>}
              {(category === "repair-maintenance" || category === "personal-withdraw") && (
                <TableCell>{item.title}</TableCell>
              )}
              {!["managing-expenses", "shop-rents", "bank-charges", "others"].includes(category) && (
                <TableCell>{item.item}</TableCell>
              )}
              <TableCell>{item.branch}</TableCell>
              <TableCell>{item.faktura}</TableCell>
              <TableCell>{item.netto}</TableCell>
              <TableCell>{item.vat}</TableCell>
              <TableCell>{item.brutto}</TableCell>
              <TableCell>{item.payment}</TableCell>
              <TableCell>{item.paymentDate}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
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
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <h1 className="text-lg sm:text-xl font-semibold">Expense Reports</h1>
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
                        <DropdownMenuItem>
                          <Link href="/sales-report" className="flex items-center">
                            Sales Report
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/inventory" className="flex items-center">
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
          <div className="p-3 sm:p-4 lg:p-6">
            {/* Breadcrumb */}
            <div className="mb-4 sm:mb-6">
              <nav className="flex text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">
                  Dashboard
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Expense Reports</span>
              </nav>
            </div>

            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Expense Reports
                  </h1>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Comprehensive expense tracking and management
                  </p>
                </div>
              </div>
            </div>

            {/* Expense Categories Tabs */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Expense Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                  <div className="overflow-x-auto">
                    <TabsList className="inline-flex h-auto p-1 bg-muted/50 min-w-max">
                      {expenseTabs.map((tab) => (
                        <TabsTrigger
                          key={tab.id}
                          value={tab.id}
                          className="whitespace-nowrap text-xs sm:text-sm px-2 sm:px-3 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                        >
                          <span className="mr-1 sm:mr-2">{tab.icon}</span>
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  {expenseTabs.map((tab) => (
                    <TabsContent key={tab.id} value={tab.id} className="space-y-4">
                      <div className="rounded-lg border bg-white overflow-hidden">
                        <div className="overflow-x-auto">{renderExpenseTable(tab.id)}</div>
                      </div>
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
