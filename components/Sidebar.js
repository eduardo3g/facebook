import {  useSession } from 'next-auth/client';
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import SidebarRow from './SidebarRow';

function Sidebar() {
  const [session, loading] = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UserGroupIcon} title="Friends" />
      <SidebarRow Icon={ShoppingBagIcon} title="Groups" />
      <SidebarRow Icon={DesktopComputerIcon} title="Marketplace" />
      <SidebarRow Icon={CalendarIcon} title="Watch" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
