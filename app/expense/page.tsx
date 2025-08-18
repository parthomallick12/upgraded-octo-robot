"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Menu,
  X,
  DollarSign,
  CreditCard,
  Users,
  Package,
  FileText,
  UserPlus,
  ChevronDown,
  Settings,
  Building2,
  User,
  Lock,
  LogOut,
  Zap,
  Building,
  Truck,
  Briefcase,
  Home,
  Calculator,
  UtensilsCrossed,
} from "lucide-react"

export default function ExpensePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState("")
  const [selectedDate, setSelectedDate] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center px-4 lg:px-6">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex items-center space-x-4">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-semibold">Expense Management</h1>
          </div>

          {/* Profile Dropdown */}
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">John Doe</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Lock className="mr-2 h-4 w-4" />
                  Change Password
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
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
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0`}
        >
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-16 items-center border-b px-4 lg:px-6">
              <Link className="flex items-center gap-2 font-semibold" href="/">
                <Building2 className="h-6 w-6" />
                <span>Dashboard</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="ml-auto md:hidden">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              <nav className="space-y-2 px-3">
                {/* Business Operations Section */}
                <div className="pb-2">
                  <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Business Operations
                  </h3>
                  <div className="space-y-1">
                    <Link href="/sales">
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        <DollarSign className="mr-2 h-4 w-4" />
                        Sales
                      </Button>
                    </Link>
                    <Button variant="ghost" className="w-full justify-start text-sm bg-accent text-accent-foreground">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Expense
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-sm">
                      <Users className="mr-2 h-4 w-4" />
                      Employee
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-sm">
                      <Package className="mr-2 h-4 w-4" />
                      Inventory
                    </Button>
                  </div>
                </div>

                {/* Reports Section */}
                <div className="pb-2">
                  <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Reports
                  </h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start text-sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Report
                    </Button>
                  </div>
                </div>

                {/* Management Tools Section */}
                <div className="pb-2">
                  <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Management Tools
                  </h3>
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
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem>Add Admin</DropdownMenuItem>
                        <DropdownMenuItem>Add Manager</DropdownMenuItem>
                        <DropdownMenuItem>Add Owner</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <div className="container mx-auto p-4 lg:p-6 max-w-7xl">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight">Expense Management</h1>
              <p className="text-muted-foreground">Manage all your business expenses across different categories</p>
            </div>

            {/* Branch & Date Selection */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="branch">Select Branch</Label>
                    <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lablu">Lablu Branch</SelectItem>
                        <SelectItem value="gulshan">Gulshan Caffe Branch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Select Date</Label>
                    <Input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expense Categories Tabs */}
            <Tabs defaultValue="utilities" className="space-y-6">
              <div className="overflow-x-auto">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-9 min-w-max">
                  <TabsTrigger value="utilities" className="flex items-center gap-2 text-xs">
                    <Zap className="h-4 w-4" />
                    Utilities
                  </TabsTrigger>
                  <TabsTrigger value="office" className="flex items-center gap-2 text-xs">
                    <Building className="h-4 w-4" />
                    Office
                  </TabsTrigger>
                  <TabsTrigger value="delivery" className="flex items-center gap-2 text-xs">
                    <Truck className="h-4 w-4" />
                    Delivery
                  </TabsTrigger>
                  <TabsTrigger value="managing" className="flex items-center gap-2 text-xs">
                    <Briefcase className="h-4 w-4" />
                    Managing
                  </TabsTrigger>
                  <TabsTrigger value="rent" className="flex items-center gap-2 text-xs">
                    <Home className="h-4 w-4" />
                    Shop Rent
                  </TabsTrigger>
                  <TabsTrigger value="salaries" className="flex items-center gap-2 text-xs">
                    <Users className="h-4 w-4" />
                    Salaries
                  </TabsTrigger>
                  <TabsTrigger value="fooding" className="flex items-center gap-2 text-xs">
                    <UtensilsCrossed className="h-4 w-4" />
                    Fooding
                  </TabsTrigger>
                  <TabsTrigger value="home" className="flex items-center gap-2 text-xs">
                    <Home className="h-4 w-4" />
                    Home
                  </TabsTrigger>
                  <TabsTrigger value="calculations" className="flex items-center gap-2 text-xs">
                    <Calculator className="h-4 w-4" />
                    Calculations
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Utilities Tab */}
              <TabsContent value="utilities">
                <Card>
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Cost Of Sales
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label>Select Cost of Sales</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select item" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="electricity">Electricity</SelectItem>
                            <SelectItem value="water">Water</SelectItem>
                            <SelectItem value="gas">Gas</SelectItem>
                            <SelectItem value="internet">Internet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>
                            <SelectItem value="card">Card</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Amount (zł)</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label>Notes</Label>
                        <Input placeholder="Additional notes" />
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">Submit Utilities Expense</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Office Expense Tab */}
              <TabsContent value="office">
                <Card>
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      Office Expense
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label>Select Office Expense</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select expense" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="accountant">Accountant</SelectItem>
                            <SelectItem value="zus_pit">ZUS & PIT</SelectItem>
                            <SelectItem value="pfron">PFRON</SelectItem>
                            <SelectItem value="cit">CIT</SelectItem>
                            <SelectItem value="tv">TV</SelectItem>
                            <SelectItem value="pit11">PIT-11</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>
                            <SelectItem value="card">Card</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Netto (zł)</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label>Brutto (zł)</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">Submit Office Expense</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Delivery Costs Tab */}
              <TabsContent value="delivery">
                <Card>
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Delivery Costs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label>Delivery Service</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wolt">Wolt</SelectItem>
                            <SelectItem value="bolt">Bolt</SelectItem>
                            <SelectItem value="uber">Uber Eats</SelectItem>
                            <SelectItem value="glovo">Glovo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>
                            <SelectItem value="card">Card</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Amount (zł)</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label>Notes</Label>
                        <Input placeholder="Delivery notes" />
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">Submit Delivery Expense</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Managing Expenses Tab */}
              <TabsContent value="managing">
                <Card>
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Managing Expenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label>Faktura No.</Label>
                        <Input placeholder="Invoice number" />
                      </div>
                      <div className="space-y-2">
                        <Label>Notes</Label>
                        <Input placeholder="Management notes" />
                      </div>
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>
                            <SelectItem value="card">Card</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Netto (zł)</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">Submit Managing Expense</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Shop Rent Tab */}
              <TabsContent value="rent">
                <Card>
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Shop Rents
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label>Property</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select property" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="main_shop">Main Shop</SelectItem>
                            <SelectItem value="branch_1">Branch 1</SelectItem>
                            <SelectItem value="warehouse">Warehouse</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>
                            <SelectItem value="card">Card</SelectItem>
                            <SelectItem value="transfer">Bank Transfer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Rent Amount (zł)</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label>Period</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="yearly">Yearly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">Submit Rent Expense</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Salaries Tab */}
              <TabsContent value="salaries">
                <Card>
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Salaries
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label>Employee</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employee" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emp1">John Doe</SelectItem>
                            <SelectItem value="emp2">Jane Smith</SelectItem>
                            <SelectItem value="emp3">Mike Johnson</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>
                            <SelectItem value="transfer">Bank Transfer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Salary Amount (zł)</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label>Bonus (zł)</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">Submit Salary Payment</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Fooding Expense Tab */}
              <TabsContent value="fooding">
                <Card>
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="flex items-center gap-2">
                      <UtensilsCrossed className="h-5 w-5" />
                      Fooding Expenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label>Employee</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employee" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emp1">John Doe</SelectItem>
                            <SelectItem value="emp2">Jane Smith</SelectItem>
                            <SelectItem value="emp3">Mike Johnson</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Meal Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select meal type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="breakfast">Breakfast</SelectItem>
                            <SelectItem value="lunch">Lunch</SelectItem>
                            <SelectItem value="dinner">Dinner</SelectItem>
                            <SelectItem value="snacks">Snacks</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Amount (zł)</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label>Notes</Label>
                        <Input placeholder="Meal details" />
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">Submit Fooding Expense</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Home Expenses Tab */}
              <TabsContent value="home">
                <Card>
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Home Expenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label>Expense Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select expense" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rent">Rent</SelectItem>
                            <SelectItem value="utilities">Utilities</SelectItem>
                            <SelectItem value="maintenance">Maintenance</SelectItem>
                            <SelectItem value="insurance">Insurance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>
                            <SelectItem value="card">Card</SelectItem>
                            <SelectItem value="transfer">Bank Transfer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Amount (zł)</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Input placeholder="Expense description" />
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">Submit Home Expense</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Salary Calculations Tab */}
              <TabsContent value="calculations">
                <Card>
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Salary Calculations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Calculate Net Salary</h3>
                        <div className="space-y-2">
                          <Label>Gross Salary (zł)</Label>
                          <Input type="number" placeholder="0.00" />
                        </div>
                        <div className="space-y-2">
                          <Label>Tax Rate (%)</Label>
                          <Input type="number" placeholder="18" />
                        </div>
                        <div className="space-y-2">
                          <Label>Social Security (%)</Label>
                          <Input type="number" placeholder="13.71" />
                        </div>
                        <Button>Calculate Net Salary</Button>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Calculation Result</h3>
                        <div className="p-4 bg-muted rounded-lg">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Gross Salary:</span>
                              <span className="font-semibold">0.00 zł</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Tax:</span>
                              <span className="font-semibold">0.00 zł</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Social Security:</span>
                              <span className="font-semibold">0.00 zł</span>
                            </div>
                            <hr />
                            <div className="flex justify-between text-lg font-bold">
                              <span>Net Salary:</span>
                              <span>0.00 zł</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
