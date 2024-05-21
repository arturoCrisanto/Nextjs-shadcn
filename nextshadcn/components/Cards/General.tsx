'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Overview from "./Overview"
import Analytics from "./Analytics"
import Reports from "./Reports"

export default function General() {
    return (
    <div>
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="gap-1 rounded-sm">
                <TabsTrigger className="rounded-xl" value="Overview">Overview</TabsTrigger>
                <TabsTrigger className="rounded-xl" value="Analytics">Analytics</TabsTrigger>
                <TabsTrigger className="rounded-xl" value="Reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="Overview"><Overview/></TabsContent>
            <TabsContent value="Analytics"><Analytics/></TabsContent>
            <TabsContent value="Reports"><Reports/></TabsContent>
        </Tabs>
    </div>
    )
}