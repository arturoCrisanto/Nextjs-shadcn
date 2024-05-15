import UserItem from "./UserItem";


export default function Sidebar() {
  return (
  <div className="flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4 gap-2">
    <div>
        <UserItem />
    </div>
    <div className="grow">Menu</div>
    <div>Setting / notification</div>

  </div>
  );
} 