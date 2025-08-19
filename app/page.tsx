"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

import { DialogTrigger } from "@/components/ui/dialog"

import type React from "react"
import { useRouter } from "next/navigation"

import type { ChartConfig } from "@/components/ui/chart"
import Link from "next/link"
import { Home } from "lucide-react"
import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChartContainer } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import {
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Building,
  Settings,
  Wallet,
  User,
  ChevronDown,
  Search,
  Plus,
  Edit,
  Trash2,
  Download,
  Filter,
  UserPlus,
  Database,
  Eye,
  Save,
  FileText,
  Package,
  FileBarChart,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Mock data for demonstration
const mockMetrics = {
  totalSales: { value: 125430, change: 12.5, trend: "up" },
  totalExpenses: { value: 89250, change: -3.2, trend: "down" },
  netProfit: { value: 36180, change: 8.7, trend: "up" },
  activeBranches: { value: 2, change: 0, trend: "neutral" },
}

// Mock chart data with branch information
const allMonthlyData = [
  { month: "Jan", sales: 12000, expenses: 8000, profit: 4000, branch: "Lablu Branch" },
  { month: "Jan", sales: 8000, expenses: 5000, profit: 3000, branch: "Gulshan Caffe" },
  { month: "Feb", sales: 15000, expenses: 9500, profit: 5500, branch: "Lablu Branch" },
  { month: "Feb", sales: 10000, expenses: 6000, profit: 4000, branch: "Gulshan Caffe" },
  { month: "Mar", sales: 18000, expenses: 11000, profit: 7000, branch: "Lablu Branch" },
  { month: "Mar", sales: 12000, expenses: 7000, profit: 5000, branch: "Gulshan Caffe" },
  { month: "Apr", sales: 22000, expenses: 13000, profit: 9000, branch: "Lablu Branch" },
  { month: "Apr", sales: 14000, expenses: 8000, profit: 6000, branch: "Gulshan Caffe" },
  { month: "May", sales: 19000, expenses: 12000, profit: 7000, branch: "Lablu Branch" },
  { month: "May", sales: 13000, expenses: 8000, profit: 5000, branch: "Gulshan Caffe" },
  { month: "Jun", sales: 25000, expenses: 15000, profit: 10000, branch: "Lablu Branch" },
  { month: "Jun", sales: 16000, expenses: 9000, profit: 7000, branch: "Gulshan Caffe" },
  { month: "Jul", sales: 28000, expenses: 16000, profit: 12000, branch: "Lablu Branch" },
  { month: "Jul", sales: 18000, expenses: 10000, profit: 8000, branch: "Gulshan Caffe" },
  { month: "Aug", sales: 26000, expenses: 14500, profit: 11500, branch: "Lablu Branch" },
  { month: "Aug", sales: 17000, expenses: 9500, profit: 7500, branch: "Gulshan Caffe" },
]

const dailyData = [
  { day: "Mon", sales: 3200, expenses: 1800 },
  { day: "Tue", sales: 4100, expenses: 2200 },
  { day: "Wed", sales: 3800, expenses: 2000 },
  { day: "Thu", sales: 4500, expenses: 2400 },
  { day: "Fri", sales: 5200, expenses: 2800 },
  { day: "Sat", sales: 6100, expenses: 3200 },
  { day: "Sun", sales: 4800, expenses: 2600 },
]

const yearlyData = [
  { year: "2020", sales: 180000, expenses: 120000 },
  { year: "2021", sales: 220000, expenses: 140000 },
  { year: "2022", sales: 280000, expenses: 170000 },
  { year: "2023", sales: 320000, expenses: 190000 },
  { year: "2024", sales: 380000, expenses: 220000 },
]

const branchData = [
  { name: "Lablu Branch", value: 65, color: "#8884d8" },
  { name: "Gulshan Caffe", value: 35, color: "#82ca9d" },
]

const branches = [
  { id: "lablu", name: "Lablu Branch" },
  { id: "gulshan", name: "Gulshan Caffe" },
]

// Mock data for tables
const salesData = [
  { id: 1, date: "2025-01-15", customer: "John Doe", amount: 1250, branch: "Lablu Branch", status: "Completed" },
  { id: 2, date: "2025-01-14", customer: "Jane Smith", amount: 890, branch: "Gulshan Caffe", status: "Pending" },
  { id: 3, date: "2025-01-13", customer: "Bob Johnson", amount: 2100, branch: "Lablu Branch", status: "Completed" },
  { id: 4, date: "2025-01-12", customer: "Alice Brown", amount: 750, branch: "Gulshan Caffe", status: "Completed" },
  { id: 5, date: "2025-01-11", customer: "Charlie Wilson", amount: 1680, branch: "Lablu Branch", status: "Refunded" },
]

const expensesData = [
  {
    id: 1,
    date: "2025-01-15",
    description: "Office Supplies",
    amount: 450,
    branch: "Lablu Branch",
    category: "Operations",
  },
  {
    id: 2,
    date: "2025-01-14",
    description: "Marketing Campaign",
    amount: 1200,
    branch: "Gulshan Caffe",
    category: "Marketing",
  },
  {
    id: 3,
    date: "2025-01-13",
    description: "Equipment Maintenance",
    amount: 800,
    branch: "Lablu Branch",
    category: "Maintenance",
  },
  { id: 4, date: "2025-01-12", description: "Staff Training", amount: 600, branch: "Gulshan Caffe", category: "HR" },
  {
    id: 5,
    date: "2025-01-11",
    description: "Utility Bills",
    amount: 350,
    branch: "Lablu Branch",
    category: "Utilities",
  },
]

const employeesData = [
  { id: 1, name: "Sarah Johnson", position: "Manager", branch: "Lablu Branch", salary: 5500, status: "Active" },
  { id: 2, name: "Mike Chen", position: "Sales Associate", branch: "Gulshan Caffe", salary: 3200, status: "Active" },
  { id: 3, name: "Emily Davis", position: "Cashier", branch: "Lablu Branch", salary: 2800, status: "Active" },
  {
    id: 4,
    name: "David Wilson",
    position: "Assistant Manager",
    branch: "Gulshan Caffe",
    salary: 4200,
    status: "On Leave",
  },
  { id: 5, name: "Lisa Anderson", position: "Sales Associate", branch: "Lablu Branch", salary: 3000, status: "Active" },
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

interface FilterState {
  fromDate: string
  toDate: string
  selectedBranch: string
}

interface MetricCardProps {
  title: string
  value: number
  change: number
  trend: "up" | "down" | "neutral"
  icon: React.ReactNode
  gradient: string
  prefix?: string
  isLoading?: boolean
}

function MetricCard({ title, value, change, trend, icon, gradient, prefix = "", isLoading }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        let start = 0
        const end = value
        const duration = 1000
        const increment = end / (duration / 16)

        const counter = setInterval(() => {
          start += increment
          if (start >= end) {
            setDisplayValue(end)
            clearInterval(counter)
          } else {
            setDisplayValue(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(counter)
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [value, isLoading])

  const formatValue = (val: number) => {
    if (prefix === "$") {
      return val.toLocaleString()
    }
    return val.toString()
  }

  const getTrendIcon = () => {
    if (trend === "up") return <TrendingUp className="h-3 w-3" />
    if (trend === "down") return <TrendingDown className="h-3 w-3" />
    return null
  }

  const getTrendColor = () => {
    if (trend === "up") return "text-green-400"
    if (trend === "down") return "text-red-400"
    return "text-gray-400"
  }

  if (isLoading) {
    return (
      <Card className="relative overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <Input className="h-4 w-24" />
          <Input className="h-4 w-4 rounded" />
        </CardHeader>
        <CardContent>
          <Input className="h-8 w-16 mb-2" />
          <Input className="h-3 w-20" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg ${gradient} text-white group cursor-pointer`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <CardTitle className="text-sm font-medium opacity-90">{title}</CardTitle>
        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">{icon}</div>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="text-3xl font-bold mb-2">
          {prefix}
          {value.toString()}
        </div>

        <div className="flex items-center space-x-2">
          <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
            {getTrendIcon()}
            <span className="text-xs font-medium">
              {change !== 0 ? `${change > 0 ? "+" : ""}${change}%` : "No change"}
            </span>
          </div>

          {trend !== "neutral" && (
            <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
              {trend === "up" ? "Growing" : "Declining"}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

interface DataTableProps {
  data: any[]
  columns: { key: string; label: string }[]
  onEdit: (item: any) => void
  onDelete: (item: any) => void
}

function DataTable({ data, columns, onEdit, onDelete }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((value) => value?.toString().toLowerCase().includes(searchTerm.toLowerCase())),
    )
  }, [data, searchTerm])

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredData.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredData, currentPage])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="text-xs bg-transparent">
                <Plus className="mr-2 h-4 w-4" />
                Import
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:flex-none sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 text-sm"
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    {columns.map((column) => (
                      <TableHead key={column.key} className="text-xs md:text-sm">
                        {column.label}
                      </TableHead>
                    ))}
                    <TableHead className="text-xs md:text-sm">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item, index) => (
                    <TableRow key={index}>
                      {columns.map((column) => (
                        <TableCell key={column.key} className="text-xs md:text-sm">
                          {column.key === "amount" ? `$${item[column.key]}` : item[column.key]}
                        </TableCell>
                      ))}
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" onClick={() => onEdit(item)}>
                            <Edit className="h-3 w-3 md:h-4 md:w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => onDelete(item)}>
                            <Trash2 className="h-3 w-3 md:h-4 md:w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          <div className="text-xs md:text-sm text-muted-foreground">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <X className="h-4 w-4" />
            </Button>
            <span className="text-xs md:text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function DataManagementTable({ title, data, columns, onEdit, onDelete }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable data={data} columns={columns} onEdit={onEdit} onDelete={onDelete} />
      </CardContent>
    </Card>
  )
}

const mockSalesData = salesData

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [showDataEntryCenter, setShowDataEntryCenter] = useState(false)
  const [addBranchModalOpen, setAddBranchModalOpen] = useState(false)
  const [analyticsModalOpen, setAnalyticsModalOpen] = useState(false)
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false)
  const [rightPanelOpen, setRightPanelOpen] = useState(false)
  const [rightPanelContent, setRightPanelContent] = useState("")
  const [profileViewModalOpen, setProfileViewModalOpen] = useState(false)
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    branch: "all", // Changed from empty string to "all"
  })
  const [addDataForm, setAddDataForm] = useState({
    date: new Date().toISOString().split("T")[0],
    branch: "lablu", // Updated default value to be a non-empty string
  })
  const [addDataModalOpen, setAddDataModalOpen] = useState(false)

  const handleAddDataSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Add Data Form:", addDataForm)
    setAddDataModalOpen(false)
    // Navigate to the comprehensive data entry page
    router.push("/add-data")
    setAddDataForm({
      date: new Date().toISOString().split("T")[0],
      branch: "lablu",
    })
  }

  const filteredMonthlyData = useMemo(() => {
    let filtered = allMonthlyData

    if (filters.branch !== "all") {
      // Changed from !== "" to !== "all"
      const branchName = branches.find((b) => b.id === filters.branch)?.name
      if (branchName) {
        filtered = filtered.filter((item) => item.branch === branchName)
      }
    }

    const grouped = filtered.reduce(
      (acc, item) => {
        const existing = acc.find((a) => a.month === item.month)
        if (existing) {
          existing.sales += item.sales
          existing.expenses += item.expenses
          existing.profit += item.profit
        } else {
          acc.push({
            month: item.month,
            sales: item.sales,
            expenses: item.expenses,
            profit: item.profit,
          })
        }
        return acc
      },
      [] as Array<{ month: string; sales: number; expenses: number; profit: number }>,
    )

    return grouped.sort((a, b) => {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
      return months.indexOf(a.month) - months.indexOf(b.month)
    })
  }, [filters])

  const filteredData = useMemo(() => {
    let filtered = allMonthlyData

    if (filters.branch !== "all") {
      // Changed from !== "" to !== "all"
      const branchName = branches.find((b) => b.id === filters.branch)?.name
      if (branchName) {
        filtered = filtered.filter((item) => item.branch === branchName)
      }
    }

    return filtered.reduce((acc, item) => {
      const existing = acc.find((a) => a.month === item.month)
      if (existing) {
        existing.sales += item.sales
        existing.expenses += item.expenses
      } else {
        acc.push({ month: item.month, sales: item.sales, expenses: item.expenses })
      }
      return acc
    }, [])
  }, [filters])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleReportsSelection = (option: string) => {
    if (option === "data-entry-center") {
      setRightPanelContent("data-entry-center")
      setRightPanelOpen(true)
    } else {
      setRightPanelOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-30">
        <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 lg:px-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden h-8 w-8 sm:h-10 sm:w-10"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">D</span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold hidden xs:block">Dashboard</h1>
            </div>
          </div>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <User className="h-3 w-3 sm:h-5 sm:w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-48 sm:w-56"
              align="center"
              side="bottom"
              alignOffset={0}
              sideOffset={8}
              forceMount
            >
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setProfileViewModalOpen(true)}>
                <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span>View Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setChangePasswordModalOpen(true)}>
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

      <div className="flex">
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}

        <aside
          className={`fixed inset-y-0 left-0 z-50 w-56 sm:w-64 bg-card border-r transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex h-full flex-col">
            

            <div className="flex-1 overflow-y-auto py-3 sm:py-4">
              <nav className="space-y-2 px-2 sm:px-3">
                {/* Dashboard Section */}
                <div className="pb-2">
                  <Link href="/">
                    <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm bg-accent h-8 sm:h-9">
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
                      
                      <DropdownMenuContent align="start" className="w-44 sm:w-48">
                        <DropdownMenuLabel>Data Entry Center</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleReportsSelection("data-entry-center")}>
                          <Database className="mr-2 h-4 w-4" />
                          Data Entry Center
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/sales-report" className="flex items-center">
                            <TrendingUp className="mr-2 h-4 w-4" />
                            Sales Report
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/inventory-report" className="flex items-center">
                            <Package className="mr-2 h-4 w-4" />
                            Inventory Report
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/expense-report" className="flex items-center">
                            <TrendingDown className="mr-2 h-4 w-4" />
                            Expenses Report
                          </Link>
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
                        <DropdownMenuItem className="leading-3" onClick={() => setAddBranchModalOpen(true)}>
                          <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Add branch
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/branches" className="flex items-center w-full">
                            <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            All branch
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/assign-branch" className="flex items-center w-full">
                            <Building className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Assign branch
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    

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
                          <Link href="/owner" className="flex items-center">
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

                    
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 min-w-0 transition-all duration-300 ${rightPanelOpen ? "mr-80" : ""}`}>
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="mx-auto max-w-full">
              {/* Navigation Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
                <div className="overflow-x-auto scrollbar-hide">
                  <TabsList className="grid w-full grid-cols-4 min-w-[280px] sm:min-w-[320px] lg:w-96 h-9 sm:h-10 md:h-11">
                    <TabsTrigger value="all" className="text-xs sm:text-sm px-1 sm:px-3">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="daily" className="text-xs sm:text-sm px-1 sm:px-3">
                      Daily
                    </TabsTrigger>
                    <TabsTrigger value="monthly" className="text-xs sm:text-sm px-1 sm:px-3">
                      Monthly
                    </TabsTrigger>
                    <TabsTrigger value="yearly" className="text-xs sm:text-sm px-1 sm:px-3">
                      Yearly
                    </TabsTrigger>
                  </TabsList>
                </div>

                <Card className="bg-muted/50">
                  <CardHeader className="pb-3 sm:pb-4 px-3 sm:px-4 md:px-6">
                    <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                      <Filter className="h-4 w-4 sm:h-5 sm:w-5" />
                      Filter Dashboard Data
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-4 md:px-6">
                    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                      <div className="space-y-2">
                        <Label htmlFor="from-date" className="text-xs sm:text-sm font-medium">
                          From Date
                        </Label>
                        <Input
                          id="from-date"
                          type="date"
                          value={filters.dateFrom}
                          onChange={(e) => setFilters((prev) => ({ ...prev, dateFrom: e.target.value }))}
                          className="w-full h-8 sm:h-9 md:h-10 text-xs sm:text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="to-date" className="text-xs sm:text-sm font-medium">
                          To Date
                        </Label>
                        <Input
                          id="to-date"
                          type="date"
                          value={filters.dateTo}
                          onChange={(e) => setFilters((prev) => ({ ...prev, dateTo: e.target.value }))}
                          className="w-full h-8 sm:h-9 md:h-10 text-xs sm:text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="branch-select" className="text-xs sm:text-sm font-medium">
                          Select Branch
                        </Label>
                        <Select
                          value={filters.branch}
                          onValueChange={(value) => setFilters((prev) => ({ ...prev, branch: value }))}
                        >
                          <SelectTrigger className="w-full h-8 sm:h-9 md:h-10 text-xs sm:text-sm">
                            <SelectValue placeholder="All Branches" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Branches</SelectItem>
                            {branches.map((branch) => (
                              <SelectItem key={branch.id} value={branch.id}>
                                {branch.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 sm:col-span-2 xl:col-span-1">
                        <Label className="text-xs sm:text-sm font-medium">Actions</Label>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => console.log("Apply Filters")}
                            className="flex-1 text-xs sm:text-sm h-8 sm:h-9 md:h-10"
                          >
                            <Filter className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Apply
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setFilters({ dateFrom: "", dateTo: "", branch: "all" })}
                            className="flex-1 text-xs sm:text-sm h-8 sm:h-9 md:h-10"
                          >
                            Reset
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <TabsContent value="all" className="space-y-4 sm:space-y-6">
                  <div className="text-center px-2 sm:px-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
                      Business Overview
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-1 sm:mt-2">
                      Complete dashboard analytics and management
                    </p>
                  </div>

                  <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                    <MetricCard
                      title="Total Sales"
                      value={mockMetrics.totalSales.value}
                      change={mockMetrics.totalSales.change}
                      trend={mockMetrics.totalSales.trend}
                      icon={<TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />}
                      gradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
                      prefix="$"
                      isLoading={isLoading}
                    />

                    <MetricCard
                      title="Total Expenses"
                      value={mockMetrics.totalExpenses.value}
                      change={mockMetrics.totalExpenses.change}
                      trend={mockMetrics.totalExpenses.trend}
                      icon={<Wallet className="h-3 w-3 sm:h-4 sm:w-4" />}
                      gradient="bg-gradient-to-br from-blue-500 to-blue-600"
                      prefix="$"
                      isLoading={isLoading}
                    />

                    <MetricCard
                      title="Net Profit"
                      value={mockMetrics.netProfit.value}
                      change={mockMetrics.netProfit.change}
                      trend={mockMetrics.netProfit.trend}
                      icon={<BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" />}
                      gradient="bg-gradient-to-br from-violet-500 to-violet-600"
                      prefix="$"
                      isLoading={isLoading}
                    />

                    <MetricCard
                      title="Active Branches"
                      value={mockMetrics.activeBranches.value}
                      change={mockMetrics.activeBranches.change}
                      trend={mockMetrics.activeBranches.trend}
                      icon={<Building className="h-3 w-3 sm:h-4 sm:w-4" />}
                      gradient="bg-gradient-to-br from-amber-500 to-amber-600"
                      isLoading={isLoading}
                    />
                  </div>

                  <div className="grid gap-4 sm:gap-6 grid-cols-1 xl:grid-cols-3">
                    <Card className="xl:col-span-2">
                      <CardHeader className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4">
                        <CardTitle className="text-sm sm:text-base md:text-lg">Monthly Sales & Expenses</CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-4 md:px-6">
                        <ChartContainer
                          config={{
                            sales: { label: "Sales", color: "hsl(var(--chart-1))" },
                            expenses: { label: "Expenses", color: "hsl(var(--chart-2))" },
                          }}
                          className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[350px] w-full"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              data={filteredData}
                              margin={{
                                top: 10,
                                right: 5,
                                left: 5,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" fontSize={10} className="text-xs sm:text-sm" />
                              <YAxis fontSize={10} className="text-xs sm:text-sm" />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="sales" fill="var(--color-sales)" />
                              <Bar dataKey="expenses" fill="var(--color-expenses)" />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4">
                        <CardTitle className="text-sm sm:text-base md:text-lg">Branch Performance</CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 sm:px-4 md:px-6">
                        <ChartContainer
                          config={{
                            performance: { label: "Performance", color: "hsl(var(--chart-3))" },
                          }}
                          className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[350px] w-full"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={branchData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                outerRadius="60%"
                                fill="#8884d8"
                                dataKey="value"
                                fontSize={10}
                              >
                                {branchData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                    </Card>
                  </div>

                  <DataManagementTable
                    title="Recent Sales"
                    data={mockSalesData}
                    columns={[
                      { key: "date", label: "Date" },
                      { key: "branch", label: "Branch" },
                      { key: "amount", label: "Amount" },
                      { key: "customer", label: "Customer" },
                    ]}
                    onEdit={(item) => console.log("Edit", item)}
                    onDelete={(item) => console.log("Delete", item)}
                  />
                </TabsContent>

                <TabsContent value="daily" className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="text-center px-4 sm:px-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Daily Analytics</h2>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
                      Today's performance metrics
                    </p>
                  </div>

                  <Card>
                    <CardHeader className="px-4 sm:px-6">
                      <CardTitle className="text-base sm:text-lg md:text-xl">Daily Sales vs Expenses</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6">
                      <div className="h-[250px] sm:h-[300px] md:h-[400px] w-full">
                        <ChartContainer
                          config={chartConfig}
                          className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[350px] w-full"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                              data={dailyData}
                              margin={{
                                top: 10,
                                right: 5,
                                left: 5,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="day" fontSize={10} className="text-xs sm:text-sm" />
                              <YAxis fontSize={10} className="text-xs sm:text-sm" />
                              <Tooltip />
                              <Legend />
                              <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" strokeWidth={2} />
                              <Line type="monotone" dataKey="expenses" stroke="var(--color-expenses)" strokeWidth={2} />
                            </LineChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="monthly" className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="text-center px-4 sm:px-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Monthly Analytics</h2>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
                      This month's performance overview
                    </p>
                  </div>

                  <Card>
                    <CardHeader className="px-4 sm:px-6">
                      <CardTitle className="text-base sm:text-lg md:text-xl">Monthly Performance Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6">
                      <div className="h-[250px] sm:h-[300px] md:h-[400px] w-full">
                        <ChartContainer
                          config={chartConfig}
                          className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[350px] w-full"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              data={filteredMonthlyData}
                              margin={{
                                top: 10,
                                right: 5,
                                left: 5,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" fontSize={10} className="text-xs sm:text-sm" />
                              <YAxis fontSize={10} className="text-xs sm:text-sm" />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="sales" fill="var(--color-sales)" />
                              <Bar dataKey="expenses" fill="var(--color-expenses)" />
                              <Bar dataKey="profit" fill="var(--color-profit)" />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="yearly" className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="text-center px-4 sm:px-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Yearly Analytics</h2>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
                      Annual performance summary
                    </p>
                  </div>

                  <Card>
                    <CardHeader className="px-4 sm:px-6">
                      <CardTitle className="text-base sm:text-lg md:text-xl">Yearly Growth Trends</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6">
                      <div className="h-[250px] sm:h-[300px] md:h-[400px] w-full">
                        <ChartContainer
                          config={chartConfig}
                          className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[350px] w-full"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                              data={yearlyData}
                              margin={{
                                top: 10,
                                right: 5,
                                left: 5,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="year" fontSize={10} className="text-xs sm:text-sm" />
                              <YAxis fontSize={10} className="text-xs sm:text-sm" />
                              <Tooltip />
                              <Legend />
                              <Area
                                type="monotone"
                                dataKey="sales"
                                stackId="1"
                                stroke="var(--color-sales)"
                                fill="var(--color-sales)"
                                fillOpacity={0.6}
                              />
                              <Area
                                type="monotone"
                                dataKey="expenses"
                                stackId="1"
                                stroke="var(--color-expenses)"
                                fill="var(--color-expenses)"
                                fillOpacity={0.6}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>

        <Dialog open={addBranchModalOpen} onOpenChange={setAddBranchModalOpen}>
          <DialogContent className="max-w-[90vw] sm:max-w-md md:max-w-lg p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Add Branch
              </DialogTitle>
              <DialogDescription>Create a new branch location for your business.</DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // Handle form submission
                console.log("[v0] Branch form submitted")
                setAddBranchModalOpen(false)
              }}
              className="space-y-4"
            >
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="branch-name" className="text-sm font-medium">
                    Branch Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="branch-name"
                    name="branch_name"
                    placeholder="Enter Branch Name"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="branch-address" className="text-sm font-medium">
                    Branch Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="branch-address"
                    name="branch_address"
                    placeholder="Enter Branch Address"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="side-note" className="text-sm font-medium">
                    Side Note
                  </Label>
                  <Input id="side-note" name="note" placeholder="Side Note" className="w-full" />
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setAddBranchModalOpen(false)}
                  className="flex-1 sm:flex-none"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700">
                  <Building className="mr-2 h-4 w-4" />
                  Add Branch
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Profile View Modal */}
        <Dialog open={profileViewModalOpen} onOpenChange={setProfileViewModalOpen}>
          <DialogContent className="max-w-[90vw] sm:max-w-2xl p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl">Admin Profile</DialogTitle>
              <DialogDescription>View and update your profile information</DialogDescription>
            </DialogHeader>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 items-center">
                  <Label htmlFor="admin-name" className="sm:text-right font-medium">
                    Admin Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="sm:col-span-3">
                    <Input id="admin-name" type="text" defaultValue="sujon" required className="w-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 items-center">
                  <Label htmlFor="admin-email" className="sm:text-right font-medium">
                    Admin E-mail <span className="text-red-500">*</span>
                  </Label>
                  <div className="sm:col-span-3">
                    <Input id="admin-email" type="email" defaultValue="admin@gmail.com" required className="w-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 items-start">
                  <Label htmlFor="profile-photo" className="sm:text-right font-medium pt-2">
                    Profile Photo <span className="text-red-500">*</span>
                  </Label>
                  <div className="sm:col-span-3 space-y-3">
                    <Input id="profile-photo" type="file" accept="image/*" className="w-full" />
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Current profile"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border-2 border-gray-200"
                      />
                      <div className="text-sm text-muted-foreground">Current profile photo</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setProfileViewModalOpen(false)}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Update Profile
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={changePasswordModalOpen} onOpenChange={setChangePasswordModalOpen}>
          <DialogContent className="max-w-[90vw] sm:max-w-md md:max-w-lg p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Settings className="h-5 w-5 text-orange-600" />
                Change Password
              </DialogTitle>
              <DialogDescription>Update your account password. Make sure to use a strong password.</DialogDescription>
            </DialogHeader>
            <form className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="old-password" className="text-sm font-medium">
                    Old Password <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="old-password"
                    name="old_password"
                    type="password"
                    required
                    className="w-full"
                    placeholder="Enter your current password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-sm font-medium">
                    New Password <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="new-password"
                    name="password"
                    type="password"
                    required
                    className="w-full"
                    placeholder="Enter your new password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-sm font-medium">
                    Confirm Password <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="confirm-password"
                    name="password_confirmation"
                    type="password"
                    required
                    className="w-full"
                    placeholder="Confirm your new password"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setChangePasswordModalOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-orange-600 hover:bg-orange-700">
                  <Settings className="mr-2 h-4 w-4" />
                  Change Password
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={analyticsModalOpen} onOpenChange={setAnalyticsModalOpen}>
          <DialogContent className="max-w-[95vw] sm:max-w-2xl md:max-w-4xl p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl md:text-2xl">Filter Dashboard Data</DialogTitle>
              <DialogDescription className="text-sm sm:text-base">
                Select date range and branch to filter your dashboard analytics data.
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="from_date" className="text-sm font-medium">
                    Select From Date
                  </Label>
                  <Input
                    type="date"
                    id="from_date"
                    name="from_date"
                    defaultValue="2025-08-14"
                    className="w-full shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="to_date" className="text-sm font-medium">
                    Select To Date
                  </Label>
                  <Input
                    type="date"
                    id="to_date"
                    name="to_date"
                    defaultValue="2025-08-14"
                    className="w-full shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="branch_id" className="text-sm font-medium">
                    Select Branch
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full shadow-sm">
                      <SelectValue placeholder="Select Branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="53">Lablu Branch</SelectItem>
                      <SelectItem value="52">gulshan_caffe_branch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium opacity-0 block">Action</Label>
                  <Button
                    type="button"
                    className="w-full bg-blue-600 hover:bg-blue-700 shadow-sm"
                    onClick={() => {
                      setAnalyticsModalOpen(false)
                      window.location.href = "/reports"
                    }}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Apply Filter
                  </Button>
                </div>
              </div>
            </form>

            <div className="flex justify-end pt-4 border-t">
              <Button variant="outline" onClick={() => setAnalyticsModalOpen(false)} className="px-6">
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={addEmployeeModalOpen} onOpenChange={setAddEmployeeModalOpen}>
          <DialogContent className="max-w-[90vw] sm:max-w-md md:max-w-lg p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl">Add Employee</DialogTitle>
              <DialogDescription>
                Add a new employee to your organization by selecting a branch and entering their details.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // Handle form submission here
                console.log("[v0] Employee form submitted")
                setAddEmployeeModalOpen(false)
              }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="grid gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="branch_id" className="text-sm font-medium">
                    Branch Name <span className="text-red-500">*</span>
                  </Label>
                  <Select required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="53">Lablu Branch</SelectItem>
                      <SelectItem value="52">gulshan_caffe_branch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employee_name" className="text-sm font-medium">
                    Employee Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="employee_name"
                    name="name"
                    type="text"
                    placeholder="Enter Name."
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {rightPanelOpen && (
          <aside className="fixed right-0 top-0 bottom-0 w-80 bg-card border-l z-40 overflow-y-auto">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Data Entry Center</h2>
                <Button variant="ghost" size="icon" onClick={() => setRightPanelOpen(false)} className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {rightPanelContent === "data-entry-center" && (
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border">
                    <h3 className="font-medium text-blue-900 mb-2">Quick Entry</h3>
                    <p className="text-sm text-blue-700 mb-3">Add new data entries quickly</p>
                    <Button size="sm" className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      New Entry
                    </Button>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border">
                    <h3 className="font-medium text-green-900 mb-2">Recent Entries</h3>
                    <div className="space-y-2">
                      <div className="text-xs p-2 bg-white rounded border">
                        <div className="font-medium">Sales Entry #001</div>
                        <div className="text-muted-foreground">2 hours ago</div>
                      </div>
                      <div className="text-xs p-2 bg-white rounded border">
                        <div className="font-medium">Inventory Update</div>
                        <div className="text-muted-foreground">4 hours ago</div>
                      </div>
                      <div className="text-xs p-2 bg-white rounded border">
                        <div className="font-medium">Expense Entry #045</div>
                        <div className="text-muted-foreground">1 day ago</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border">
                    <h3 className="font-medium text-purple-900 mb-2">Data Statistics</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-purple-700">Today's Entries:</span>
                        <span className="font-medium">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-700">This Week:</span>
                        <span className="font-medium">156</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-700">This Month:</span>
                        <span className="font-medium">642</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
