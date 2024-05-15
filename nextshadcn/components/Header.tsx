'use client'
import { Bell, ChevronDown,} from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { read } from "fs";


export default function Header() {
    const [notification, setNotification] = useState<any>([
        {
            text: "this is a notification",
            date: "2 days ago",
            read: true
        },
        {
            text: "this is another notification",
            date: "1 day ago",
            read: false
        }
    ])


    return <div className="grid grid-cols-2 gap-4 p-4 border-b" >
        <CommandDemo />
        <div className="flex items-center justify-end">
        <DropdownMenu>
        <DropdownMenuTrigger >
            <Button variant="outline" size="icon" className="mr-2">
             <Bell className="h-4 w-4"/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" >
            {notification.map((item:any, key: number) => 
            <DropdownMenuItem key={key} className="flex items-center justify-between gap-2 p-4 cursor-pointer hover:bg-neutral-50 transition">
                <p>{item.text}</p>
                <p>{item.date}</p>
                <span className="text-gray-500 font-light text-xs">{item.read ? 'Read' : 'Unread'}</span>
            </DropdownMenuItem>)}
        </DropdownMenuContent>
        </DropdownMenu>

        </div>
    </div>
}