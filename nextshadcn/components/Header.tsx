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
            <Button variant="outline" size="icon" className="relative">
            <div className={`absolute -top-1 -right-1 h-3 w-3 rounded-full self-center
                ${notification.find((x: any)=> x.read===true ) ? 'bg-green-500' : 'hidden'}`}>
            </div>
             <Bell className="h-4 w-4"/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" > 
            {notification.map((item:any, key: number) => 
            <DropdownMenuItem key={key} className=" py-2 px-3 flex items-start gap-2 cursor-pointer hover:bg-neutral-50 transition">
                <div className={`h-3 w-3 rounded-full self-center
                ${item.read ? 'bg-green-500' : 'bg-neutral-200'}`}>
                </div>
                <p>{item.text}</p>
                <p className="text-xs text-neutral-500 self-center">{item.date}</p>
            </DropdownMenuItem>)}
        </DropdownMenuContent>
        </DropdownMenu>

        </div>
    </div>
}