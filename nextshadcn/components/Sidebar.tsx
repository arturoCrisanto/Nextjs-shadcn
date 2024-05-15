import { Bell,
    CreditCard,
    FolderLock,
    Inbox,
    ScrollText,
    Settings,
    User
} from "lucide-react";
import UserItem from "./UserItem";
import { Command, 
    CommandGroup, 
    CommandList,
    CommandItem,
    CommandSeparator
} from "./ui/command";



export default function Sidebar() {
    const menuList = [{
        group: 'General',
        items: [{
            text: 'Profile',
            icon: <User />,
            link: '/'
        }, 
        {
            text: 'biling',
            icon: <CreditCard />,
            link: '/'
        },
        {
            text: 'inbox',
            icon: <Inbox />,
            link: '/'
        }, 
        {
            text: 'Notification',
            icon: <Bell />,
            link: '/'
        }]
        
    },
    {
        group: 'Settings',
        items: [{
            text: 'General Settings',
            icon: <Settings />,
            link: '/'
        }, 
        {
            text: 'Privacy',
            icon: <FolderLock />,
            link: '/'
        },
        {
            text: 'Logs',
            icon: <ScrollText />,
            link: '/'
        }
       ]
        
    }
]
  return (
    <div className="flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4 gap-2">
        <div>
                <UserItem />
        </div>
        <div className="grow">
    <Command style={{overflow: "visible"}}>
        <CommandList style={{overflow: "visible"}}>
            {menuList.map((menu: any, key: number )=> (
                <CommandGroup key={key} heading={menu.group}>
                        {menu.items.map((option: any, optionsKey: number) => 
                        <CommandItem key={optionsKey} className="flex gap-2 text-xs font-medium cursor-pointer">
                            {option.icon}
                            {option.text}
                            </CommandItem>)}
                </CommandGroup>
                    )
                )
            }
        </CommandList>
    </Command>
        </div>
        <div>Setting / notification</div>

    </div>
  );
} 